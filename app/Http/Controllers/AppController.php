<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
class AppController extends Controller
{
    public function init()
    {
       $user = Auth::user();
       return response()->json(['user' => $user], 200);

    }
    public function login(Request $request)
    {
       if (Auth::attempt(['username' => $request->username, 'password' => $request->password], true)) {
           return response()->json(Auth::user(), 200);
       } else {
           return response()->json(['error' => 'We couldnt log you in.']);
       }
    }
    public function register(Request $request)
    {
        $user = User::where('username', $request->username)->first();
        if (isset($user->id)) {
            return response()->json(['error' => 'Username already exists.'], 401);
        }
        $user = new User();
        $user->name = $request->name;
        $user->username = $request->username;
        // $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();
        Auth::login($user);
        return response()->json($user,200);

    }
    public function logout()
    {

        Auth::logout();

    }
}
