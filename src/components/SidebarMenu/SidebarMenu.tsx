import React, {useState} from 'react';
import {Item, SidebarMenuProps, SubMenuItem} from "./SidebarMenu.types";
import Collapse from 'react-bootstrap/Collapse';
import './SidebarMenu.scss';
import classNames from "classnames";

const SubMenuItem = (props: SubMenuItem) => {
    const {
        label,
        route,
        active,

    } = props;

    return (
        <li key={label} className={
            classNames('sidebar-menu-item', {
                "active": active,
            })
        }>
            <a href={route} className="sidebar-menu-button">
                <span className="sidebar-menu-text">{label}</span>
            </a>

        </li>
    )
}


const Item = (props: Item) => {
    const {
        id,
        label,
        icon,
        active,
        route,
        children,
    } = props;

    const [open, setOpen] = useState(false);

    return (
        <>
            {
                (children !== undefined && children?.length) ?
                    <li key={id} onClick={(e) => {
                        setOpen(prev => !prev);
                        e.stopPropagation();
                    }} className={
                        classNames('sidebar-menu-item', {
                            "open": open,
                        })
                    }>
                        <a
                            className={"sidebar-menu-button"}
                            href={route}
                            id={id}
                        >
                            <span className="sidebar-menu-text">{label}</span>
                            <span className="sidebar-menu-toggle-icon ms-auto"></span>
                        </a>

                        <Collapse in={open} dimension="height">
                            <ul className="sidebar-submenu">
                                {
                                    children.map(item => (
                                        <SubMenuItem {...item} />
                                    ))
                                }
                            </ul>
                        </Collapse>
                    </li> :
                    <li key={id} className={
                        classNames('sidebar-menu-item', {
                            "active": active,
                        })
                    }>
                        <a
                            className={"sidebar-menu-button"}
                            href={route}
                            id={id}
                        >
                            {!!icon && React.createElement(icon.type, {
                                ...icon.props,
                                className: `sidebar-menu-icon sidebar-menu-icon--left ${icon?.props?.className}`
                            })}
                            <span className="sidebar-menu-text">{label}</span>
                        </a>
                    </li>
            }
        </>
    )
}


const SidebarMenu = (props: SidebarMenuProps) => {

    const {
        items,

    } = props
    console.log(items);

    return (
        <div className="sidebar sidebar-left sidebar-light">
            <ul className="sidebar-menu">
                {
                    items.map(item => (<Item {...item}/>))
                }
            </ul>
        </div>
    );
};

export default SidebarMenu;
