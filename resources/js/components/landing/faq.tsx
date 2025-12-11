import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Faq = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="border-t-2 border-black bg-[#DCECD7] px-4 py-24">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-12 text-center text-4xl font-black">
                    Questions Fréquentes
                </h2>
                <div className="space-y-4">
                    {[
                        'Comment vérifiez-vous les investisseurs ?',
                        'Est-ce que Tandeem prend une commission ?',
                        'Puis-je garder mon projet confidentiel ?',
                        'Quelle est la différence avec LinkedIn ?',
                    ].map((question: string, i: number) => (
                        <div
                            key={i}
                            className="overflow-hidden rounded-2xl border-2 border-black bg-white"
                        >
                            <button
                                onClick={() => toggleFaq(i)}
                                className="flex w-full items-center justify-between p-6 text-left font-bold hover:bg-gray-50"
                            >
                                {question}
                                {openFaq === i ? (
                                    <ChevronUp />
                                ) : (
                                    <ChevronDown />
                                )}
                            </button>
                            {openFaq === i && (
                                <div className="border-t border-gray-100 p-6 pt-0 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Enim ad minim veniam, quis
                                    nostrud exercitation ullamco.
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
