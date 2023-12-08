// database/migrations/{timestamp}_create_bebes_table.php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBebesTable extends Migration
{
    public function up()
    {
        Schema::create('bebes', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string('nombre_ordonnel');
            $table->string('sexe');
            $table->date('date_naissance');
            $table->string('lieu');
            $table->date('date_acceptation');
            $table->date('date_integration');
            $table->string('nom_mere_bio');
            $table->string('nom_pere_bio');
            $table->string('telephone');
            $table->text('adresse');
            $table->string('nom_mere_adoptive');
            $table->string('nom_pere_adoptive');
            $table->string('tel_adoptive');
            $table->text('adresse_adoptive');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('bebes');
    }
}
