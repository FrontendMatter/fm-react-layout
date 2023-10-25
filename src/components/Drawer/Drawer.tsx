import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";

import {DrawerProps} from "./Drawer.types";
import "./Drawer.css";
//@ts-ignore
import {drawerComponent} from 'material-design-kit';
//@ts-ignore
import {handler} from 'dom-factory';

// Events we listen to on $root
const EVENT_TOGGLE = 'fm::toggle::drawer';
const EVENT_CLOSE = 'fm::close::drawer';

const Drawer = forwardRef((props: DrawerProps, ref) => {
    const {
        children,
        id = "default-drawer",
        align = "start",
        persistent = false,
        opened = false,
        classes = null,
        contentClass = null,
    } = props;
    const [show, setShow] = useState(opened);
    console.log(opened, show)
    console.log(document.querySelector('.js-mdk-drawer')?.mdkDrawer)

    useImperativeHandle(ref, () => ({
        changeVisibility () {
            console.log("using this wow")
            setShow(prevState => !prevState)
        }
    }))


    const onChangeHandler = () => {
        console.log("onChangeHandler")
        const drawer = document.querySelector('.js-mdk-drawer')?.mdkDrawer;
        if(drawer) {
            setShow(drawer.opened);
        }
    }
    const onInitHandler = () => {
        console.log("onInitHandler")
        if (opened) setShow(true)
    }

    const handleToggleEvt = (target) => {
        console.log("handleToggleEvt")
        if (!!target && target !== id) {
            return
        }
        setShow(prevState => !prevState)
    }

    const handleCloseEvt = (target) => {
        console.log("handleCloseEvt")
        if (!!target && target !== id) {
            return
        }
        setShow(false)
    }

    useEffect(() => {
        const drawerNode = document.querySelector('.js-mdk-drawer')
        console.log("drawer")
        console.log(drawerNode?.mdkDrawer);

        handler.register('mdk-drawer', drawerComponent);

        drawerNode?.addEventListener(EVENT_TOGGLE, handleToggleEvt)
        drawerNode?.addEventListener(EVENT_CLOSE, handleCloseEvt)

        drawerNode?.addEventListener('mdk-drawer-change', () => onChangeHandler())
        drawerNode?.addEventListener('domfactory-component-upgraded', () => onInitHandler())

        handler.upgradeElement(drawerNode, 'mdk-drawer')

        return () => {
            const drawerNode = document.querySelector('.js-mdk-drawer')
            handler.downgradeElement(drawerNode, 'mdk-drawer')
            drawerNode?.removeEventListener('mdk-drawer-change', () =>
                onChangeHandler()
            )
            drawerNode?.removeEventListener('domfactory-component-upgraded', () =>
                onInitHandler()
            )
        }
    }, []);

    useEffect(() => {
        const drawer = document.querySelector('.js-mdk-drawer')?.mdkDrawer;
        console.log("show useEffect")
        console.log(drawer)
        if(drawer) {
            console.log(`calling: ${show ? 'open' : 'close'}`)
            drawer[show ? 'open' : 'close']();
        }
    }, [show]);

    useEffect(() => {
        const drawer = document.querySelector('.js-mdk-drawer')?.mdkDrawer;
        drawer.align = align;
    }, [align])

    return (
        <>
            <div
                id={id}
                data-align={align}
                className="mdk-drawer js-mdk-drawer"
            >
                <div className={`${!!contentClass ? contentClass : ""} mdk-drawer__content`}>
                    {children}
                </div>
            </div>
        </>
    );
})


export default Drawer;