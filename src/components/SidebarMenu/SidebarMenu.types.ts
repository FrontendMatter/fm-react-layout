export type SubMenuItem = {
    label: string;
    route: string;
    exact?: boolean;
    active?: boolean;
    click?: () => void;
}


export type Item = {
    id: string;
    label: string;
    renderIcon?: () => React.ReactNode;
    badge?: {
        label: string;
        variant: string;
    } | null;
    route?: string; // Define the actual type for the route
    exact?: boolean;
    open?: boolean;
    active?: boolean;
    click?: () => void;
    children?: SubMenuItem[];
}

export interface SidebarMenuProps {
    items: Item[],
}