<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function create ()
    {
        return inertia('Auth/Login');
    }

    public function store (Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if(Auth::attempt($request->only('email', 'password'), $request->remeber)) 
        {
            session()->regenerate();

            return redirect('/dashboard')->with([
                'type' => 'success',
                'message' => 'You are logged in.'
            ]);
        }

        throw ValidationException::withMessages([
            'email' => 'The provide credintials does not match our record.'
        ]);
    }

    public function destroy () 
    {
        Auth::logout();

        return redirect('/')->with([
            'type' => 'success',
            'message' => 'You are now logged out.'
        ]);
    }
}
