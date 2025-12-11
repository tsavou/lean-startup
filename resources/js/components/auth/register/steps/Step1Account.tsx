import { Button } from '@/components/ui/button';
import FormFieldInput from '@/components/auth/FormFieldInput';
import { UseFormReturn } from '@inertiajs/react';

interface Step1AccountProps {
    form: UseFormReturn<{
        email: string;
        password: string;
        password_confirmation: string;
        [key: string]: unknown;
    }>;
    touchedEmail: boolean;
    touchedPassword: boolean;
    touchedPasswordConfirmation: boolean;
    onEmailBlur: () => void;
    onPasswordBlur: () => void;
    onPasswordConfirmationBlur: () => void;
    onNext: () => void;
    isValid: boolean;
}

export default function Step1Account({
    form,
    touchedEmail,
    touchedPassword,
    touchedPasswordConfirmation,
    onEmailBlur,
    onPasswordBlur,
    onPasswordConfirmationBlur,
    onNext,
    isValid,
}: Step1AccountProps) {
    const isPasswordLongEnough = form.data.password.length >= 8;
    const passwordsMatch =
        form.data.password &&
        form.data.password_confirmation &&
        form.data.password === form.data.password_confirmation;

    const emailError =
        touchedEmail && form.data.email.trim() === ''
            ? 'Email requis'
            : undefined;
    const passwordLengthError =
        touchedPassword && form.data.password && !isPasswordLongEnough
            ? 'Le mot de passe doit faire au moins 8 caractères.'
            : undefined;
    const passwordMatchError =
        touchedPasswordConfirmation &&
        form.data.password_confirmation &&
        !passwordsMatch
            ? 'Les mots de passe ne correspondent pas.'
            : undefined;

    return (
        <div className="flex flex-col gap-6">
            <FormFieldInput
                label="Email"
                value={form.data.email}
                onChange={(e) => form.setData('email', e.target.value)}
                onBlur={onEmailBlur}
                placeholder="example@mail.com"
                error={emailError || form.errors.email}
            />
            <FormFieldInput
                label="Mot de passe"
                value={form.data.password}
                onChange={(e) => form.setData('password', e.target.value)}
                onBlur={onPasswordBlur}
                type="password"
                placeholder="********"
                error={passwordLengthError || form.errors.password}
                note="Votre mot de passe doit faire minimum 8 caractères"
            />
            <FormFieldInput
                label="Confirmez votre mot de passe"
                value={form.data.password_confirmation}
                onChange={(e) =>
                    form.setData('password_confirmation', e.target.value)
                }
                onBlur={onPasswordConfirmationBlur}
                type="password"
                placeholder="********"
                error={passwordMatchError || form.errors.password_confirmation}
            />

            <div className="flex justify-end">
                <Button
                    type="button"
                    size="lg"
                    onClick={onNext}
                    disabled={!isValid}
                    className="cursor-pointer rounded-full bg-[#262121] px-8 text-lg font-semibold tracking-[0.8px] text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    Suivant
                </Button>
            </div>
        </div>
    );
}

