import { Camera } from 'lucide-react';
import CardProfil from '../ui/cardProfil';

export const ProfilePhoto = () => {
    return (
        <CardProfil className="flex h-full flex-row items-center gap-4 p-4">
            {/* Photo Placeholder */}
            <div className="h-20 w-20 flex-shrink-0 rounded-full border-2 border-white bg-gray-200 shadow-sm md:h-24 md:w-24"></div>

            {/* Actions & Info */}
            <div className="flex flex-col justify-center">
                <h3 className="mb-1 text-base font-bold">Photo</h3>
                <button className="flex w-fit items-center gap-2 rounded-full bg-gray-900 px-4 py-1.5 text-xs font-bold text-white transition-colors hover:bg-black">
                    <Camera size={14} />
                    Télécharger une photo
                </button>
                <p className="mt-2 text-[10px] leading-tight text-gray-500">
                    Les profils avec photo sont consultés beaucoup plus souvent.
                    Min 300x300 pixels. Max 3MB.
                </p>
            </div>
        </CardProfil>
    );
};
