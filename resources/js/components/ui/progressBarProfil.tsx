import { CheckCircle2 } from 'lucide-react';

const ProgressBarProfil = ({ percentage = 0 }: { percentage: number }) => {
    return (
        <div className="flex w-full items-center gap-4">
            <div className="relative h-3 flex-grow overflow-hidden rounded-full border border-gray-300 bg-gray-200">
                <div
                    className="h-full w-full rounded-full bg-gray-800 transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap text-sm font-bold text-gray-700">
                Profil validé{' '}
                {percentage === 100 && (
                    <CheckCircle2 size={18} className="inline text-green-600" />
                )}
            </div>
        </div>
    );
};

export default ProgressBarProfil;
