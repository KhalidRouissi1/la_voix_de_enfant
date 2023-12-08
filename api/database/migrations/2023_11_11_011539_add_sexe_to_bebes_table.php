<?php
//2023_11_11_011539_add_sexe_to_bebes_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('bebes', function (Blueprint $table) {
            $table->string('sexe');
        });
    }
    /**
     * Reverse the migrations.
     */
    
     public function down()
     {
         Schema::table('bebes', function (Blueprint $table) {
             $table->dropColumn('sexe');
         });
     }
};
