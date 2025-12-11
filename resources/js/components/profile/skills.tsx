import { useState } from 'react';
import CardProfil from '../ui/cardProfil';

// Exemple de données
const allSkills = [
    'Etudiant',
    'Développeur',
    'Designer',
    'Marketing',
    'Gestion',
    'Comptabilité',
    'Juridique',
    'Santé',
    'Education',
    'Technologie',
    'Langues',
    'Autres',
];

export const ProfileSkills = () => {
    // État pour stocker les compétences sélectionnées
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const toggleSkill = (skill: string) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    return (
        <CardProfil className="flex h-full flex-col">
            <h3 className="mb-4 text-lg font-bold">Vos compétences</h3>
            <div className="grid h-full grid-cols-2 gap-3">
                {allSkills.map((skill, index) => {
                    const isSelected = selectedSkills.includes(skill);
                    return (
                        <button
                            key={index}
                            onClick={() => toggleSkill(skill)}
                            className={`flex cursor-pointer items-center justify-center rounded-lg px-2 py-4 text-center text-xs font-bold transition-all duration-200 ${
                                isSelected
                                    ? 'bg-[#DCECD7] text-black shadow-md ring-2 ring-[#DCECD7] ring-offset-1'
                                    : 'border border-gray-200 bg-white text-gray-600 hover:border-[#DCECD7] hover:text-black'
                            }`}
                        >
                            {skill}
                        </button>
                    );
                })}
            </div>
        </CardProfil>
    );
};
