<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AjouterAttributsABebesTableV2 extends Migration
{
    public function up()
    {
        Schema::table('bebes', function (Blueprint $table) {
            $table->string('nom');
            $table->string('prenom');
            $table->string('sexe');
            $table->string('lieu');
            $table->date('date_acceptation')->default(now());
            $table->date('date_integration')->default(now()); // Utilise la date actuelle comme valeur par défaut
            $table->string('nom_mere_bio');
            $table->string('nom_pere_bio');
            $table->string('telephone');
            $table->text('adresse');
            $table->string('nom_mere_adoptive');
            $table->string('nom_pere_adoptive');
            $table->string('tel_adoptive');
            $table->text('adresse_adoptive');
            $table->integer('nombre_ordonnel')->default(0); // You can adjust the default value as needed

        });
    }
    
    public function down()
    {
        Schema::table('bebes', function (Blueprint $table) {
            $table->dropColumn([
                'nom',
                'prenom',
                'sexe',
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
                'nombre_ordonnel',
            ]);
        });
    }
}
?>