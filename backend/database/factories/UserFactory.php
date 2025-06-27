<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $prenomsSenegalais = [
            'Mamadou', 'Fatou', 'Aminata', 'Ibrahima', 'Aïcha',
            'Omar', 'Moussa', 'Aminata', 'Mariama', 'Seydou'
        ];

        $nomsSenegalais = [
            'Diop', 'Ndiaye', 'Sow', 'Diallo', 'Ba',
            'Faye', 'Cissé', 'Mane', 'Sarr', 'Fall'
        ];

        return [
            'name' => $this->faker->randomElement($prenomsSenegalais) . ' ' . $this->faker->randomElement($nomsSenegalais),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
