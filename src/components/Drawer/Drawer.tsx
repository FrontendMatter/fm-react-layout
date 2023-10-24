import React, {FC} from "react";

import {DrawerProps} from "./Drawer.types";
import "./Drawer.css";

const Drawer: FC<DrawerProps> = ({children}) => (
  <div data-testid="Drawer" className="Drawer">
    This is the beautiful Drawer
    {children}
  </div>
);

export default Drawer;