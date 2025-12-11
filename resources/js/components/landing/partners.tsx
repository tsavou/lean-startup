const Partners = () => {
    return (
        <section className="border-y border-black bg-gray-50 py-10">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <p className="mb-8 text-sm font-bold tracking-widest text-gray-500 uppercase">
                    Ils nous font confiance
                </p>
                <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale transition-all hover:grayscale-0">
                    {[
                        'Station F',
                        'Kima Ventures',
                        'Bpifrance',
                        'Techstars',
                        'Y Combinator',
                    ].map((partner) => (
                        <span key={partner} className="text-xl font-bold">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
