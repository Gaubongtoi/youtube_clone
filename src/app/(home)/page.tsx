import Image from 'next/image';

// Home Component
// Khi bạn đặt tên cho folder là (home) thì file page.tsx bên trong folder đó sẽ trở thành trang chủ của ứng dụng
// Tương tự như vậy, nếu bạn đặt tên folder là (dashboard) thì file page.tsx bên trong folder đó sẽ trở thành trang dashboard của ứng dụng
// Lưu ý: Bạn chỉ nên có một folder được đặt tên là (home) trong toàn bộ ứng dụng của bạn
// Nếu bạn cần nhiều trang chủ khác nhau, hãy sử dụng các route khác nhau thay vì tạo nhiều folder (home)
export default function Home() {
    return (
        <div>
            {/* NextJS khai báo đường dẫn cho logo sẽ khác '/logo.svg' -> trỏ trực tiếp tới folder public*/}
            <Image src="/logo.svg" height={50} width={50} alt="logo" />
            <p className="text-xl font-semibold tracking-tight">Youtube</p>
        </div>
    );
}
