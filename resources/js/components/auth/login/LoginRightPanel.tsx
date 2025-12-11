// Assets
const IMG_LOGIN =
    'https://www.figma.com/api/mcp/asset/8f427bdf-25b9-4aa5-8cee-0cf0151d92f8';

export default function LoginRightPanel() {
    return (
        <div className="relative hidden w-full flex-col items-center justify-center bg-[#f2fade] transition-colors duration-500 lg:flex">
            <div className="sticky top-24 w-[260px]">
                <img
                    src={IMG_LOGIN}
                    alt="Illustration"
                    className="h-auto w-full object-contain"
                />
            </div>

            <div className="mt-12 w-[280px] text-center">
                <p className="font-sans text-[20px] leading-[1.5] font-extralight tracking-[-0.4px] text-black">
                    Bienvenue sur{' '}
                    <span className="font-medium">TANDEEM</span>,
                    <br />
                    connectez-vous pour accéder à votre espace.
                </p>
            </div>
        </div>
    );
}

