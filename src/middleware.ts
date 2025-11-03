import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/protected']);

// Đây là middleware được dùng để bảo vệ các route cần xác thực người dùng
// Nếu người dùng chưa đăng nhập và cố gắng truy cập vào các route này, họ sẽ được chuyển hướng đến trang đăng nhập
// Bạn có thể thêm các route cần bảo vệ vào mảng trong hàm createRouteMatcher
// Ví dụ: createRouteMatcher(['/protected', '/dashboard', '/settings'])
export default clerkMiddleware(async (auth, req) => {
    // If the route is protected, ensure the user is authenticated
    if (isProtectedRoute(req)) {
        await auth.protect();
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        /*
            trpc = Typescript Remote Procedure Call
            - Help us call call from client-side function without create API endpoint
        */
        '/(api|trpc)(.*)',
    ],
};
