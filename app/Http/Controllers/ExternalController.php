<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExternalController extends Controller
{
    public function index()
    {
        $companies = Company::all();

        return Inertia::render('External/Index', [
            'companies' => $companies,
        ]);
    }
}
