<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with('categories')->get();

        return Inertia::render('Orders/Index', [
            'orders' => $orders,
        ]);
    }

    public function create()
    {
        return Inertia::render('Orders/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'price' => 'required|numeric',
        ]);

        $order = Order::create($validatedData);

        $order->categories()->attach($request->input('categories'));

        return redirect()->route('orders.index');
    }

    public function edit(Order $order)
    {
        $order->load('categories');

        return Inertia::render('Orders/Edit', [
            'order' => $order,
        ]);
    }

    public function update(Request $request, Order $order)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'price' => 'required|numeric',
        ]);

        $order->update($validatedData);

        $order->categories()->sync($request->input('categories'));

        return redirect()->route('orders.index');
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return redirect()->route('orders.index');
    }
}
