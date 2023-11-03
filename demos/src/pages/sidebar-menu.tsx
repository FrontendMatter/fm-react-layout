//@ts-ignore
import {DrawerLayout} from "fm-react-layout";
import {useRef} from "react";
import DrawerLayoutContent from "./drawer-layout-content";
import "./styles/sidebar-menu.scss";

const BasicDrawerLayout = () => {
  const childRef = useRef<{ changeVisibility: () => void }>(null);

  return (
    <DrawerLayout
      ref={childRef}
      renderDrawerContent={() => (
        <>
          <div className="sidebar sidebar-left sidebar-dark bg-dark">
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item active">
                <a href="#" className="sidebar-menu-button">Active menu item</a>
              </li>

              <li className="sidebar-menu-item">
                <a href="#" className="sidebar-menu-button">Regular menu item</a>
              </li>

              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sidebar-menu-icon sidebar-menu-icon--left">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  
                  Menu button text
                </a>
              </li>

              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="#">
                  <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">home</i> 
                  
                  Menu button text
                </a>
              </li>

              <li className="sidebar-menu-item open">
                <a href="#" className="sidebar-menu-button">
                  Dashboard
                  <span className="sidebar-menu-toggle-icon ms-auto"></span>
                </a>

                <ul className="sidebar-submenu">
                  <li className="sidebar-menu-item active">
                    <a href="#" className="sidebar-menu-button">Active menu item</a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a href="#" className="sidebar-menu-button">Regular menu item</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="sidebar sidebar-left sidebar-light">
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item active">
                <a href="#" className="sidebar-menu-button">Active menu item</a>
              </li>

              <li className="sidebar-menu-item">
                <a href="#" className="sidebar-menu-button">Regular menu item</a>
              </li>

              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sidebar-menu-icon sidebar-menu-icon--left">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  
                  Menu button text
                </a>
              </li>

              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="#">
                  <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">home</i> 
                  
                  Menu button text
                </a>
              </li>

              <li className="sidebar-menu-item open">
                <a href="#" className="sidebar-menu-button">
                  Dashboard
                  <span className="sidebar-menu-toggle-icon ms-auto"></span>
                </a>

                <ul className="sidebar-submenu">
                  <li className="sidebar-menu-item active">
                    <a href="#" className="sidebar-menu-button">Active menu item</a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a href="#" className="sidebar-menu-button">Regular menu item</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </>
      )}>
      <DrawerLayoutContent childRef={childRef}/>
    </DrawerLayout>
  );
}

export default BasicDrawerLayout;