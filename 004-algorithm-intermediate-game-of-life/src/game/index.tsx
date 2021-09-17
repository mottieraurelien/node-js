import React, {useEffect, useState} from "react";
import useGameOfLifeGridRandomFiller from "../structure/filler";
import Grid from "../structure/grid";
import Row from "../structure/row";
import Cell from "../structure/cell";

export default function GameOfLife() {

    const rows: Row[] = useGameOfLifeGridRandomFiller(200);

    const [grid, setGrid] = useState<Grid>();

    /**
     * Populates the grid with random living cells when rendering for the first time.
     * We could have used famous patterns but it was easier to generate the grid randomly.
     */
    useEffect(() => {
        if (rows) setGrid(new Grid(rows));
    }, [rows]);

    /**
     * Every 500ms, there is a new cells generation.
     */
    useEffect(() => {
        if (!grid) return;
        const interval = setInterval(() => {
            const newGrid: Grid = grid.next();
            setGrid(newGrid);
        }, 500);
        return () => {
            clearInterval(interval);
        };
    }, [grid]);

    return <div className="container">
        <h3>Conway's Game Of Life</h3>
        {grid && <table className="grid">
            <tbody>
            {
                grid.getRows().map(function (row: Row, rowIndex: number) {
                    return <tr key={rowIndex}>
                        {
                            row.getCells().map(function (cell: Cell, colIndex: number) {
                                const key: string = rowIndex + "-" + colIndex;
                                const classNames: string = "cell " + (cell.isAlive() ? "alive" : "dead");
                                return <td key={key} className={classNames}/>
                            })
                        }
                    </tr>
                })
            }
            </tbody>
        </table>
        }
    </div>

}