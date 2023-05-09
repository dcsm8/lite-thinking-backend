<?php

namespace Database\Seeders;

use App\Models\Product;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faker = Factory::create();

        for ($i = 0; $i < 20; $i++) {
            Product::create([
                'name' => $faker->unique()->words(3, true),
                'description' => $faker->sentence,
                'price' => $faker->randomFloat(2, 1, 100),
            ]);
        }
    }
}
