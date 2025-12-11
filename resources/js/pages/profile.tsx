import ProgressBarProfil from '../components/ui/progressBarProfil';
import DashboardLayout from '../layouts/app/app-sidebar-layout';

// Import des sous-composants
import { ProfileAbout } from '../components/profile/about';
import { ProfileBudget } from '../components/profile/budget';
import ProfileFooter from '../components/profile/footer';
import { ProfilePhoto } from '../components/profile/photo';
import { ProfileProject } from '../components/profile/project';
import { ProfileSkills } from '../components/profile/skills';
import { ProfileSocials } from '../components/profile/social';

// --- Composants locaux pour le Header et le Footer de la page ---
const PageHeader = ({ completion = 60 }) => (
    <div className="mb-8">
        <div className="mb-4 flex flex-col items-start gap-4 md:flex-row md:items-center">
            <h1 className="shrink-0 text-2xl font-black whitespace-nowrap md:text-3xl">
                Votre profil
            </h1>
            <div className="w-full md:flex-1">
                <ProgressBarProfil percentage={completion} />
            </div>
        </div>

        {/* Bannière violette */}
        <div className="rounded-xl bg-[#A78BFA] p-3 text-center text-xs font-bold text-black shadow-sm md:text-sm">
            Votre profil est complété à {completion}% ajouter une photo pour
            augmenter votre chance de match avec votre futur associé
        </div>
    </div>
);

// ------------------------------------------------------------

export const ProfilePage = () => {
    const completionPercentage = 60; // Valeur d'exemple

    return (
        <DashboardLayout>
            <div className="min-h-screen w-full bg-[#DCECD7] p-4 text-black md:p-6">
                <PageHeader completion={completionPercentage} />
                <div className="space-y-6">
                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-5">
                        {/* Colonne Gauche : Photo + Socials */}
                        <div className="flex flex-col gap-4 md:col-span-3">
                            <div>
                                <ProfilePhoto />
                            </div>
                            <div className="flex-1">
                                <ProfileSocials />
                            </div>
                        </div>

                        {/* Colonne Droite : Skills */}
                        <div className="h-full md:col-span-2">
                            <ProfileSkills />
                        </div>
                    </div>

                    <ProfileAbout />
                    <ProfileProject />
                    <ProfileBudget />
                </div>
                <ProfileFooter />
            </div>
        </DashboardLayout>
    );
};

export default ProfilePage;
