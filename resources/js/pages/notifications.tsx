import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { MessageCircle, UserMinus, X } from 'lucide-react';
import { useState } from 'react';

type NotificationType = 'sent' | 'received' | 'matched';

interface User {
    id: number;
    name: string;
    role: string;
    avatar: string;
    date: string;
    tags: string[];
}

export default function Notifications() {
    const [activeTab, setActiveTab] = useState<NotificationType>('received');

    // Données mockées
    const receivedRequests: User[] = [
        {
            id: 1,
            name: 'Alice Martin',
            role: 'Marketing Specialist',
            avatar: 'https://i.pravatar.cc/150?u=10',
            date: 'Il y a 2 heures',
            tags: ['Marketing', 'Com'],
        },
        {
            id: 2,
            name: 'Thomas Bernard',
            role: 'Développeur Fullstack',
            avatar: 'https://i.pravatar.cc/150?u=11',
            date: 'Hier',
            tags: ['Dev', 'React'],
        },
    ];

    const sentRequests: User[] = [
        {
            id: 3,
            name: 'Sophie Dubois',
            role: 'UX Designer',
            avatar: 'https://i.pravatar.cc/150?u=12',
            date: 'Il y a 3 jours',
            tags: ['Design', 'Figma'],
        },
    ];

    const matches: User[] = [
        {
            id: 4,
            name: 'Lucas Petit',
            role: 'Product Owner',
            avatar: 'https://i.pravatar.cc/150?u=13',
            date: 'Match le 10/12/2023',
            tags: ['Produit', 'Agile'],
        },
        {
            id: 5,
            name: 'Emma Leroy',
            role: 'Growth Hacker',
            avatar: 'https://i.pravatar.cc/150?u=14',
            date: 'Match le 08/12/2023',
            tags: ['Growth', 'Data'],
        },
    ];

    const tabs = [
        {
            id: 'received',
            label: 'Demandes reçues',
            count: receivedRequests.length,
        },
        { id: 'sent', label: 'Demandes envoyées', count: sentRequests.length },
        { id: 'matched', label: 'Mes Matchs', count: matches.length },
    ];

    return (
        <AppLayout
            breadcrumbs={[{ title: 'Notifications', href: '/notifications' }]}
        >
            <Head title="Notifications" />

            <div className="min-h-screen bg-[#DCECD7] px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <h1 className="mb-8 text-3xl font-bold text-black">
                        Notifications
                    </h1>

                    {/* Onglets */}
                    <div className="mb-8 flex flex-wrap gap-4 border-b border-black/10 pb-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() =>
                                    setActiveTab(tab.id as NotificationType)
                                }
                                className={`relative rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                                    activeTab === tab.id
                                        ? 'bg-[#222222] text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-white/80'
                                }`}
                            >
                                {tab.label}
                                {tab.count > 0 && (
                                    <span
                                        className={`ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-xs ${
                                            activeTab === tab.id
                                                ? 'bg-white text-black'
                                                : 'bg-[#222222] text-white'
                                        }`}
                                    >
                                        {tab.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Contenu */}
                    <div className="space-y-4">
                        {activeTab === 'received' && (
                            <div className="space-y-4">
                                {receivedRequests.length === 0 ? (
                                    <p className="py-8 text-center text-gray-500">
                                        Aucune demande reçue pour le moment.
                                    </p>
                                ) : (
                                    receivedRequests.map((user) => (
                                        <NotificationCard
                                            key={user.id}
                                            user={user}
                                            type="received"
                                        />
                                    ))
                                )}
                            </div>
                        )}

                        {activeTab === 'sent' && (
                            <div className="space-y-4">
                                {sentRequests.length === 0 ? (
                                    <p className="py-8 text-center text-gray-500">
                                        Aucune demande envoyée.
                                    </p>
                                ) : (
                                    sentRequests.map((user) => (
                                        <NotificationCard
                                            key={user.id}
                                            user={user}
                                            type="sent"
                                        />
                                    ))
                                )}
                            </div>
                        )}

                        {activeTab === 'matched' && (
                            <div className="space-y-4">
                                {matches.length === 0 ? (
                                    <p className="py-8 text-center text-gray-500">
                                        Vous n'avez pas encore de matchs.
                                    </p>
                                ) : (
                                    matches.map((user) => (
                                        <NotificationCard
                                            key={user.id}
                                            user={user}
                                            type="matched"
                                        />
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function NotificationCard({
    user,
    type,
}: {
    user: User;
    type: NotificationType;
}) {
    return (
        <div className="flex flex-col items-center justify-between gap-6 rounded-[20px] bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:flex-row">
            <div className="flex flex-col items-center gap-4 md:flex-row">
                <Avatar className="h-16 w-16 border border-gray-100">
                    <AvatarImage
                        src={user.avatar}
                        alt={user.name}
                        className="object-cover"
                    />
                    <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-black">
                        {user.name}
                    </h3>
                    <p className="text-sm font-medium text-[#8B5CF6]">
                        {user.role}
                    </p>
                    <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
                        {user.tags.map((tag, i) => (
                            <Badge
                                key={i}
                                variant="secondary"
                                className="bg-gray-100 text-xs font-normal text-gray-600 hover:bg-gray-200"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <p className="mt-2 text-xs text-gray-400">{user.date}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                {type === 'received' && (
                    <>
                        <Button
                            variant="outline"
                            className="h-10 w-10 rounded-full border-gray-200 p-0 text-red-500 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                            title="Refuser"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                        <Button className="h-10 rounded-full bg-[#222222] px-6 text-sm font-bold text-white hover:bg-black">
                            Accepter
                        </Button>
                    </>
                )}

                {type === 'sent' && (
                    <Button
                        variant="outline"
                        className="h-10 rounded-full border-gray-200 px-4 text-sm font-medium text-gray-500 hover:border-red-200 hover:bg-gray-50 hover:text-red-500"
                    >
                        <UserMinus className="mr-2 h-4 w-4" />
                        Annuler
                    </Button>
                )}

                {type === 'matched' && (
                    <Button className="h-10 rounded-full bg-[#8B5CF6] px-6 text-sm font-bold text-white hover:bg-[#7C3AED]">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Message
                    </Button>
                )}
            </div>
        </div>
    );
}
