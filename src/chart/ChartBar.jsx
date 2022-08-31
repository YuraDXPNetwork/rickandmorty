import React from "react";
import Amount from "./Amount";
import Bar from "./Bar";
import "./ChartBar.css";

export default function ChartBar({ characters }) {
    return (
        <div className="chart-bar">
            <Amount />
            <Bar characters={characters} />
        </div>
    );
}
