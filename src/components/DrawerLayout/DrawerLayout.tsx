import React, {forwardRef, useEffect, useRef} from 'react';
import { handler } from 'dom-factory';
import 'material-design-kit/src/drawer-layout/drawer-layout.scss';
import { drawerLayoutComponent } from 'material-design-kit';

handler.register('mdk-drawer-layout', drawerLayoutComponent);

import Drawer from "../Drawer";
import {DrawerLayoutProps} from "./DrawerLayout.types";
import PerfectScrollbar from "../PerfectScrollbar";
import drawer from "../Drawer";

const EVENT_UPGRADED = 'domfactory-component-upgraded';

const DrawerLayout = forwardRef((props: DrawerLayoutProps, ref) => {
    const {
        push = true,
        fullbleed= false,
        hasScrollingRegion = false,
        responsiveWidth = '992px',
        contentClass = null,
        contentId= "contentID",
        children,
        renderDrawerContent,
        drawerId,
        drawerAlign,
        drawerPersistent,
        drawerOpened= false,
        drawerClasses,
        drawerContentClass
    } = props;

    const element = useRef<HTMLDivElement>(null);

    const updateAttributes = () => {
        const drawerLayoutNode = (element.current as any)
        const drawerLayout = drawerLayoutNode?.mdkDrawerLayout;
        drawerLayout.push = push;
        drawerLayout.fullbleed = fullbleed;
        drawerLayout.hasScrollingRegion = hasScrollingRegion;
        drawerLayout.responsiveWidth = responsiveWidth;
    }

    useEffect(() => {
        const drawerLayoutNode = (element.current as any)
        const drawerLayout = drawerLayoutNode?.mdkDrawerLayout;
        if(!!drawerLayout){
            drawerLayout.fullbleed = fullbleed;
        }

        drawerLayoutNode?.addEventListener(EVENT_UPGRADED, updateAttributes)
        handler.upgradeElement(drawerLayoutNode, 'mdk-drawer-layout');

        return () => {
            handler.downgradeElement(drawerLayoutNode, 'mdk-drawer-layout');
            drawerLayoutNode?.removeEventListener(EVENT_UPGRADED, updateAttributes)
        }
    }, []);

    useEffect(() => {
        updateAttributes();
    }, [push, fullbleed, hasScrollingRegion, responsiveWidth]);

    return (
        <div
            ref={element}
            data-push={push}
            data-responsive-width={responsiveWidth}
            className="mdk-drawer-layout js-mdk-drawer-layout"
        >
            <div
                id={contentId}
                className={`mdk-drawer-layout__content ${contentClass || ''}`}
            >
                {hasScrollingRegion ?
                    <PerfectScrollbar >
                        {children}
                    </PerfectScrollbar> :
                    <>{children}</>
                }
            </div>
            <Drawer
                ref={ref}
                id={drawerId}
                align={drawerAlign}
                persistent={drawerPersistent}
                contentClass={drawerContentClass}
                opened={drawerOpened}
                classes={drawerClasses}
            >
                {!!renderDrawerContent && renderDrawerContent()}
            </Drawer>
        </div>
    );
})

export default DrawerLayout;