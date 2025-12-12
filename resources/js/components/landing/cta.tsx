import { Link } from '@inertiajs/react';
import { Button } from './button';
const Cta = () => {
    return (
        <section className="flex flex-col items-center px-4 py-32 text-center">
            <h2 className="mb-8 text-5xl font-black md:text-6xl">
                Prêt à décoller ?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600">
                Rejoignez les 500+ entrepreneurs qui ont trouvé leur associé ce
                mois-ci.
            </p>
            <Link href="/register">
                <Button
                    variant="primary"
                    className="px-12 py-4 text-xl shadow-[4px_4px_0px_0px_#DCECD7]"
                >
                    Créer mon compte gratuitement
                </Button>
            </Link>
        </section>
    );
};

export default Cta;
