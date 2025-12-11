import CardProfil from '../ui/cardProfil';
import InputProfil from '../ui/inputProfil';

export const ProfileSocials = () => {
    return (
        <CardProfil className="flex h-full flex-col justify-center p-4">
            <h3 className="mb-4 text-lg font-bold">Vos réseaux</h3>
            <div className="space-y-4">
                <InputProfil
                    label="Linkedin"
                    placeholder="https://linkedin.com/in/johndoe"
                />
                <InputProfil
                    label="Blog ou autre"
                    placeholder="https://mon-portfolio.dev"
                />
            </div>
        </CardProfil>
    );
};
