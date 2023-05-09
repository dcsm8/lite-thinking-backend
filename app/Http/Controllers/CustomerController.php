<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all();

        return response()->json($customers);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:customers,email',
        ]);

        $customer = Customer::create($validatedData);

        return response()->json(['message' => 'Customer created successfully.', 'customer' => $customer]);
    }

    public function show($id)
    {
        $customer = Customer::findOrFail($id);

        return response()->json($customer);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:customers,email,' . $id,
        ]);

        Customer::whereId($id)->update($validatedData);

        $customer = Customer::findOrFail($id);

        return response()->json(['message' => 'Customer updated successfully.', 'customer' => $customer]);
    }

    public function destroy($id)
    {
        Customer::whereId($id)->delete();

        return response()->json(['message' => 'Customer deleted successfully.']);
    }
}
