<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OffreFactory extends Factory
{
    public function definition(): array
    {
        $villesSenegal = [
            'Dakar', 'Saint-Louis', 'Touba', 'Thiès', 'Kaolack', 
            'Mbour', 'Rufisque', 'Diourbel', 'Louga', 'Ziguinchor'
        ];

        $titlesSenegal = [
            "Offre spéciale à Dakar",
            "Emploi à Thiès : Rejoignez-nous !",
            "Poste à Saint-Louis, ambiance wax dëgg dëgg",
            "Recrutement à Kaolack",
            "Stage à Ziguinchor",
            "Opportunité à Touba",
            "Travail à Mbour, plage à proximité",
            "Mission à Rufisque",
            "Emploi à Louga, esprit ndank ndank",
            "Poste à Diourbel, café Touba offert !"
        ];

        $descriptionsSenegal = [
            "Venez découvrir notre offre spéciale à Dakar, ambiance garantie !",
            "Poste à pourvoir à Thiès, bonne ambiance et thiéboudiène au menu.",
            "Rejoignez une équipe dynamique à Saint-Louis, wax dëgg dëgg !",
            "Offre d'emploi à Kaolack, environnement chaleureux et accueil sénégalais.",
            "Stage à Ziguinchor, immersion dans la culture casamançaise.",
            "Nous recrutons à Touba, esprit de solidarité et de partage.",
            "Travaillez à Mbour, à deux pas de la plage et du poisson frais.",
            "Opportunité à Rufisque, équipe jeune et motivée, ambiance teranga.",
            "Mission à Louga, découvrez le vrai sens du ndank ndank.",
            "Emploi à Diourbel, où le café Touba coule à flot !"
        ];

        $index = $this->faker->numberBetween(0, count($titlesSenegal) - 1);

        return [
            'title' => $titlesSenegal[$index],
            'description' => $descriptionsSenegal[$index],
            'date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'lieu' => $this->faker->randomElement($villesSenegal),
        ];
    }
} 