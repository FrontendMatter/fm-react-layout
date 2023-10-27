import React, {useEffect, useRef} from "react";
import {HeaderTypes} from "./Header.types";
import 'material-design-kit/src/header/header.scss';
import { handler } from 'dom-factory';
import { headerComponent } from 'material-design-kit';
handler.register('mdk-header', headerComponent);

const EVENT_UPGRADED = 'domfactory-component-upgraded';


const Header = (props: HeaderTypes) => {
    const {
        children,
        fixed = true,
        disabled = false,
        reveals = false,
        condenses = false,
        effects = null,
        headerImage = null,
        headerContentClass= ""
    } = props

    const element = useRef<HTMLDivElement>(null);

    const headerEffects = effects ? (Array.isArray(effects) ? effects : [effects]).join('') : null;

    const updateAttributes = () => {
        const headerNode = (element.current as any);
        const header = headerNode?.mdkHeader;

        header.fixed = fixed;
        header.disabled = disabled;
        header.reveals = reveals;
        header.condenses = condenses;
    }

    const onInitHandler = () => {
        updateAttributes();
        const headerNode = (element.current as any);
        const header = headerNode?.mdkHeader;
        header.eventTarget.addEventListener('scroll', () => onScrollHandler())
    }

    const onScrollHandler = () => {
        //TODO: find you what actually happeds in the vue version.
        console.log("onScrollHandler");
    }

    useEffect(() => {
        const headerNode = (element.current as any)

        headerNode?.addEventListener(EVENT_UPGRADED, onInitHandler);
        handler.upgradeElement(headerNode, 'mdk-header');

        return () => {
            const header = headerNode?.mdkHeader;
            header.eventTarget.addEventListener('scroll', () => onScrollHandler())
            handler.downgradeElement(headerNode, 'mdk-header');
            headerNode?.removeEventListener(EVENT_UPGRADED, onInitHandler);
        }
    }, []);

    useEffect(() => {
        updateAttributes();
    }, [fixed, disabled, reveals, condenses]);

    return (
        <div
            data-effects={headerEffects}
            className="mdk-header js-mdk-header"
            ref={element}
        >
            <div className="mdk-header__bg">
                <div
                    style={{
                        backgroundImage: headerImage
                            ? `url(${headerImage})`
                            : 'none',
                    }}
                    className="mdk-header__bg-front"
                />
            </div>
            <div className={`mdk-header__content ${headerContentClass}`}>
                {!!children ?
                    children :
                    <div data-primary>

                    </div>
                }
            </div>
        </div>
    );
}

export default Header;