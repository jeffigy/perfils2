
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T9() {
    return (
            <IframeResizer
                log
                src="https://datastudio.google.com/embed/reporting/6e291de1-1a86-42b9-ba34-08bf747d5069/page/OuZiC"
                style={{ width: '1px', minWidth: '100%', minHeight: '1000px'}}
            />

    )
}
