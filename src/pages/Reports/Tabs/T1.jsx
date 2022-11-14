import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T1() {
    return (
            <IframeResizer
                log
                src="https://datastudio.google.com/embed/reporting/9cc0c45b-b9b7-468e-8503-0533563a2791/page/s7diC"
                style={{ width: '1px', minWidth: '100%', minHeight: '1000px'}}
            />
    )
}
