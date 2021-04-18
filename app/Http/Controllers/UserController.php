<?php

namespace App\Http\Controllers;

use App\Note;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function items($user_id){
        $query=Note::where('user_id',$user_id);
        return $query->paginate(20);
    }
    public function create(Request $request){
        Log::error($request->all());
        User::create([
            'name'=>$request->get('name'),
            'email'=>$request->get('email'),
            'password'=>Hash::make($request->get('password')),
        ]);
        return response()->json(['success'=>true],200);
    }
}
