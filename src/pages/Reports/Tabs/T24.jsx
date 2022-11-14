
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T1() {
    return (
        <IframeResizer
            log
            src="https://datastudio.google.com/embed/reporting/f8be53e4-f2c6-4f19-b001-1fbf8cd321f8/page/pvZiC"
            style={{ width: '1px', minWidth: '100%', minHeight: '1000px' }}
        />
    )
}
