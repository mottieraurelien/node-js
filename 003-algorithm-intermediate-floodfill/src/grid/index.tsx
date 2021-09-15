import React from "react";

interface FromProps {
    rows: string[][];
    handleClick: Function;
}

export default function Grid({rows, handleClick}: FromProps) {

    return <table className="grid">
        <tbody>
        {
            rows.map(function (cells: string[], rowIndex: number) {
                return <tr key={rowIndex}>
                    {
                        cells.map(function (cellClassName: string, colIndex: number) {
                            const key: string = rowIndex + "-" + colIndex;
                            let classNames: string = "cell " + cellClassName;
                            if (cellClassName === "grey") return <td key={key} className={classNames}/>
                            classNames += " pointer";
                            return <td key={key} className={classNames}
                                       onClick={() => handleClick(rowIndex, colIndex)}/>
                        })
                    }
                </tr>
            })
        }
        </tbody>
    </table>
}