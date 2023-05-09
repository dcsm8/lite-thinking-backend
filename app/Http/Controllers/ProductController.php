<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return response()->json($products);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
        ]);

        $product = Product::create($validatedData);

        return response()->json(['message' => 'Product created successfully.', 'product' => $product]);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);

        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
        ]);

        Product::whereId($id)->update($validatedData);

        $product = Product::findOrFail($id);

        return response()->json(['message' => 'Product updated successfully.', 'product' => $product]);
    }

    public function destroy($id)
    {
        Product::whereId($id)->delete();

        return response()->json(['message' => 'Product deleted successfully.']);
    }
}
