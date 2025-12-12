import RegisterRightPanel from '@/components/auth/register/RegisterRightPanel';
import RegisterStepIndicator from '@/components/auth/register/RegisterStepIndicator';
import Step1Account from '@/components/auth/register/steps/Step1Account';
import Step2Profile from '@/components/auth/register/steps/Step2Profile';
import Step3Skills from '@/components/auth/register/steps/Step3Skills';
import Step4Project from '@/components/auth/register/steps/Step4Project';
import { cn } from '@/lib/utils';
import { home, login } from '@/routes';
import { store } from '@/routes/register';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

export default function Register() {
    const [step, setStep] = useState(1);

    // Additional state for fields not directly in useForm (mapped on submit)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [skills, setSkills] = useState<string[]>([]);
    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('');
    const [projectDesc, setProjectDesc] = useState('');
    const [joinProject, setJoinProject] = useState('');
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [touchedPassword, setTouchedPassword] = useState(false);
    const [touchedPasswordConfirmation, setTouchedPasswordConfirmation] =
        useState(false);
    const [touchedFirstName, setTouchedFirstName] = useState(false);
    const [touchedLastName, setTouchedLastName] = useState(false);
    const [touchedBirthDate, setTouchedBirthDate] = useState(false);

    const form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '', // 'creator' | 'investor'
        project_idea: '',
        investment_budget: '',
        project_search_criteria: '',
    });

    // Validation helpers
    const isPasswordLongEnough = form.data.password.length >= 8;
    const passwordsMatch =
        form.data.password &&
        form.data.password_confirmation &&
        form.data.password === form.data.password_confirmation;
    const isStep1Valid: boolean =
        form.data.email.trim() !== '' &&
        isPasswordLongEnough &&
        !!passwordsMatch;
    const isStep2Valid: boolean =
        form.data.role !== '' &&
        firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        birthDate.trim() !== '';

    const handleRoleSelect = (role: 'creator' | 'investor') => {
        form.setData('role', role);
    };

    const toggleSkill = (skill: string) => {
        if (skills.includes(skill)) {
            setSkills(skills.filter((s) => s !== skill));
        } else {
            setSkills([...skills, skill]);
        }
    };

    const nextStep = () => {
        if (step === 1) {
            form.clearErrors('password', 'password_confirmation');
            if (form.data.password && !isPasswordLongEnough) {
                form.setError(
                    'password',
                    'Le mot de passe doit faire au moins 8 caractères.',
                );
                return;
            }
            if (form.data.password && !passwordsMatch) {
                form.setError(
                    'password_confirmation',
                    'Les mots de passe ne correspondent pas.',
                );
                return;
            }
            if (!isStep1Valid) {
                return;
            }
            setStep(2);
        } else if (step === 2) {
            if (!isStep2Valid) {
                return;
            }
            setStep(3);
        } else if (step === 3) {
            setStep(4);
        }
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    // Map form fields to their corresponding step
    const getStepForField = (fieldName: string): number => {
        const step1Fields = ['email', 'password', 'password_confirmation'];
        const step2Fields = ['name', 'role'];
        const step4Fields = [
            'project_idea',
            'investment_budget',
            'project_search_criteria',
        ];

        if (step1Fields.includes(fieldName)) return 1;
        if (step2Fields.includes(fieldName)) return 2;
        if (step4Fields.includes(fieldName)) return 4;
        return 1; // Default to step 1
    };

    // Navigate to step with first error
    const navigateToErrorStep = (errors: Record<string, string>) => {
        if (Object.keys(errors).length > 0) {
            const firstErrorField = Object.keys(errors)[0];
            const targetStep = getStepForField(firstErrorField);

            // Use setTimeout to avoid React warning about setState in render
            setTimeout(() => {
                if (targetStep !== step) {
                    setStep(targetStep);
                }
                // Scroll to top of form to show error message
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 0);
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        // Map local state to form data
        const fullName = `${firstName} ${lastName}`.trim();

        // For creators:
        // project_idea = Description + Name + Type
        const finalProjectIdea =
            form.data.role === 'creator'
                ? `Nom: ${projectName}\nType: ${projectType}\nDescription: ${projectDesc}`
                : '';

        // For investors:
        // project_search_criteria = Skills + Project to join
        const finalSearchCriteria =
            form.data.role === 'investor'
                ? `Skills: ${skills.join(', ')}\nRecherche: ${joinProject}`
                : skills.join(', ');

        form.transform((data) => ({
            ...data,
            name: fullName,
            project_idea: finalProjectIdea,
            project_search_criteria: finalSearchCriteria,
        }));

        form.post(store.url(), {
            onFinish: () => form.reset('password', 'password_confirmation'),
            onError: (errors) => {
                // Navigate to the step containing the first error
                navigateToErrorStep(errors);
            },
        });
    };

    return (
        <div className="grid min-h-screen w-full overflow-hidden bg-white font-sans lg:grid-cols-[minmax(0,1fr)_360px]">
            <Head title="Inscription" />

            {/* Left Panel */}
            <div className={cn(step === 1 ? 'bg-[#f2fade]' : 'bg-white')}>
                <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center justify-center">
                            <Link href={home()}>
                                <img
                                    src="/tandeem_logo.png"
                                    alt="Tandeem"
                                    className="mx-auto h-14 w-auto sm:h-16 lg:mx-0 lg:h-18"
                                />
                            </Link>
                        </div>

                        <RegisterStepIndicator currentStep={step} />

                        {/* Form */}
                        <div className="mx-auto w-full max-w-3xl">
                            <form
                                onSubmit={submit}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && step < 4) {
                                        e.preventDefault();
                                        nextStep();
                                    }
                                }}
                                className="space-y-8"
                            >
                                {step === 1 && (
                                    <Step1Account
                                        form={form}
                                        touchedEmail={touchedEmail}
                                        touchedPassword={touchedPassword}
                                        touchedPasswordConfirmation={
                                            touchedPasswordConfirmation
                                        }
                                        onEmailBlur={() =>
                                            setTouchedEmail(true)
                                        }
                                        onPasswordBlur={() =>
                                            setTouchedPassword(true)
                                        }
                                        onPasswordConfirmationBlur={() =>
                                            setTouchedPasswordConfirmation(true)
                                        }
                                        onNext={nextStep}
                                        isValid={isStep1Valid}
                                    />
                                )}

                                {step === 2 && (
                                    <Step2Profile
                                        firstName={firstName}
                                        lastName={lastName}
                                        birthDate={birthDate}
                                        role={
                                            (form.data.role as
                                                | 'creator'
                                                | 'investor'
                                                | '') || ''
                                        }
                                        touchedFirstName={touchedFirstName}
                                        touchedLastName={touchedLastName}
                                        touchedBirthDate={touchedBirthDate}
                                        onFirstNameChange={setFirstName}
                                        onLastNameChange={setLastName}
                                        onBirthDateChange={setBirthDate}
                                        onFirstNameBlur={() =>
                                            setTouchedFirstName(true)
                                        }
                                        onLastNameBlur={() =>
                                            setTouchedLastName(true)
                                        }
                                        onBirthDateBlur={() =>
                                            setTouchedBirthDate(true)
                                        }
                                        onRoleSelect={handleRoleSelect}
                                        onPrevious={prevStep}
                                        onNext={nextStep}
                                        isValid={isStep2Valid}
                                    />
                                )}

                                {step === 3 && (
                                    <Step3Skills
                                        selectedSkills={skills}
                                        onToggleSkill={toggleSkill}
                                        onPrevious={prevStep}
                                        onNext={nextStep}
                                    />
                                )}

                                {step === 4 && (
                                    <Step4Project
                                        role={
                                            (form.data.role as
                                                | 'creator'
                                                | 'investor') || 'creator'
                                        }
                                        form={form}
                                        projectName={projectName}
                                        projectType={projectType}
                                        projectDesc={projectDesc}
                                        onProjectNameChange={setProjectName}
                                        onProjectTypeChange={setProjectType}
                                        onProjectDescChange={setProjectDesc}
                                        joinProject={joinProject}
                                        onJoinProjectChange={setJoinProject}
                                        onPrevious={prevStep}
                                        onSubmit={submit}
                                        isProcessing={!!form.processing}
                                    />
                                )}
                            </form>

                            <div className="mt-8 text-center text-[14px] text-gray-600">
                                Déjà un compte ?
                                <Link
                                    href={login()}
                                    className="ml-1 font-semibold text-gray-800 underline decoration-1 underline-offset-4 transition-colors hover:text-black"
                                >
                                    Se connecter
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RegisterRightPanel
                step={step}
                role={
                    (form.data.role as 'creator' | 'investor' | undefined) ||
                    undefined
                }
            />
        </div>
    );
}
