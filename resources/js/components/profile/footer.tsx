export default function ProfileFooter() {
    return (
        <div className="mt-12">
            <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
                <button className="w-full rounded-full bg-[#EF4444] px-8 py-3 font-bold text-white transition-colors hover:bg-red-600 md:w-auto">
                    Supprimer le compte
                </button>
                <button className="w-full rounded-full bg-[#1A1A1A] px-12 py-3 text-lg font-bold text-[#F3F8E8] transition-colors hover:bg-black md:w-auto">
                    Sauvegarder
                </button>
            </div>
        </div>
    );
}
