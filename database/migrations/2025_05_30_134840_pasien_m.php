<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pasien_m', function (Blueprint $table) {
            $table->id();
            $table->string('nama_pasien');
            $table->date('tanggal_lahir');
            $table->string('jenis_kelamin');
            $table->string('nomer_hp');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pasien_m');
    }
};
