import { useState } from 'react';
import { Button } from './button';

const Hero = () => {
    const [role, setRole] = useState<'entrepreneur' | 'investisseur'>(
        'entrepreneur',
    );
    return (
        <section className="mx-auto max-w-7xl px-4 pt-32 pb-20 text-center lg:pt-48 lg:pb-32">
            <div className="text-md mb-7 inline-block rounded-full border border-black bg-[#DCECD7] px-5 py-1 font-bold">
                La plateforme #1 pour l'entrepreneuriat
            </div>
            <h1 className="mb-8 text-5xl leading-tight font-black md:text-7xl">
                L'ambition rencontre <br />
                <span className="relative z-10">
                    les moyens.
                    <svg
                        className="absolute -bottom-1 left-0 -z-10 h-3 w-full"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0 5 Q 50 10 100 5"
                            stroke="#DCECD7"
                            strokeWidth="8"
                            fill="none"
                        />
                    </svg>
                </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600 md:text-2xl">
                Arrêtez de chercher au mauvais endroit. Tandeem connecte les
                porteurs de projets visionnaires aux investisseurs prêts à
                s'engager.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
                <Button
                    onClick={() => setRole('entrepreneur')}
                    variant={role === 'entrepreneur' ? 'primary' : 'secondary'}
                    className="px-8 text-lg"
                >
                    Je suis Entrepreneur
                </Button>

                <Button
                    onClick={() => setRole('investisseur')}
                    variant={role === 'investisseur' ? 'primary' : 'secondary'}
                    className="px-8 text-lg"
                >
                    Je suis Investisseur
                </Button>
            </div>

            {/* Social Proof / Dashboard Preview Placeholder */}
            <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="relative flex aspect-video items-center justify-center bg-gray-50">
                    {role === 'entrepreneur' ? (
                        <img
                            src="/Demo2.png"
                            alt="Dashboard Entrepreneur"
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <img
                            src="/Demo.png"
                            alt="Dashboard Investisseur"
                            className="h-full w-full object-cover"
                        />
                    )}

                    <div className="absolute right-0 bottom-0 h-full w-1/3 translate-x-10 skew-x-12 transform bg-[#DCECD7] opacity-20"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
