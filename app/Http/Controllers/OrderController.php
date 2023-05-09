<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();

        return response()->json($orders);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'products' => 'required|array',
        ]);

        $customer = Customer::findOrFail($validatedData['customer_id']);
        $products = collect($validatedData['products'])->map(function ($product) {
            $productModel = Product::findOrFail($product['id']);
            $productModel->quantity = $product['quantity'];
            return $productModel;
        });

        $order = new Order;
        $order->customer()->associate($customer);
        $order->save();

        $order->products()->saveMany($products);

        return response()->json(['message' => 'Order created successfully.', 'order' => $order]);
    }

    public function show($id)
    {
        $order = Order::findOrFail($id);

        return response()->json($order);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'customer_id' => 'exists:customers,id',
            'products' => 'array',
        ]);

        $order = Order::findOrFail($id);

        if (isset($validatedData['customer_id'])) {
            $customer = Customer::findOrFail($validatedData['customer_id']);
            $order->customer()->associate($customer);
        }

        if (isset($validatedData['products'])) {
            $products = collect($validatedData['products'])->map(function ($product) {
                $productModel = Product::findOrFail($product['id']);
                $productModel->quantity = $product['quantity'];
                return $productModel;
            });

            $order->products()->detach();
            $order->products()->saveMany($products);
        }

        $order->save();

        return response()->json(['message' => 'Order updated successfully.', 'order' => $order]);
    }

    public function destroy($id)
    {
        Order::whereId($id)->delete();

        return response()->json(['message' => 'Order deleted successfully.']);
    }
}
