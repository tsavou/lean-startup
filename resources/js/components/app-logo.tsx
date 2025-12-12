import { useSidebar } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    const { state } = useSidebar();
    const isMobile = useIsMobile();

    return (
        <>
            {state === 'collapsed' && !isMobile ? (
                <div className="flex aspect-square size-8 items-center justify-center rounded-md text-sidebar-primary-foreground">
                    <AppLogoIcon />
                </div>
            ) : (
                <div className="flex flex-1 items-center">
                    <img
                        src="/tandeem_logo.png"
                        alt="Tandeem"
                        className="h-8 w-auto"
                    />
                </div>
            )}
        </>
    );
}
