<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
            'role' => ['required', 'string', 'in:creator,investor'],
            'details' => ['nullable', 'array'],
        ], [
            'email.unique' => 'Cet email est déjà utilisé. Veuillez en choisir un autre.',
            'email.required' => 'L\'adresse email est obligatoire.',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.confirmed' => 'Les mots de passe ne correspondent pas.',
            'role.required' => 'Veuillez sélectionner un rôle.',
            'role.in' => 'Le rôle sélectionné n\'est pas valide.',
        ])->validate();

        // 2. Préparation des détails à sauvegarder
        $details = [];

        if ($input['role'] === 'creator') {
            $details['project_idea'] = $input['project_idea'] ?? null;
        } else {
            // Investor flow
            $details['investment_budget'] = $input['investment_budget'] ?? null;
            $details['project_search_criteria'] = $input['project_search_criteria'] ?? null;
        }

        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => $input['password'],
            'role' => $input['role'],
            'details' => $details,
        ]);
    }
}
