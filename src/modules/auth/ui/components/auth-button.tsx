'use client';
import { Button } from '@/components/ui/button';
import { UserCircleIcon } from 'lucide-react';
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';

export const AuthButton = () => {
    return (
        <>
            <SignedIn>
                <UserButton
                    appearance={{
                        elements: {
                            userButtonAvatarBox: 'size-9',
                            userButtonPopoverCard: 'w-60',
                        },
                    }}
                />
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium text-blue-600
        hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&_svg]:size-4"
                    >
                        <UserCircleIcon className="size-4" />
                        Signin
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    );
};
