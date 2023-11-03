import React, {useEffect, useRef} from "react";
import {handler} from 'dom-factory';
import {headerLayoutComponent} from 'material-design-kit';
handler.register('mdk-header-layout', headerLayoutComponent);
import Header from "../Header";
import "material-design-kit/src/header-layout/header-layout.scss"
import {HeaderLayoutProps} from "./HeaderLayout.types";

const EVENT_UPGRADED = 'domfactory-component-upgraded';

export const HeaderLayout = (props: HeaderLayoutProps) => {
  const {
    children,
    headerFixed = false,
    headerDisabled = false,
    headerReveals = false,
    headerCondenses = false,
    headerEffects = "",
    headerImage = null,
    headerContentClass = "",
    headerClasses = "",
    renderHeaderContent,
    contentId ,
    contentClass = "",
    fullbleed = false,
  } = props;

  const element = useRef<HTMLDivElement>(null);

  const onInitHandler = () => {
    const headerLayoutNode = (element.current as any)
    const headerLayout = headerLayoutNode.mdkHeaderLayout;
    headerLayout.fullbleed = fullbleed;
    headerLayout._reset();
  }

  useEffect(() => {
    const headerLayoutNode = (element.current as any)

    headerLayoutNode?.addEventListener(EVENT_UPGRADED, onInitHandler)
    handler.upgradeElement(headerLayoutNode, 'mdk-header-layout');

    return () => {
      handler.downgradeElement(headerLayoutNode, 'mdk-header-layout');
      headerLayoutNode?.removeEventListener(EVENT_UPGRADED, onInitHandler)
    }
  }, []);

  useEffect(() => {
    const headerLayoutNode = (element.current as any)
    const headerLayout = headerLayoutNode.mdkHeaderLayout;
    headerLayout.fullbleed = fullbleed;
  }, [fullbleed]);

  return (
    <div
      ref={element}
      className="mdk-header-layout js-mdk-header-layout"
    >
      <Header
        fixed={headerFixed}
        disabled={headerDisabled}
        reveals={headerReveals}
        condenses={headerCondenses}
        effects={headerEffects}
        headerImage={headerImage}
        headerContentClass={headerContentClass}
        classes={headerClasses}
      >
        {!!renderHeaderContent && renderHeaderContent()}
      </Header>

      <div
        className={`mdk-header-layout__content ${contentClass}`}
        id={contentId}
        style={{height: fullbleed ? '100%' : ''}}
      >
        {children}
      </div>
    </div>
  );
};

export default HeaderLayout;
