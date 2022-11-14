import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T19() {
    return (
            <IframeResizer
                log
                src="https://datastudio.google.com/embed/reporting/ceb6277c-8fdf-4d63-9202-3b8182ffbd88/page/7uZiC"
                style={{ width: '1px', minWidth: '100%', minHeight: '1000px'}}
            />
    )
}
