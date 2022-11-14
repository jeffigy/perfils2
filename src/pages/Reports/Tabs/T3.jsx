
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T3() {
    return (
            <IframeResizer
                log
                src="https://datastudio.google.com/embed/reporting/5a59d3b1-e949-4baf-8cc1-13a7e6261fe9/page/ktZiC"
                style={{ width: '1px', minWidth: '100%', minHeight: '1000px'}}
            />

    )
}
