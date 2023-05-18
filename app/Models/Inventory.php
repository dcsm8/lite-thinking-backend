<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_NIT',
        'product_id',
        'quantity',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_NIT', 'NIT');
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
