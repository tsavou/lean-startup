const Benefits = () => {
    return (
        <section id="features" className="mx-auto max-w-7xl px-4 py-24">
            <div className="mb-16">
                <h2 className="mb-4 text-4xl font-black">Pourquoi Tandeem ?</h2>
                <p className="text-xl text-gray-600">
                    Tout ce dont vous avez besoin pour sceller le deal.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Card 1 - Big */}
                <div className="rounded-3xl border-2 border-black bg-[#DCECD7] p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 md:col-span-2">
                    <h3 className="mb-4 text-2xl font-bold">
                        Matching Intelligent
                    </h3>
                    <p className="mb-6">
                        Notre algorithme ne se base pas que sur les chiffres. Il
                        analyse les compétences, la vision et les valeurs pour
                        créer des duos pérennes.
                    </p>
                    <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-black bg-white/50">
                        Illustration IA
                    </div>
                </div>

                {/* Card 2 */}
                <div className="rounded-3xl border-2 border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1">
                    <h3 className="mb-4 text-2xl font-bold">
                        Dossiers Vérifiés
                    </h3>
                    <p>
                        Fini les pertes de temps. Chaque profil est audité avant
                        d'arriver sur la plateforme.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-3xl border-2 border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1">
                    <h3 className="mb-4 text-2xl font-bold">
                        Juridique Simplifié
                    </h3>
                    <p>
                        Générez vos LOI et pactes d'associés directement depuis
                        votre espace.
                    </p>
                </div>

                {/* Card 4 - Big */}
                <div className="rounded-3xl border-2 border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 md:col-span-2">
                    <h3 className="mb-4 text-2xl font-bold">
                        Data Room Sécurisée
                    </h3>
                    <p className="mb-6">
                        Partagez vos documents financiers et stratégiques en
                        toute sécurité avec des accès granulaires.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
