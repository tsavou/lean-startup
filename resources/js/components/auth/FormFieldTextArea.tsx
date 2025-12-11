import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface FormFieldTextAreaProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    className?: string;
    error?: string;
    onBlur?: () => void;
}

export default function FormFieldTextArea({
    label,
    value,
    onChange,
    placeholder = '',
    className,
    error,
    onBlur,
}: FormFieldTextAreaProps) {
    return (
        <div className={cn('w-full space-y-2', className)}>
            <Label className="text-[15px] font-semibold text-[#262121]">
                {label}
            </Label>
            <div className="relative">
                <div className="pointer-events-none absolute inset-0 rounded-[5px] border-[2px] border-[#262121]" />
                <Textarea
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className="h-full min-h-[120px] w-full resize-none border-0 bg-transparent px-[14px] py-[12px] text-[15px] font-semibold text-[#4f4b4b] shadow-none placeholder:text-[#4f4b4b]/50 focus-visible:ring-0"
                    placeholder={placeholder}
                />
            </div>
            {error && (
                <p className="text-xs font-semibold text-red-500">{error}</p>
            )}
        </div>
    );
}

