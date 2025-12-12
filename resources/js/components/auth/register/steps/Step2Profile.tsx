import { Button } from '@/components/ui/button';
import FormFieldInput from '@/components/auth/FormFieldInput';
import RoleSelector from '../RoleSelector';

interface Step2ProfileProps {
    firstName: string;
    lastName: string;
    birthDate: string;
    role: 'creator' | 'investor' | '';
    touchedFirstName: boolean;
    touchedLastName: boolean;
    touchedBirthDate: boolean;
    onFirstNameChange: (value: string) => void;
    onLastNameChange: (value: string) => void;
    onBirthDateChange: (value: string) => void;
    onFirstNameBlur: () => void;
    onLastNameBlur: () => void;
    onBirthDateBlur: () => void;
    onRoleSelect: (role: 'creator' | 'investor') => void;
    onPrevious: () => void;
    onNext: () => void;
    isValid: boolean;
}

export default function Step2Profile({
    firstName,
    lastName,
    birthDate,
    role,
    touchedFirstName,
    touchedLastName,
    touchedBirthDate,
    onFirstNameChange,
    onLastNameChange,
    onBirthDateChange,
    onFirstNameBlur,
    onLastNameBlur,
    onBirthDateBlur,
    onRoleSelect,
    onPrevious,
    onNext,
    isValid,
}: Step2ProfileProps) {
    const lastNameError =
        touchedLastName && lastName.trim() === '' ? 'Nom requis' : undefined;
    const firstNameError =
        touchedFirstName && firstName.trim() === ''
            ? 'Prénom requis'
            : undefined;
    const birthDateError =
        touchedBirthDate && birthDate.trim() === ''
            ? 'Date de naissance requise'
            : undefined;

    return (
        <div className="flex flex-col gap-6">
            <RoleSelector selectedRole={role} onSelect={onRoleSelect} />

            <FormFieldInput
                label="Nom"
                value={lastName}
                onChange={(e) => onLastNameChange(e.target.value)}
                onBlur={onLastNameBlur}
                placeholder="Dupont"
                error={lastNameError}
            />
            <FormFieldInput
                label="Prénom"
                value={firstName}
                onChange={(e) => onFirstNameChange(e.target.value)}
                onBlur={onFirstNameBlur}
                placeholder="Jean"
                error={firstNameError}
            />
            <FormFieldInput
                label="Date de naissance"
                value={birthDate}
                onChange={(e) => onBirthDateChange(e.target.value)}
                onBlur={onBirthDateBlur}
                type="date"
                placeholder=""
                error={birthDateError}
            />

            <div className="flex flex-wrap justify-between gap-3">
                <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={onPrevious}
                    className="cursor-pointer rounded-full border-2 border-[#262121] bg-transparent px-6 text-lg font-semibold tracking-[0.8px] text-[#262121] hover:bg-gray-50"
                >
                    Précédent
                </Button>
                <Button
                    type="button"
                    size="lg"
                    onClick={onNext}
                    disabled={!isValid}
                    className="cursor-pointer rounded-full bg-[#262121] px-6 text-lg font-semibold tracking-[0.8px] text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    Suivant
                </Button>
            </div>
        </div>
    );
}

