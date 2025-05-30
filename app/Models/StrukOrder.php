<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StrukOrder extends Model
{
    use HasFactory;
    protected $table = 'struk_order_t';
    protected $guarded = ['id'];
}
