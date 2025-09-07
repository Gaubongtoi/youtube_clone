import { Separator } from '@/components/ui/separator';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import { MainSection } from '@/modules/home/ui/components/home-sidebar/main-section';

export const HomeSidebar = () => {
    return (
        <div>
            <Sidebar className="pt-16 z-40 border-none">
                <SidebarContent className="bg-background">
                    <MainSection />
                    <Separator />
                    <MainSection />
                </SidebarContent>
            </Sidebar>
        </div>
    );
};
