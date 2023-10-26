import React, { forwardRef, useRef, useEffect, useImperativeHandle, useState, useCallback } from "react";
import { DrawerProps } from "./Drawer.types";
import 'material-design-kit/src/drawer/drawer.scss';
import { drawerComponent } from 'material-design-kit';
import { handler } from 'dom-factory';
handler.register('mdk-drawer', drawerComponent);

const EVENT_TOGGLE = 'fm::toggle::drawer';
const EVENT_CLOSE = 'fm::close::drawer';
const EVENT_CHANGE = 'mdk-drawer-change';
const EVENT_UPGRADED = 'domfactory-component-upgraded';

const Drawer = forwardRef((props: DrawerProps, ref) => {
  const {
    children,
    id = "default-drawer",
    align = "start",
    persistent = false,
    opened = false,
    classes = null,
    contentClass = null
  } = props;

  const element = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(opened);

  useImperativeHandle(ref, () => ({
    changeVisibility() {
      setShow(prevState => !prevState)
    }
  }))

  const handleToggleEvt = useCallback((target: string) => {
    if (!!target && target !== id) {
      return
    }
    setShow(prevState => !prevState)
  }, [id]);

  const handleCloseEvt = useCallback((target: string) => {
    if (!!target && target !== id) {
      return
    }
    setShow(false)
  }, [id]);

  const onChangeHandler = () => {
    const drawerNode = (element.current as any)
    const drawer = drawerNode?.mdkDrawer;
    if (drawer) {
      setShow(drawer.opened);
    }
  }
  const onInitHandler = () => {
    if (opened) setShow(true)
  }

  useEffect(() => {
    const drawerNode = (element.current as any)

    if (drawerNode) {
      drawerNode?.addEventListener(EVENT_TOGGLE, handleToggleEvt);
      drawerNode?.addEventListener(EVENT_CLOSE, handleCloseEvt);
      drawerNode?.addEventListener(EVENT_CHANGE, onChangeHandler);
      drawerNode?.addEventListener(EVENT_UPGRADED, onInitHandler);
      handler.upgradeElement(drawerNode, 'mdk-drawer');

      return () => {
        handler.downgradeElement(drawerNode, 'mdk-drawer');
        drawerNode?.removeEventListener(EVENT_CHANGE, onChangeHandler);
        drawerNode?.removeEventListener(EVENT_UPGRADED, onInitHandler);
        drawerNode?.removeEventListener(EVENT_TOGGLE, handleToggleEvt);
        drawerNode?.removeEventListener(EVENT_CLOSE, handleCloseEvt);
      }
    }
  }, []);

  useEffect(() => {
    const drawerNode = (element.current as any)
    const drawer = drawerNode?.mdkDrawer;
    if (drawer) {
      drawer[show ? 'open' : 'close']();
      drawer.align = align;
      drawer.persistent = persistent;
    }
  }, [show, align, persistent]);

  return (
    <div
      ref={element}
      id={id}
      data-align={align}
      className="mdk-drawer js-mdk-drawer"
    >
      <div className={`${!!contentClass ? contentClass : ""} mdk-drawer__content`}>
        {children}
      </div>
    </div>
  );
})

export default Drawer;