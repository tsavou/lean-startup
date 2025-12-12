const Footer = () => {
    return (
        <footer className="bg-black px-4 py-12 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
                <div>
                    <span className="text-2xl font-black tracking-wider uppercase">
                        TANDEEM
                    </span>
                    <p className="mt-4 text-gray-400">Lille, France 🇫🇷</p>
                </div>
                <div>
                    <h4 className="mb-4 font-bold text-[#DCECD7]">
                        Plateforme
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <a href="#" className="hover:text-white">
                                Entrepreneurs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Investisseurs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Tarifs
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 font-bold text-[#DCECD7]">Légal</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <a href="#" className="hover:text-white">
                                CGU / CGV
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Confidentialité
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 font-bold text-[#DCECD7]">Réseaux</h4>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholders */}
                        <div className="h-8 w-8 rounded-full bg-gray-800"></div>
                        <div className="h-8 w-8 rounded-full bg-gray-800"></div>
                        <div className="h-8 w-8 rounded-full bg-gray-800"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
