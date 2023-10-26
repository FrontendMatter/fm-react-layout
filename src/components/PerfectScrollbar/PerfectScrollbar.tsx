import React, {useEffect, useRef} from 'react';
import {PerfectScrollbarTypes} from "./PerfectScrollbar.types";
import PerfectScrollbar from 'perfect-scrollbar';
import "perfect-scrollbar/css/perfect-scrollbar.css";

const PerfectScrollbarComponent = (props: PerfectScrollbarTypes) => {
    const {
        children,
        settings = {},
        tag= "div",
        wheelPropagation = false,
    } = props

    const element = useRef<HTMLElement>(null);
    let ps: PerfectScrollbar | null;

    useEffect(() => {
        const scrollbar = (element.current as any);

        ps = new PerfectScrollbar(scrollbar, {
            ...settings,
            wheelPropagation
        })

        return () => {
            ps?.destroy();
            ps = null;
        }
    }, []);

    return (
        <>
            <div>
                Hello
            </div>
            {React.createElement(tag, {
                ref: element,
                style: {position: "relative", height: '100%'}
            }, children
            )}
        </>
    )
};

export default PerfectScrollbarComponent;
