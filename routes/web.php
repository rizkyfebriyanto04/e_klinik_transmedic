<?php

use App\Http\Controllers\AuthCtrl;
use App\Http\Controllers\DashboardCtrl;
use App\Http\Controllers\TransaksiCtrl;
use Illuminate\Support\Facades\Route;


Route::get('/', [AuthCtrl::class, 'index'])->middleware('guest')->name('login');
Route::post('/aksilogin', [AuthCtrl::class, 'loginaksi'])->name('loginaksi');
Route::post('/logout', [AuthCtrl::class, 'logout'])->middleware('auth')->name('logout');
Route::middleware('auth')->group(function () {
    // system admin
    Route::get('/dashboard', [DashboardCtrl::class, 'index'])->name('dashboard');

    Route::get('/pendaftaran', [TransaksiCtrl::class, 'pendaftaran'])->name('pendaftaran');
    Route::post('/save-pasien', [TransaksiCtrl::class, 'savepasien'])->name('save.pasien');
    Route::post('/save-daftar/{id}', [TransaksiCtrl::class, 'savedaftar'])->name('save.daftar');

    Route::get('/perawat', [TransaksiCtrl::class, 'perawat'])->name('perawat');

    Route::get('/dokter', [TransaksiCtrl::class, 'dokter'])->name('dokter');

    Route::get('/apoteker', [TransaksiCtrl::class, 'apoteker'])->name('apoteker');

});
