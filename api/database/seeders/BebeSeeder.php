<?php

// database/seeders/BebeSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BebeSeeder extends Seeder
{
    /**
     * @return void
     */
    public function run()
    {
        DB::table('bebes')->insert([
            'nom' => 'Nom du bébé',
            'prenom' => 'Prénom du bébé',
            'sexe' => 'Masculin', 
            'lieu' => 'Lieu de naissance du bébé',
            'date_acceptation' => now(),
            'date_integration' => now(),
            'nom_mere_bio' => 'Nom de la mère biologique',
            'nom_pere_bio' => 'Nom du père biologique',
            'telephone' => 'Numéro de téléphone',
            'adresse' => 'Adresse',
            'nom_mere_adoptive' => 'Nom de la mère adoptive',
            'nom_pere_adoptive' => 'Nom du père adoptif',
            'tel_adoptive' => 'Numéro de téléphone adoptif',
            'adresse_adoptive' => 'Adresse adoptive',
        ]);

    }
}
