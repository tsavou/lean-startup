import { Check, X } from 'lucide-react';
import { Button } from './button';

const Pricing = () => {
    return (
        <section id="pricing" className="mx-auto max-w-7xl px-4 py-24">
            <div className="mb-16 text-center">
                <h2 className="mb-4 text-4xl font-black">
                    Investissez dans votre avenir
                </h2>
                <p className="text-xl text-gray-600">
                    Des tarifs transparents, sans frais cachés.
                </p>
            </div>

            <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-3">
                {/* Plan 1 */}
                <div className="rounded-3xl border-2 border-black bg-white p-8">
                    <h3 className="mb-2 text-xl font-bold">Découverte</h3>
                    <div className="mb-6 text-4xl font-black">Gratuit</div>
                    <ul className="mb-8 space-y-3">
                        <li className="flex items-center gap-2">
                            <Check size={18} /> Création de profil
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={18} /> 3 Matchs / mois
                        </li>
                        <li className="flex items-center gap-2 text-gray-400">
                            <X size={18} /> Messagerie illimitée
                        </li>
                    </ul>
                    <Button variant="secondary" className="w-full">
                        Commencer
                    </Button>
                </div>

                {/* Plan 2 - Highlighted */}
                <div className="relative transform rounded-3xl border-2 border-black bg-[#111] p-8 text-white shadow-[8px_8px_0px_0px_#DCECD7] md:-translate-y-4">
                    <div className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl border-b-2 border-l-2 border-black bg-[#DCECD7] px-3 py-1 text-xs font-bold text-black">
                        POPULAIRE
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#DCECD7]">
                        Ambition
                    </h3>
                    <div className="mb-6 text-4xl font-black">
                        19,90€
                        <span className="text-lg font-normal text-gray-400">
                            /mois
                        </span>
                    </div>
                    <ul className="mb-8 space-y-3">
                        <li className="flex items-center gap-2">
                            <Check size={18} /> Tout "Découverte"
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={18} /> Matchs illimités
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={18} /> Messagerie illimitée
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={18} /> Badge "Vérifié"
                        </li>
                    </ul>
                    <Button variant="accent" className="w-full">
                        Choisir ce plan
                    </Button>
                </div>

                {/* Plan 3 */}
                <div className="rounded-3xl border-2 border-black bg-white p-8">
                    <h3 className="mb-2 text-xl font-bold">Corporate</h3>
                    <div className="mb-6 text-4xl font-black">
                        49,90€
                        <span className="text-lg font-normal text-gray-400">
                            /mois
                        </span>
                    </div>{' '}
                    <ul className="mb-8 space-y-3">
                        <li className="flex items-center gap-2">
                            <Check size={18} /> Pour les fonds VC
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={18} /> Accès API
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={18} /> Support dédié
                        </li>
                    </ul>
                    <Button variant="secondary" className="w-full">
                        Contacter
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
