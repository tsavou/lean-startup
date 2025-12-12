import { cn } from '@/lib/utils';

interface RoleSelectorProps {
    selectedRole: 'creator' | 'investor' | '';
    onSelect: (role: 'creator' | 'investor') => void;
}

export default function RoleSelector({
    selectedRole,
    onSelect,
}: RoleSelectorProps) {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-[18px] font-semibold tracking-[0.8px] text-black">
                J'ai :
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                    type="button"
                    onClick={() => onSelect('creator')}
                    className={cn(
                        'flex h-[56px] cursor-pointer items-center justify-center rounded-[14px] border-2 border-[#262121] text-[15px] font-semibold tracking-[0.7px] transition-all',
                        selectedRole === 'creator'
                            ? 'bg-[#262121] text-white'
                            : 'bg-white text-black hover:bg-gray-50',
                    )}
                >
                    Une idée de projet
                </button>
                <button
                    type="button"
                    onClick={() => onSelect('investor')}
                    className={cn(
                        'flex h-[56px] cursor-pointer items-center justify-center rounded-[14px] border-2 border-[#262121] text-[15px] font-semibold tracking-[0.7px] transition-all',
                        selectedRole === 'investor'
                            ? 'bg-[#262121] text-white'
                            : 'bg-white text-black hover:bg-gray-50',
                    )}
                >
                    Un budget à investir
                </button>
            </div>
        </div>
    );
}

