<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('categories')->get();

        return Inertia::render('Products/Index', [
            'products' => $products,
        ]);
    }

    public function create()
    {
        $categories = Category::all();

        return Inertia::render('Products/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'price' => 'required|numeric',
            'categories' => 'array',
            'categories.*' => 'exists:categories,id',
        ]);

        $product = Product::create($validatedData);

        if (isset($validatedData['categories'])) {
            $product->categories()->attach($validatedData['categories']);
        }

        return redirect()->route('products.index');
    }

    public function edit(Product $product)
    {
        $product->load('categories');
        $categories = Category::all();

        return Inertia::render('Products/Edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }


    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'price' => 'required|numeric',
            'categories' => 'array',
            'categories.*' => 'exists:categories,id',
        ]);

        $product->update($validatedData);

        if (isset($validatedData['categories'])) {
            $product->categories()->sync($validatedData['categories']);
        } else {
            $product->categories()->detach();
        }

        return redirect()->route('products.index');
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('products.index');
    }
}
