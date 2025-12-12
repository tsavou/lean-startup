import { Button } from '@/components/ui/button';
import FormFieldInput from '@/components/auth/FormFieldInput';
import FormFieldTextArea from '@/components/auth/FormFieldTextArea';
import { UseFormReturn } from '@inertiajs/react';

interface Step4ProjectProps {
    role: 'creator' | 'investor';
    form: UseFormReturn<{
        project_idea: string;
        investment_budget: string;
        [key: string]: unknown;
    }>;
    // Creator fields
    projectName: string;
    projectType: string;
    projectDesc: string;
    onProjectNameChange: (value: string) => void;
    onProjectTypeChange: (value: string) => void;
    onProjectDescChange: (value: string) => void;
    // Investor fields
    joinProject: string;
    onJoinProjectChange: (value: string) => void;
    // Actions
    onPrevious: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isProcessing: boolean;
}

export default function Step4Project({
    role,
    form,
    projectName,
    projectType,
    projectDesc,
    onProjectNameChange,
    onProjectTypeChange,
    onProjectDescChange,
    joinProject,
    onJoinProjectChange,
    onPrevious,
    onSubmit,
    isProcessing,
}: Step4ProjectProps) {
    return (
        <div className="flex flex-col gap-6">
            {role === 'creator' ? (
                <>
                    <FormFieldInput
                        label="Nom de votre projet"
                        value={projectName}
                        onChange={(e) => onProjectNameChange(e.target.value)}
                        placeholder="Tandeem"
                    />
                    <FormFieldInput
                        label="Votre type de projet"
                        value={projectType}
                        onChange={(e) => onProjectTypeChange(e.target.value)}
                        placeholder="SaaS, Mobile App..."
                    />
                    <FormFieldTextArea
                        label="Description de votre projet"
                        value={projectDesc}
                        onChange={(e) => {
                            onProjectDescChange(e.target.value);
                            form.setData('project_idea', e.target.value);
                        }}
                        placeholder="Décrivez votre vision..."
                        className="h-[140px]"
                        error={form.errors.project_idea}
                    />
                </>
            ) : (
                <>
                    <FormFieldInput
                        label="Combien estimez-vous le budget ?"
                        value={form.data.investment_budget}
                        onChange={(e) =>
                            form.setData('investment_budget', e.target.value)
                        }
                        type="number"
                        placeholder="10000"
                        suffix="€"
                        error={form.errors.investment_budget}
                    />
                    <FormFieldTextArea
                        label="Quel type de projet souhaitez-vous rejoindre ?"
                        value={joinProject}
                        onChange={(e) => onJoinProjectChange(e.target.value)}
                        placeholder="Secteurs ou domaines visés (ex : SaaS B2B, éducation, santé...)"
                    />
                </>
            )}

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
                    type="submit"
                    size="lg"
                    disabled={isProcessing}
                    className="cursor-pointer rounded-full bg-[#262121] px-6 text-lg font-semibold tracking-[0.8px] text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {isProcessing ? 'Chargement...' : 'Terminer'}
                </Button>
            </div>
        </div>
    );
}

