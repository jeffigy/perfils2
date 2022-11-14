
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T1() {
    return (
            <IframeResizer
                log
                src="https://datastudio.google.com/embed/reporting/67c2dd24-eca5-4bb5-b37d-ecf059290e5d/page/KvZiC"
                style={{ width: '1px', minWidth: '100%', minHeight: '1000px'}}
            />
    )
}
