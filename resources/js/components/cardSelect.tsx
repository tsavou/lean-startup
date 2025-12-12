import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CardProfil from '@/components/ui/cardProfil';

interface CardSelectProps {
    name: string;
    subtitle: string;
    description: string;
    tags: string[];
    avatarSrc?: string;
    onLearnMore?: () => void;
}

export default function CardSelect({
    name,
    subtitle,
    description,
    tags,
    avatarSrc,
    onLearnMore,
}: CardSelectProps) {
    return (
        <CardProfil className="flex w-full max-w-[340px] flex-col justify-between gap-6 border-transparent !p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
            <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 border border-gray-100 shadow-sm">
                        <AvatarImage
                            src={avatarSrc}
                            alt={name}
                            className="object-cover"
                        />
                        <AvatarFallback className="bg-neutral-100 text-lg font-medium text-neutral-600">
                            {name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <h3 className="text-2xl leading-tight font-black text-black">
                            {name}
                        </h3>
                        <p className="mt-0.5 text-[15px] font-semibold text-[#8B5CF6]">
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-[15px] leading-relaxed font-medium text-black">
                    {description}
                </p>

                {/* Tags Grid */}
                <div className="grid grid-cols-2 gap-3">
                    {tags.map((tag, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className="flex h-10 w-full items-center justify-center rounded-lg bg-[#222222] text-sm font-bold text-white hover:bg-[#333333]"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Footer / Button */}
            <div className="flex justify-end pt-2">
                <Button
                    onClick={onLearnMore}
                    className="rounded-full bg-[#8B5CF6] px-6 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#7C3AED]"
                >
                    En savoir +
                </Button>
            </div>
        </CardProfil>
    );
}
