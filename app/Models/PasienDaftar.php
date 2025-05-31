<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PasienDaftar extends Model
{
    use HasFactory;
    protected $table = 'pasien_daftar_t';
    protected $guarded = [
        'id',
        'pasien_id',
        'tanggal_registrasi',
        'noregistrasi',
    ];
}
