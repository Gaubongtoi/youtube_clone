'use client';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { useAuth, useClerk } from '@clerk/nextjs';
import { PersonalSectionItems } from '@/modules/constant';

export const PersonalSection = () => {
    const clerk = useClerk();
    const { isSignedIn } = useAuth();
    return (
        <SidebarGroup>
            {/* Label */}
            <SidebarGroupLabel>You</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {PersonalSectionItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild // To use Link as a child
                                isActive={false} // To indicate if the item is active
                                onClick={(e) => {
                                    if (!isSignedIn && item.auth) {
                                        e.preventDefault(); // Prevent navigation
                                        return clerk.openSignIn(); // Open the sign-in modal
                                    }
                                }}
                            >
                                <Link href={item.url} className="flex items-center gap-4">
                                    <item.icon />
                                    <span className="text-sm">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};
