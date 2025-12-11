import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import CardProfil from '../ui/cardProfil';

// Réutilisation du Select Wrapper (similaire à Project, idéalement à extraire)
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

export const ProfileBudget = () => {
    return (
        <CardProfil>
            <h3 className="mb-6 text-lg font-bold">Votre budget</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <SelectWrapper
                    label="Type de projet qui vous intéresse"
                    placeholder="Early Stage (Idée)"
                    options={[
                        'Early Stage (Idée)',
                        'MVP existant',
                        'En croissance',
                        'Reprise',
                    ]}
                />
                <SelectWrapper
                    label="Votre budget"
                    placeholder="0€ - Sweat equity"
                    options={[
                        '0€ - Sweat equity',
                        '1k€ - 10k€',
                        '10k€ - 50k€',
                        '50k€ +',
                    ]}
                />
            </div>
        </CardProfil>
    );
};
