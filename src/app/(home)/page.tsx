import Image from 'next/image';

// Home Component
export default function Home() {
    return (
        <div>
            {/* NextJS khai báo đường dẫn cho logo sẽ khác '/logo.svg' -> trỏ trực tiếp tới folder public*/}
            <Image src="/logo.svg" height={50} width={50} alt="logo" />
            <p className="text-xl font-semibold tracking-tight">Youtube</p>
        </div>
    );
}
