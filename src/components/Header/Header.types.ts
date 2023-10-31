export interface HeaderTypes {
    children: React.ReactNode;
    fixed?: boolean;
    disabled?: boolean;
    reveals?: boolean;
    condenses?: boolean;
    effects?: string | string[];
    headerImage?: string | null;
    headerContentClass?: string;
    classes?: string;
}