const HowItWorks = () => {
    return (
        <section id="how-it-works" className="bg-black px-4 py-24 text-white">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-16 text-center text-4xl font-black">
                    De l'inscription au closing
                </h2>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {[
                        {
                            step: '01',
                            title: 'Créez votre profil',
                            desc: 'Remplissez les critères essentiels. Notre DA épurée vous guide sans distraction.',
                        },
                        {
                            step: '02',
                            title: 'Matchez',
                            desc: 'Recevez une sélection curée chaque semaine. Likez, discutez, rencontrez.',
                        },
                        {
                            step: '03',
                            title: 'Concrétisez',
                            desc: "Utilisez nos outils pour structurer la levée de fonds ou l'association.",
                        },
                    ].map((item) => (
                        <div
                            key={item.step}
                            className="relative border-l-2 border-[#DCECD7] pl-8"
                        >
                            <span className="absolute top-0 -left-3 bg-black px-1 text-sm font-bold text-[#DCECD7]">
                                {item.step}
                            </span>
                            <h3 className="mb-2 text-2xl font-bold">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
