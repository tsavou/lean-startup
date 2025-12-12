<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Fortify;

class AuthenticateUser
{
    /**
     * Validate and authenticate the user.
     *
     * @param  Request  $request
     * @return User|null
     * @throws ValidationException
     */
    public function __invoke(Request $request): ?User
    {
        Validator::make($request->all(), [
            Fortify::username() => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ])->validate();

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            throw ValidationException::withMessages([
                'email' => [__('auth.failed')],
            ]);
        }

        if (!Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'password' => [__('auth.password')],
            ]);
        }

        return $user;
    }
}

