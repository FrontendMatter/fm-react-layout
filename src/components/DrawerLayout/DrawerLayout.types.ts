export interface DrawerLayoutProps {
    children: React.ReactNode;
    push?: boolean ;
    fullbleed?: boolean,
    forceNarrow?: boolean,
    hasScrollingRegion?: boolean,
    responsiveWidth?: string,
    contentClass?: string,
    contentId?: string,
    renderDrawerContent?: () => React.ReactNode,
    drawerId?: string;
    drawerAlign?: string;
    drawerPersistent?: boolean,
    drawerOpened?: boolean,
    drawerClasses?: string,
    drawerContentClass?: string,
    drawerChangeVisibility?: (prevState: boolean) => boolean,
}