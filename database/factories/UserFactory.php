<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => "David Client",
            'email' => "client@client.com",
            'email_verified_at' => now(),
            'password' => bcrypt('password'), // password
            'remember_token' => Str::random(10),
            'role' => 'client'
        ];
    }

    public function admin()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => "David Admin",
                'email' => "admin@admin.com",
                'role' => 'admin',
            ];
        });
    }
}
