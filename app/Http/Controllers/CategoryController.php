<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        return response()->json($categories);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|unique:categories,name',
        ]);

        $category = Category::create($validatedData);

        return response()->json(['message' => 'Category created successfully.', 'category' => $category]);
    }

    public function show($id)
    {
        $category = Category::findOrFail($id);

        return response()->json($category);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|unique:categories,name,' . $id,
        ]);

        Category::whereId($id)->update($validatedData);

        $category = Category::findOrFail($id);

        return response()->json(['message' => 'Category updated successfully.', 'category' => $category]);
    }

    public function destroy($id)
    {
        Category::whereId($id)->delete();

        return response()->json(['message' => 'Category deleted successfully.']);
    }
}
