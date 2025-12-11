import CardSelect from '@/components/cardSelect';
import { mockProfiles } from '@/data/mockProfiles';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="mx-auto w-full max-w-7xl bg-[#DCECD7] px-4 py-8 sm:px-6 lg:px-8">
                {/* Titre */}
                <h1 className="mb-8 text-2xl font-bold text-black">
                    Trouvez votre associé parmi ces profils
                </h1>

                {/* Bannière de profil */}
                <div className="mb-10 flex flex-col items-center justify-center gap-2 rounded-xl bg-[#A594FD] px-4 py-8 text-center shadow-sm">
                    <p className="text-[15px] font-medium text-black">
                        Votre profil est complété à 60% ajouter une photo pour
                        augmenter votre chance de trouver votre futur associé
                    </p>
                    <a
                        href="#"
                        className="text-[15px] font-medium text-black underline decoration-black underline-offset-2 transition-opacity hover:opacity-75"
                    >
                        Compléter mon profil
                    </a>
                </div>

                {/* Grille de cartes */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {mockProfiles.map((profile) => (
                        <CardSelect
                            key={profile.id}
                            name={profile.name}
                            subtitle={profile.subtitle}
                            description={profile.description}
                            tags={profile.tags}
                            avatarSrc={profile.avatarSrc}
                            onLearnMore={() =>
                                router.visit(`/user/${profile.id}`)
                            }
                        />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
