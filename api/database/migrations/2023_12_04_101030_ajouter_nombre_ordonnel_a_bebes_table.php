<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AjouterNombreOrdonnelABebesTable extends Migration
{
    public function up()
    {
        Schema::table('bebes', function (Blueprint $table) {
            $table->string('nombre_ordonnel')->after('prenom'); // Modifier selon l'emplacement souhaité
        });
    }

    public function down()
    {
        Schema::table('bebes', function (Blueprint $table) {
            $table->dropColumn('nombre_ordonnel');
        });
    }
}
