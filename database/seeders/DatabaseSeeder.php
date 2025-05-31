<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'username' => 'superadmin',
            'password' => Hash::make('superadmin'),
            'kelompok_user_id' => '1',
        ]);
        User::create([
            'username' => 'pendaftaran',
            'password' => Hash::make('superadmin'),
            'kelompok_user_id' => '2',
        ]);
        User::create([
            'username' => 'dokter',
            'password' => Hash::make('superadmin'),
            'kelompok_user_id' => '3',
        ]);
        User::create([
            'username' => 'perawat',
            'password' => Hash::make('superadmin'),
            'kelompok_user_id' => '4',
        ]);
        User::create([
            'username' => 'apoteker',
            'password' => Hash::make('superadmin'),
            'kelompok_user_id' => '5',
        ]);
    }
}
