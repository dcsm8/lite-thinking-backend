<?php

namespace App\Http\Controllers;

use App\Mail\InventoryPdfMailable;
use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Dompdf\Dompdf;
use Dompdf\Options;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::all();

        return Inertia::render('Companies/Index', [
            'companies' => $companies,
        ]);
    }

    public function generatePdf(Company $company)
    {
        $dompdfOptions = new Options();
        $dompdfOptions->set('isRemoteEnabled', TRUE);

        $dompdf = new Dompdf($dompdfOptions);
        $dompdf->loadHtml(view('pdf.inventory', ['company' => $company])->render());
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();

        return $dompdf->stream('inventory.pdf');
    }

    public function generatePdfInventory(Company $company)
    {
        $dompdfOptions = new Options();
        $dompdfOptions->set('isRemoteEnabled', TRUE);

        $dompdf = new Dompdf($dompdfOptions);
        $dompdf->loadHtml(view('pdf.inventory', ['company' => $company])->render());
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();

        $filename = 'inventory_' . $company->NIT . '.pdf';

        $pdfPath = 'pdfs/' . $filename;
        Storage::put($pdfPath, $dompdf->output());

        return $pdfPath;
    }



    public function sendEmail(Request $request, $NIT)
    {
        $email = $request->input('email');

        $company = Company::where('NIT', $NIT)->first();

        if (!$company) {
            return response()->json(['error' => 'Company not found'], 404);
        }

        $pdfPath = $this->generatePdfInventory($company);

        if (!$pdfPath) {
            return response()->json(['error' => 'Failed to generate PDF'], 500);
        }

        try {
            Mail::to($email)->send(new InventoryPdfMailable($pdfPath));
        } catch (\Exception $e) {
            dd($e);
            return Inertia::render('Companies/Inventory', [
                'emailError' => 'Failed to send email',
                'company' => $company
            ]);
        }

        return Inertia::render('Companies/Inventory', [
            'emailSuccess' => 'Email sent successfully',
            'company' => $company
        ]);
    }


    public function showInventory(Company $company)
    {
        $inventory = $company->load('inventory.product');

        return Inertia::render('Companies/Inventory', [
            'company' => $company,
            'inventory' => $inventory->inventory->map(function ($inventoryItem) {
                return array_merge($inventoryItem->toArray(), ['product_name' => $inventoryItem->product->name]);
            })
        ]);
    }

    public function show(Company $company)
    {
        return Inertia::render('Companies/Inventory', [
            'company' => $company->load('inventory'),
        ]);
    }


    public function create()
    {
        return Inertia::render('Companies/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'NIT' => 'required|unique:companies,NIT|max:255',
            'name' => 'required|max:255',
            'address' => 'required',
            'phone' => 'required|max:20',
        ]);

        Company::create($validatedData);

        return redirect()->route('companies.index');
    }

    public function edit(Company $company)
    {
        return Inertia::render('Companies/Edit', [
            'company' => $company,
        ]);
    }

    public function update(Request $request, Company $company)
    {
        $validatedData = $request->validate([
            'NIT' => 'required|max:255|unique:companies,NIT,' . $company->NIT . ',NIT',
            'name' => 'required|max:255',
            'address' => 'required',
            'phone' => 'required|max:20',
        ]);

        $company->update($validatedData);

        return redirect()->route('companies.index');
    }

    public function destroy(Company $company)
    {
        $company->delete();

        return redirect()->route('companies.index');
    }
}
