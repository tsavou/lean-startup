import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { mockProfiles } from '@/data/mockProfiles';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { useState } from 'react';

export default function UserDetails({ id }: { id: string }) {
    const [invitationStatus, setInvitationStatus] = useState<
        'idle' | 'loading' | 'sent'
    >('idle');

    // Trouver le profil correspondant à l'ID
    const profile = mockProfiles.find((p) => p.id === Number(id));

    if (!profile) {
        return (
            <AppLayout breadcrumbs={[{ title: 'Introuvable', href: '#' }]}>
                <div className="flex h-[50vh] items-center justify-center">
                    <p className="text-xl font-medium text-gray-500">
                        Profil introuvable
                    </p>
                </div>
            </AppLayout>
        );
    }

    const handleInvite = () => {
        if (invitationStatus === 'sent') return;
        setInvitationStatus('loading');
        // Simulation d'un appel API
        setTimeout(() => {
            setInvitationStatus('sent');
        }, 800);
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'En savoir +', href: '#' }]}>
            <Head title={`${profile.name} - Profil`} />

            <div className="bg-[#DCECD7] px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl space-y-8">
                    {/* Bannière */}
                    <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#A594FD] px-4 py-6 text-center shadow-sm">
                        <p className="text-[15px] font-medium text-black">
                            Votre profil est complété à 60% ajouter une photo
                            pour augmenter votre chance de match avec votre
                            futur associé
                        </p>
                        <a
                            href="#"
                            className="text-[15px] font-medium text-black underline decoration-black underline-offset-2 transition-opacity hover:opacity-75"
                        >
                            Compléter mon profil
                        </a>
                    </div>

                    {/* Carte Principale */}
                    <div className="rounded-[30px] bg-white p-8 shadow-sm">
                        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                            {/* Gauche : Avatar + Infos */}
                            <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
                                <Avatar className="h-40 w-40 border-4 border-white shadow-sm">
                                    <AvatarImage
                                        src={profile.avatarSrc}
                                        alt={profile.name}
                                        className="object-cover"
                                    />
                                    <AvatarFallback>
                                        {profile.name.slice(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="space-y-1 text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-black">
                                        {profile.name}
                                    </h2>
                                    <p className="text-lg font-medium text-black">
                                        {profile.age} ans
                                    </p>
                                    <p className="text-lg font-medium text-black">
                                        {profile.experience} ans d’expérience
                                    </p>
                                </div>
                            </div>

                            {/* Droite : Actions */}
                            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                                <Button
                                    onClick={handleInvite}
                                    disabled={invitationStatus !== 'idle'}
                                    className={`h-12 min-w-[200px] rounded-full px-8 text-[15px] font-medium text-white transition-all duration-300 ${
                                        invitationStatus === 'sent'
                                            ? 'bg-green-600 hover:bg-green-700'
                                            : 'bg-[#222222] hover:bg-black'
                                    }`}
                                >
                                    {invitationStatus === 'loading' ? (
                                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                    ) : invitationStatus === 'sent' ? (
                                        <>
                                            <Check className="mr-2 h-5 w-5" />
                                            Invitation envoyée
                                        </>
                                    ) : (
                                        'Demande de tandem'
                                    )}
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-12 rounded-full border border-black bg-transparent px-8 text-[15px] font-medium text-black hover:bg-gray-50"
                                >
                                    Envoyer un message
                                </Button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mt-8">
                            <p className="text-[15px] leading-relaxed font-medium text-black">
                                {profile.description}
                            </p>
                        </div>
                    </div>

                    {/* Grille Projet / Compétences */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Carte Projet */}
                        <div className="flex h-full flex-col rounded-[30px] bg-white p-8 shadow-sm">
                            <h3 className="mb-6 text-xl font-bold text-black">
                                Projet : {profile.subtitle}
                            </h3>
                            <p className="flex-1 text-[15px] leading-relaxed font-medium text-black">
                                {profile.projectDescription ||
                                    profile.description}
                            </p>
                        </div>

                        {/* Carte Compétences (Bordure Bleue) */}
                        <div className="flex h-full flex-col rounded-[30px] border-[3px] border-[#5B9BF3] bg-white p-8 shadow-sm">
                            <h3 className="mb-6 text-xl font-bold text-black">
                                Compétences
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {profile.tags.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex h-12 items-center justify-center rounded-lg bg-[#222222] px-4 text-sm font-medium text-white"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
