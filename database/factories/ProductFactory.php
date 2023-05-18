<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $productAdjective = $this->faker
            ->randomElement(['Premium', 'Deluxe', 'Quality', 'Eco', 'Natural', 'Classic', 'Modern']);
        $productMaterial = $this->faker
            ->randomElement(['Wood', 'Metal', 'Plastic', 'Cotton', 'Leather', 'Silk', 'Wool']);
        $productType = $this->faker
            ->randomElement(['Chair', 'Table', 'Shirt', 'Pants', 'Lamp', 'Book', 'Bag']);

        return [
            'name' => $productAdjective . ' ' . $productMaterial . ' ' . $productType,
            'description' => $this->faker->paragraph,
            'price' => $this->faker->numberBetween(100, 10000),
        ];
    }
}
