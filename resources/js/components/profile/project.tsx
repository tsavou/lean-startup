import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import CardProfil from '../ui/cardProfil';
import InputProfil from '../ui/inputProfil';

// Composant Wrapper pour le Select Shadcn avec Label
const SelectWrapper = ({
    label,
    options,
    placeholder,
}: {
    label: string;
    options: string[];
    placeholder?: string;
}) => (
    <div className="w-full">
        <label className="mb-2 ml-1 block text-sm font-bold text-gray-800">
            {label}
        </label>
        <Select>
            <SelectTrigger className="w-full rounded-xl border-gray-800 px-4 py-6 font-medium text-gray-800 shadow-none ring-offset-0 focus:ring-4 focus:ring-black/10 focus:ring-offset-0">
                <SelectValue placeholder={placeholder || options[0]} />
            </SelectTrigger>
            <SelectContent>
                {options.map((opt, i) => (
                    <SelectItem key={i} value={opt}>
                        {opt}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);

export const ProfileProject = () => {
    return (
        <CardProfil>
            <h3 className="mb-6 text-lg font-bold">Votre projet</h3>
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputProfil label="Le nom" placeholder="ex: EcoTrack" />
                <SelectWrapper
                    label="Le type"
                    placeholder="SaaS B2B"
                    options={[
                        'SaaS B2B',
                        'Marketplace',
                        'App Mobile',
                        'E-commerce',
                        'Deeptech',
                        'Autre',
                    ]}
                />
            </div>
            <div>
                <label className="mb-2 ml-1 block text-sm font-bold text-gray-800">
                    Description
                </label>
                <textarea
                    className="h-32 w-full resize-none rounded-2xl border border-gray-800 bg-white px-4 py-3 transition-all duration-200 focus:border-black focus:ring-4 focus:ring-black/10 focus:outline-none"
                    placeholder="Une plateforme permettant aux PME de mesurer leur impact carbone..."
                ></textarea>
            </div>
        </CardProfil>
    );
};
