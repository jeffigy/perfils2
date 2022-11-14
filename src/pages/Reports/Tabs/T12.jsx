
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T12() {
    return (
            <IframeResizer
                log
                src="https://datastudio.google.com/embed/reporting/1bb77f0e-8cc7-4f95-b1bf-4f09e5e67632/page/nuZiC"
                style={{ width: '1px', minWidth: '100%', minHeight: '1000px'}}
            />
    )
}
