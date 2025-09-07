import { HomeLayout } from '@/modules/home/ui/layouts/home-layout';
interface LayoutProps {
    children: React.ReactNode;
}
// Layout Home page
const Layout = ({ children }: LayoutProps) => {
    return <HomeLayout>{children}</HomeLayout>;
};

export default Layout;
