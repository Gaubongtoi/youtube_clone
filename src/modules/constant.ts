import { HomeIcon, PlaySquareIcon, FlameIcon, HistoryIcon, ThumbsUpIcon, ListVideoIcon } from 'lucide-react';

export interface NavItem {
    title: string;
    url: string;
    icon: React.ElementType;
    auth?: boolean;
}

export const MainSectionItems: NavItem[] = [
    {
        title: 'Home',
        url: '/',
        icon: HomeIcon,
    },
    {
        title: 'Subscription',
        url: '/feed/subscriptions',
        icon: PlaySquareIcon,
        auth: true,
    },
    {
        title: 'Trending',
        url: '/feed/trending',
        icon: FlameIcon,
    },
];

export const PersonalSectionItems: NavItem[] = [
    {
        title: 'History',
        url: '/playlists/history',
        icon: HistoryIcon,
        auth: true,
    },
    {
        title: 'Liked videos',
        url: '/playlists/liked',
        icon: ThumbsUpIcon,
        auth: true,
    },
    {
        title: 'All playlists',
        url: '/playlists',
        icon: ListVideoIcon,
        auth: true,
    },
];
