<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    protected $table = 'registrations';
    
    protected $fillable = [
        'email', 'phone_number', 'first_name', 'last_name', 'date_of_birth', 'gender'
    ];

    protected $hidden = ['token'];
}
