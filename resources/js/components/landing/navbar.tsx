import { login, register } from '@/routes';
import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <nav className="fixed z-50 w-full rounded-b-lg border-b border-black bg-white/90 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-shrink-0 items-center">
                        <span className="text-2xl font-black tracking-wider uppercase">
                            TANDEEM
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden items-center space-x-8 md:flex">
                        <a
                            href="#features"
                            className="font-medium text-black decoration-[#E6CCE4] decoration-2 underline-offset-2 hover:underline"
                        >
                            Fonctionnalités
                        </a>
                        <a
                            href="#how-it-works"
                            className="font-medium text-black decoration-[#CCE3E6] decoration-2 underline-offset-2 hover:underline"
                        >
                            Comment ça marche
                        </a>
                        <a
                            href="#pricing"
                            className="font-medium text-black decoration-[#E6DCCC] decoration-2 underline-offset-2 hover:underline"
                        >
                            Tarifs
                        </a>
                        <div className="flex items-center space-x-4">
                            <Link href={login()}>
                                <Button
                                    variant="secondary"
                                    className="px-4 py-2 text-sm cursor-pointer"
                                >
                                    Connexion
                                </Button>
                            </Link>
                            <Link href={register()}>
                                <Button
                                    variant="primary"
                                    className="px-4 py-2 text-sm cursor-pointer"
                                >
                                    Inscription
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-black"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-b border-black bg-white md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        <a
                            href="#features"
                            className="block px-3 py-2 font-bold text-black"
                        >
                            Fonctionnalités
                        </a>
                        <a
                            href="#pricing"
                            className="block px-3 py-2 font-bold text-black"
                        >
                            Tarifs
                        </a>
                        <div className="mt-4 space-y-2">
                            <Link href={login()} className="block">
                                <Button variant="secondary" className="w-full cursor-pointer">
                                    Connexion
                                </Button>
                            </Link>
                            <Link href={register()} className="block">
                                <Button variant="primary" className="w-full cursor-pointer">
                                    Inscription
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
