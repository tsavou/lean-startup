import FormFieldInput from '@/components/auth/FormFieldInput';
import LoginRightPanel from '@/components/auth/login/LoginRightPanel';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { home, register } from '@/routes';
import { request } from '@/routes/password';
import { store } from '@/routes/login';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    const [remember, setRemember] = useState(false);

    const form = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        form.post(store.url(), {
            onFinish: () => form.reset('password'),
        });
    };

    return (
        <div className="grid min-h-screen w-full overflow-hidden bg-white font-sans lg:grid-cols-[minmax(0,1fr)_360px]">
            <Head title="Connexion" />

            {/* Left Panel */}
            <div className="bg-[#f2fade]">
                <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
                    <div className="flex w-full max-w-md flex-col gap-8">
                        <div className="flex items-center justify-center">
                            <Link href={home()}>
                                <img
                                    src="/tandeem_logo.png"
                                    alt="Tandeem"
                                    className="mx-auto h-14 w-auto sm:h-16 lg:mx-0 lg:h-18"
                                />
                            </Link>
                        </div>

                        <div className="flex flex-col gap-2 text-center">
                            <h1 className="text-2xl font-bold tracking-tight">
                                Connexion
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Entrez votre email et mot de passe pour vous
                                connecter
                            </p>
                        </div>

                        {/* Status Message */}
                        {status && (
                            <div className="rounded-lg border-2 border-green-500 bg-green-50 p-4">
                                <p className="text-center text-sm font-medium text-green-800">
                                    {status}
                                </p>
                            </div>
                        )}

                        {/* Global Error Alert */}
                        {Object.keys(form.errors).length > 0 && (
                            <div className="rounded-lg border-2 border-red-500 bg-red-50 p-4">
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-red-800">
                                        Des erreurs ont été détectées :
                                    </p>
                                    <ul className="list-inside list-disc space-y-1 text-sm text-red-700">
                                        {Object.entries(form.errors).map(
                                            ([field, message]) => (
                                                <li key={field}>
                                                    {message as string}
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Form */}
                        <form
                            onSubmit={submit}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-6">
                                <FormFieldInput
                                    label="Email"
                                    value={form.data.email}
                                    onChange={(e) =>
                                        form.setData('email', e.target.value)
                                    }
                                    type="email"
                                    placeholder="email@example.com"
                                    error={form.errors.email}
                                />

                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">
                                            Mot de passe
                                        </Label>
                                        {canResetPassword && (
                                            <Link
                                                href={request()}
                                                className="text-sm font-semibold text-[#262121] underline decoration-1 underline-offset-4 transition-colors hover:text-black"
                                            >
                                                Mot de passe oublié ?
                                            </Link>
                                        )}
                                    </div>
                                    <FormFieldInput
                                        label=""
                                        value={form.data.password}
                                        onChange={(e) =>
                                            form.setData(
                                                'password',
                                                e.target.value,
                                            )
                                        }
                                        type="password"
                                        placeholder="********"
                                        error={form.errors.password}
                                    />
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="remember"
                                        checked={remember}
                                        onCheckedChange={(checked) => {
                                            setRemember(checked === true);
                                            form.setData(
                                                'remember',
                                                checked === true,
                                            );
                                        }}
                                    />
                                    <Label
                                        htmlFor="remember"
                                        className="cursor-pointer text-sm font-medium"
                                    >
                                        Se souvenir de moi
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={form.processing}
                                    className="cursor-pointer rounded-full bg-[#262121] px-8 text-lg font-semibold tracking-[0.8px] text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {form.processing ? (
                                        <>
                                            <Spinner className="mr-2" />
                                            Connexion...
                                        </>
                                    ) : (
                                        'Se connecter'
                                    )}
                                </Button>
                            </div>

                            {canRegister && (
                                <div className="mt-4 text-center text-sm text-gray-600">
                                    Pas encore de compte ?{' '}
                                    <Link
                                        href={register()}
                                        className="font-semibold text-gray-800 underline decoration-1 underline-offset-4 transition-colors hover:text-black"
                                    >
                                        S'inscrire
                                    </Link>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <LoginRightPanel />
        </div>
    );
}
