<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => ['required', 'alpha_num', 'unique:users,username,' . optional($this->user)->id,],
            'email' => ['required', 'email', 'unique:users,email,' . optional($this->user)->id,],
            'password' => ['required', Password::defaults()],
            'name' => ['required'],
            'location' => ['required'],
        ];
    }
}
