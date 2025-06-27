<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Students extends Model
{
    protected $fillable = [
        'firstName',
        'lastName', 
        'email',
        'birthdate',
        'level'
    ];
    
    protected $casts = [
        'birthdate' => 'date'
    ];
}
