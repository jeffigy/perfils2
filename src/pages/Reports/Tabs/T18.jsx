
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T2() {
    return (
            <IframeResizer
                log
                src=""
                style={{ width: '1px', minWidth: '100%', minHeight: '1000px'}}
            />
    )
}
