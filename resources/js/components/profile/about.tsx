import CardProfil from '../ui/cardProfil';
import InputProfil from '../ui/inputProfil';

export const ProfileAbout = () => {
    return (
        <CardProfil>
            <h3 className="mb-2 text-lg font-bold">Parlez de vous</h3>
            <p className="mb-6 text-sm text-gray-600">
                Exprimez votre personnalité, votre philosophie de travail, et
                vos motivations profondes qui ne sont pas couvertes par vos
                compétences.
            </p>

            <div className="mb-6">
                <textarea
                    className="h-40 w-full resize-none rounded-2xl border border-gray-800 px-4 py-3 placeholder-gray-400 transition-all duration-200 focus:border-black focus:ring-4 focus:ring-black/10 focus:outline-none"
                    placeholder="Passionné par l'innovation sociale et la tech for good. Je cherche un associé technique pour..."
                ></textarea>
            </div>

            <div className="max-w-md">
                <InputProfil
                    label="Combien de d'année d'expérience ?"
                    placeholder="ex: 5 ans"
                    type="text"
                />
            </div>
        </CardProfil>
    );
};
