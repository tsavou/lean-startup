import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Briefcase, TrendingUp, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import AuthLayout from '@/layouts/auth-layout';
import { register, login } from '@/routes';
import { store } from '@/routes/register';

export default function Register() {
    // État pour gérer l'étape actuelle (1, 2 ou 3)
    const [step, setStep] = useState(1);

    const form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '', // 'creator' ou 'investor'
        project_idea: '', // Si créateur
        investment_budget: '', // Si investisseur
        project_search_criteria: '', // Si investisseur
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // Soumission finale uniquement à l'étape 3
        form.post(store.url(), {
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    };

    // Fonction pour passer à l'étape suivante avec validation simple
    const nextStep = () => {
        if (step === 1) {
            if (!form.data.name || !form.data.email || !form.data.password) {
                // Tu pourrais ajouter ici un toast d'erreur
                return;
            }
            setStep(2);
        } else if (step === 2) {
            if (!form.data.role) return;
            setStep(3);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <AuthLayout
            title="Create an account"
            description="Enter your details below to create your account"
        >
            <Head title="Inscription" />

            <div className="w-full max-w-md mx-auto space-y-6">

                {/* Indicateur d'étapes (Optionnel mais recommandé) */}
                <div className="flex items-center justify-between mb-8 px-2">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center">
                            <div
                                className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                                    step >= s
                                        ? "bg-black text-white dark:bg-white dark:text-black"
                                        : "bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                                )}
                            >
                                {s}
                            </div>
                            {s !== 3 && (
                                <div
                                    className={cn(
                                        "w-12 h-1 mx-2",
                                        step > s ? "bg-black dark:bg-white" : "bg-gray-200 dark:bg-gray-800"
                                    )}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight">
                        {step === 1 && "Créer votre compte"}
                        {step === 2 && "Quel est votre objectif ?"}
                        {step === 3 && (form.data.role === 'creator' ? "Parlez-nous de votre projet" : "Vos critères d'investissement")}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {step === 1 && "Entrez vos informations pour commencer."}
                        {step === 2 && "Dites-nous comment vous souhaitez utiliser la plateforme."}
                        {step === 3 && "Dernière étape avant de démarrer."}
                    </p>
                </div>

                <form onSubmit={submit} className="space-y-6">

                    {/* ÉTAPE 1 : Informations de base */}
                    {step === 1 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nom complet</Label>
                                <Input
                                    id="name"
                                    value={form.data.name}
                                    onChange={(e) => form.setData('name', e.target.value)}
                                    required
                                    autoFocus
                                    placeholder="Jean Dupont"
                                />
                                {form.errors.name && <p className="text-sm text-red-500">{form.errors.name}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={form.data.email}
                                    onChange={(e) => form.setData('email', e.target.value)}
                                    required
                                    placeholder="jean@exemple.com"
                                />
                                {form.errors.email && <p className="text-sm text-red-500">{form.errors.email}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={form.data.password}
                                    onChange={(e) => form.setData('password', e.target.value)}
                                    required
                                />
                                {form.errors.password && <p className="text-sm text-red-500">{form.errors.password}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation">Confirmer le mot de passe</Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    value={form.data.password_confirmation}
                                    onChange={(e) => form.setData('password_confirmation', e.target.value)}
                                    required
                                />
                            </div>

                            <Button type="button" onClick={nextStep} className="w-full">
                                Suivant <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    )}

                    {/* ÉTAPE 2 : Choix du Rôle */}
                    {step === 2 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="grid grid-cols-1 gap-4">
                                {/* Option A: Créateur */}
                                <div
                                    onClick={() => form.setData('role', 'creator')}
                                    className={cn(
                                        "cursor-pointer border-2 rounded-xl p-4 transition-all hover:border-black dark:hover:border-white",
                                        form.data.role === 'creator'
                                            ? "border-black bg-gray-50 dark:border-white dark:bg-gray-900"
                                            : "border-gray-200 dark:border-gray-800"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                                            <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">J'ai une idée de projet</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Je veux créer un projet et trouver des ressources.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Option B: Investisseur */}
                                <div
                                    onClick={() => form.setData('role', 'investor')}
                                    className={cn(
                                        "cursor-pointer border-2 rounded-xl p-4 transition-all hover:border-black dark:hover:border-white",
                                        form.data.role === 'investor'
                                            ? "border-black bg-gray-50 dark:border-white dark:bg-gray-900"
                                            : "border-gray-200 dark:border-gray-800"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-green-100 dark:bg-green-900/40 rounded-lg">
                                            <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-300" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">J'ai un budget à investir</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Je cherche à rejoindre ou financer un projet existant.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {form.errors.role && <p className="text-sm text-red-500 text-center">{form.errors.role}</p>}

                            <div className="flex gap-4 pt-4">
                                <Button type="button" variant="outline" onClick={prevStep} className="w-full">
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Retour
                                </Button>
                                <Button type="button" onClick={nextStep} disabled={!form.data.role} className="w-full">
                                    Suivant <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* ÉTAPE 3 : Conditionnelle */}
                    {step === 3 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">

                            {/* Formulaire pour Créateurs */}
                            {form.data.role === 'creator' && (
                                <div className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="project_idea">Décrivez brièvement votre idée de projet</Label>
                                        <Textarea
                                            id="project_idea"
                                            rows={4}
                                            value={form.data.project_idea}
                                            onChange={(e) => form.setData('project_idea', e.target.value)}
                                            placeholder="Je souhaite créer une plateforme pour..."
                                            required
                                        />
                                        <p className="text-xs text-muted-foreground">Cela nous aidera à vous guider dès votre première connexion.</p>
                                    </div>
                                </div>
                            )}

                            {/* Formulaire pour Investisseurs */}
                            {form.data.role === 'investor' && (
                                <div className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="investment_budget">Quel est votre budget approximatif ?</Label>
                                        <Input
                                            id="investment_budget"
                                            value={form.data.investment_budget}
                                            onChange={(e) => form.setData('investment_budget', e.target.value)}
                                            placeholder="Ex: 5 000€ - 10 000€"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="project_search_criteria">Quel type de projet souhaitez-vous rejoindre ?</Label>
                                        <Textarea
                                            id="project_search_criteria"
                                            rows={3}
                                            value={form.data.project_search_criteria}
                                            onChange={(e) => form.setData('project_search_criteria', e.target.value)}
                                            placeholder="Secteur tech, impact social, local..."
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-4 pt-4">
                                <Button type="button" variant="outline" onClick={prevStep} className="w-full">
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Retour
                                </Button>
                                <Button type="submit" className="w-full" disabled={form.processing}>
                                    {form.processing ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Création...
                                        </>
                                    ) : (
                                        "Terminer l'inscription"
                                    )}
                                </Button>
                            </div>
                        </div>
                    )}
                </form>

                {/* Lien login existant */}
                <div className="mt-4 text-center text-sm">
                    Déjà un compte ?{' '}
                    <Link href={login()} className="underline">
                        Se connecter
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
}
