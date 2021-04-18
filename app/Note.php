<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Note extends Model
{
    protected $fillable =[
        'body','user_id'
    ];

    use SoftDeletes;

    public function user(){
        return $this->belongsTo(User::class);
    }
}
