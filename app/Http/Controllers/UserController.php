<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia('Users/Index', [
            'users' => User::latest()->paginate(10),
            'authAddUser' => Auth::user()->can('add_user'), 
        ]);
    }

    public function store(UserRequest $request)
    {
        $this->authorize('add_user', Auth::user());
        $data = $request->toArray();
        $data['password'] = bcrypt($request->password);

        User::create($data);

        return back()->with([
            'type' => 'success',
            'message' => 'Users was created.'
        ]);
    }

    public function update(UserRequest $request, User $user)
    {
        $data = $request->toArray();
        $data['password'] = bcrypt($request->password);

        $user->update($data);

        return back()->with([
            'type' => 'success',
            'message' => 'Users was updated.'
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Users was Deleted.'
        ]);

    }
}
