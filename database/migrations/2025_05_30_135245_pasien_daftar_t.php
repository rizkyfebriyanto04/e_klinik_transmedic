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
        Schema::create('pasien_daftar_t', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pasien_id')->nullable();
            $table->string('berat_badan');
            $table->string('tekanan_darah');
            $table->string('keluhan');
            $table->string('hasil_diagnosa');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pasien_daftar_t');
    }
};
