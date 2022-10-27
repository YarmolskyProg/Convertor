import React from "react";

function Header({ data }) {
    return (
        <div>
            <p>USD - {data.rates.UAH.toFixed(3)} </p>
            <p>EUR - {(1 / data.rates.EUR * data.rates.UAH).toFixed(3)}</p>
        </div>
    )
}
export default Header