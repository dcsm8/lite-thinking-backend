<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Inventory;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InventoryController extends Controller
{
    public function index()
    {
        $inventories = Inventory::with('product')->get();

        return Inertia::render('Inventories/Index', [
            'inventories' => $inventories,
        ]);
    }

    public function create()
    {
        return Inertia::render('Inventories/Create', [
            'companies' => Company::all(),
            'products' => Product::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'company_NIT' => 'required|exists:companies,NIT',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:0',
        ]);

        Inventory::create($validatedData);

        return redirect()->route('inventories.index')->with('success', 'Inventory created successfully.');
    }

    public function edit(Inventory $inventory)
    {
        return Inertia::render('Inventories/Edit', [
            'inventory' => $inventory,
        ]);
    }

    public function update(Request $request, Inventory $inventory)
    {
        $validatedData = $request->validate([
            'company_NIT' => 'required|exists:companies,NIT',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:0',
        ]);

        $inventory->update($validatedData);

        return redirect()->route('inventories.index')->with('success', 'Inventory updated successfully.');
    }

    public function destroy(Inventory $inventory)
    {
        $inventory->delete();

        return redirect()->route('inventories.index')->with('success', 'Inventory deleted successfully.');
    }
}
