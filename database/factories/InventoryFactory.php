<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Inventory>
 */
class InventoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $companyNIT = Company::pluck('NIT')->random();

        return [
            'company_NIT' => $companyNIT,
            'product_id' => Product::factory(),
            'quantity' => $this->faker->numberBetween(10, 100),
        ];
    }
}
