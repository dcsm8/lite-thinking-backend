<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::all();

        return Inertia::render('Companies/Index', [
            'companies' => $companies,
        ]);
    }

    public function show(Company $company)
    {
        return Inertia::render('Companies/View', [
            'company' => $company,
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
