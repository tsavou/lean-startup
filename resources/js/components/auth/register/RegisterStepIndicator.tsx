import { cn } from '@/lib/utils';

interface RegisterStepIndicatorProps {
    currentStep: number;
    totalSteps?: number;
}

export default function RegisterStepIndicator({
    currentStep,
    totalSteps = 4,
}: RegisterStepIndicatorProps) {
    return (
        <div className="mx-auto flex w-full max-w-3xl gap-[6px]">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
                <div
                    key={s}
                    className={cn(
                        'h-[10px] flex-1 border border-[#262121] first:rounded-l-[5px] last:rounded-r-[5px]',
                        s === currentStep
                            ? 'bg-[#262121]'
                            : 'bg-transparent',
                    )}
                />
            ))}
        </div>
    );
}

