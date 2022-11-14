
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T1() {
    return (
            <IframeResizer
                log
                src="https://datastudio.google.com/embed/reporting/6aab0696-1687-4893-b8f0-7e45bc6d0505/page/gvZiC"
                style={{ width: '1px', minWidth: '100%', minHeight: '1000px'}}
            />
    )
}
