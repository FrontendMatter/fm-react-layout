export interface HeaderLayoutProps {
    children: React.ReactNode;
    headerFixed?: boolean;
    headerDisabled?: boolean;
    headerReveals?: boolean;
    headerCondenses?: boolean;
    headerEffects?: string | string[];
    headerImage?: string | null;
    headerContentClass?: string;
    headerClasses?: string;
    renderHeaderContent: () => React.ReactNode;
    contentId?: string;
    contentClass?: string;
    fullbleed?: boolean;
}
