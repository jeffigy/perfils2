
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T14() {
    return (
            <IframeResizer
                log
                heightCalculationMethod="lowestElement"
                src="https://datastudio.google.com/embed/reporting/02facce3-bc3b-4fce-b71e-7d7a874ac0fe/page/GmYiC"
                style={{ width: '1px', minWidth: '100%', minHeight: '1000px' }}

            />

    )
}
