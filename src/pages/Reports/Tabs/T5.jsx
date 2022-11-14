
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T5() {
    return (
        <IframeResizer
            log
            src="https://datastudio.google.com/embed/reporting/d1a7eb34-fb55-4e43-9094-1e63377d476f/page/ztZiC"
            style={{ width: '1px', minWidth: '100%', minHeight: '1000px' }}
        />
    )
}
