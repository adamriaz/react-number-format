import React from 'react';
import { NumericFormat } from 'react-number-format';

export default function RenderText() {
    return (
        <>
            <div>
                <NumericFormat
                    value={1231231}
                    thousandsGroupStyle="lakh"
                    thousandSeparator=","
                    displayType="text"
                    renderText={(value) => <b>{value}</b>}
                />
            </div>
        </>
    )
}