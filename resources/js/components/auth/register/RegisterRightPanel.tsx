import { cn } from '@/lib/utils';

// Assets
const IMG_STEP_1 =
    'https://www.figma.com/api/mcp/asset/8f427bdf-25b9-4aa5-8cee-0cf0151d92f8';
const IMG_STEP_2 =
    'https://www.figma.com/api/mcp/asset/c7be0765-e10f-4b42-bcb5-3866a6e0de3a';
const IMG_STEP_3 =
    'https://www.figma.com/api/mcp/asset/b96a338d-d289-43c7-ac7b-90f4b4196c89';
const IMG_STEP_4_CREATOR =
    'https://www.figma.com/api/mcp/asset/051c611f-e1c1-4aee-afbd-61802638a311';
const IMG_STEP_4_INVESTOR =
    'https://www.figma.com/api/mcp/asset/bc717ccc-0695-4bdc-87ab-401735fc1a99';

interface RegisterRightPanelProps {
    step: number;
    role?: 'creator' | 'investor';
}

export default function RegisterRightPanel({
    step,
    role,
}: RegisterRightPanelProps) {
    const getRightPanelColor = () => {
        if (step === 2) return 'bg-[#e6dccc]';
        if (step === 3 || step === 4) {
            if (step === 4 && role === 'investor')
                return 'bg-[#ccd6e6]'; // Blueish for investor
            return 'bg-[#d5e6cc]'; // Greenish for others
        }
        return 'bg-[#f2fade]'; // Fallback
    };

    const getImage = () => {
        if (step === 1) return IMG_STEP_1;
        if (step === 2) return IMG_STEP_2;
        if (step === 3) return IMG_STEP_3;
        if (step === 4) {
            return role === 'creator' ? IMG_STEP_4_CREATOR : IMG_STEP_4_INVESTOR;
        }
        return IMG_STEP_1;
    };

    return (
        <div
            className={cn(
                'relative hidden w-full flex-col items-center justify-center transition-colors duration-500 lg:flex',
                getRightPanelColor(),
            )}
        >
            <div className="sticky top-24 w-[260px]">
                <img
                    src={getImage()}
                    alt="Illustration"
                    className="h-auto w-full object-contain"
                />
            </div>

            <div className="mt-12 w-[280px] text-center">
                <p className="font-sans text-[20px] leading-[1.5] font-extralight tracking-[-0.4px] text-black">
                    {step === 4 ? (
                        <>
                            Il ne reste plus qu'une dernière étape pour
                            finaliser votre
                            <span className="font-medium">
                                {' '}
                                inscription
                            </span>
                            .
                        </>
                    ) : (
                        <>
                            Bienvenue sur{' '}
                            <span className="font-medium">TANDEEM</span>,
                            <br />
                            pour continuer veuillez <br />
                            <span className="font-medium">
                                {step === 3 ? 'selectionnez' : 'remplir'}
                            </span>{' '}
                            les informations.
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}

