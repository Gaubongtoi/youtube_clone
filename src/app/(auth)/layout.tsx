import Image from 'next/image';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center bg-[linear-gradient(135deg,#fde4e4,#fff,#fbe9d7)]">
            {/* Card center */}
            <div
                className="w-full max-w-5xl bg-white rounded-3xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]
                           border border-neutral-200/60 overflow-hidden flex flex-col md:flex-row
                           min-h-[520px] md:min-h-[600px]" // thêm chiều cao tối thiểu
            >
                {/* Left illustration panel */}
                <div className="relative md:w-1/2">
                    <Image src="/YT_thump.png" alt="Illustration" fill priority quality={95} className="object-cover" />
                </div>
                {/* Right form area (children) */}
                <div className="md:w-1/2 flex flex-col justify-center gap-8 items-center p-8">{children}</div>
            </div>
        </div>
    );
};

export default AuthLayout;
