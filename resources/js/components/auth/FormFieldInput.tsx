import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { useRef } from 'react';

interface FormFieldInputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    className?: string;
    error?: string;
    note?: string;
    onBlur?: () => void;
    prefix?: string;
    suffix?: string;
}

export default function FormFieldInput({
    label,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    className,
    error,
    note,
    onBlur,
    prefix,
    suffix,
}: FormFieldInputProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className={cn('w-full space-y-2', className)}>
            <Label className="text-[15px] font-semibold text-[#262121]">
                {label}
            </Label>
            <div className="relative h-[52px]">
                <div className="pointer-events-none absolute inset-0 rounded-[5px] border-[2px] border-[#262121]" />
                {prefix && (
                    <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[15px] font-semibold text-[#4f4b4b]">
                        {prefix}
                    </span>
                )}
                <Input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={cn(
                        'h-full w-full border-0 bg-transparent px-[14px] text-[15px] font-semibold text-[#4f4b4b] shadow-none placeholder:text-[#4f4b4b]/50 focus-visible:ring-0',
                        prefix && 'pl-9',
                        type === 'date' && 'appearance-none pr-10',
                        type === 'number' &&
                            '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
                    )}
                    placeholder={placeholder}
                />
                {suffix && (
                    <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[15px] font-semibold text-[#4f4b4b]">
                        {suffix}
                    </span>
                )}
                {type === 'date' && (
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            inputRef.current?.showPicker?.() ||
                            inputRef.current?.focus()
                        }
                        className="absolute top-1/2 right-2 h-auto -translate-y-1/2 rounded px-1 text-[#4f4b4b] hover:text-[#262121]"
                        aria-label="Choisir une date"
                    >
                        <Calendar className="h-4 w-4" aria-hidden />
                    </Button>
                )}
            </div>
            {note && (
                <p className="text-xs font-semibold tracking-wide text-black">
                    {note}
                </p>
            )}
            {error && (
                <p className="text-xs font-semibold text-red-500">{error}</p>
            )}
        </div>
    );
}

