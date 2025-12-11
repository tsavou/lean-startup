import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SKILLS_LIST = [
    'Développement back',
    'Juridique',
    'Développement front',
    'Data analyse',
    'Marketing',
    'Commerce',
    'Design web',
    'Gestion budgétaire',
    'Entreprenariat',
    'Management',
    'Comptabilité',
    'Négociation',
];

interface Step3SkillsProps {
    selectedSkills: string[];
    onToggleSkill: (skill: string) => void;
    onPrevious: () => void;
    onNext: () => void;
}

export default function Step3Skills({
    selectedSkills,
    onToggleSkill,
    onPrevious,
    onNext,
}: Step3SkillsProps) {
    return (
        <div className="flex flex-col gap-6">
            <p className="text-[18px] font-semibold tracking-[0.8px] text-black">
                Tu excelles en :
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {SKILLS_LIST.map((skill) => (
                    <button
                        type="button"
                        key={skill}
                        onClick={() => onToggleSkill(skill)}
                        className={cn(
                            'flex h-[56px] cursor-pointer items-center justify-center rounded-[14px] border-2 border-[#262121] px-2 text-center text-[15px] font-semibold tracking-[0.7px] transition-all hover:scale-[1.01]',
                            selectedSkills.includes(skill)
                                ? 'bg-[#262121] text-white'
                                : 'bg-white text-black hover:bg-gray-50',
                        )}
                    >
                        {skill}
                    </button>
                ))}
            </div>

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
                    className="cursor-pointer rounded-full bg-[#262121] px-6 text-lg font-semibold tracking-[0.8px] text-white hover:bg-black/90"
                >
                    Suivant
                </Button>
            </div>
        </div>
    );
}

