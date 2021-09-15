import React from "react";

interface FromProps {
    approach: string;
    rows: string[][];
    handleClick: Function;
}

export default function Grid({approach, rows, handleClick}: FromProps) {

    return <div>
        <h3>Using {approach} algorithm</h3>
        <table className="grid">
            <tbody>
            {
                rows.map(function (cells: string[], rowIndex: number) {
                    return <tr key={rowIndex}>
                        {
                            cells.map(function (cellClassName: string, colIndex: number) {
                                const key: string = rowIndex + "-" + colIndex;
                                let classNames: string = "cell " + cellClassName;
                                if (cellClassName === "white") {
                                    classNames += " pointer";
                                    return <td key={key} className={classNames}
                                               onClick={() => handleClick(rowIndex, colIndex)}/>
                                }
                                return <td key={key} className={classNames}/>
                            })
                        }
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
}