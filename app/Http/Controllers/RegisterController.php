<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;

class RegisterController extends Controller
{
    public function create () 
    {
        return inertia('Auth/Register');
    }

    public function store (UserRequest $request) 
    {
        $data = $request->toArray();
        $data['password'] = bcrypt($request->password);

        User::create($data);

        return back()->with([
            'type' => 'success',
            'message' => 'Users was created new account.'
        ]);
    }
}
