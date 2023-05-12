<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Contracts\Support\ValidatedData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Dompdf\Dompdf;
use Dompdf\Options;


class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();

        return Inertia::render('Orders/Index', [
            'orders' => $orders,
        ]);
    }

    public function generatePdf(Order $order)
    {
        $dompdfOptions = new Options();
        $dompdfOptions->set('isRemoteEnabled', TRUE);

        $dompdf = new Dompdf($dompdfOptions);
        $dompdf->loadHtml(view('pdf.order', ['order' => $order])->render());
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();

        return $dompdf->stream('order.pdf');
    }

    public function create()
    {
        $products = Product::all();
        return Inertia::render('Orders/Create', [
            'products' => $products
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'products' => 'required|array',
            'products.*.productId' => 'required|exists:products,id',
            'products.*.quantity' => 'required|integer|min:1',
        ]);

        $totalPrice = 0;
        foreach ($validatedData['products'] as $productData) {
            $product = Product::find($productData['productId']);
            $quantity = intval($productData['quantity']);
            $price = floatval($product->price);
            $totalPrice += $quantity * $price;
        }

        $order = new Order();
        $order->fill([
            'name' => $validatedData['name'],
            'description' => $validatedData['description'],
            'user_id' => auth()->user()->id,
        ]);
        $order->price = $totalPrice;
        $order->save();

        $productsData = [];
        foreach ($validatedData['products'] as $productData) {
            $productsData[$productData['productId']] = ['quantity' => $productData['quantity']];
        }

        $order->products()->attach($productsData);

        return redirect()->route('orders.index');
    }


    public function edit(Order $order)
    {
        $order->load(['user', 'products']);

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
