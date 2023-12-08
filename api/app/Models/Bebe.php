<?php
// app/Models/Bebe.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bebe extends Model
{
    protected $fillable = [
        'nom',
        'prenom',
        'nombre_ordonnel',
        'sexe',
        'date_naissance',
        'lieu',
        'date_acceptation',
        'date_integration',
        'nom_mere_bio',
        'nom_pere_bio',
        'telephone',
        'adresse',
        'nom_mere_adoptive',
        'nom_pere_adoptive',
        'tel_adoptive',
        'adresse_adoptive',
    ];
}
?>
