import {useEffect, useState} from "react";
import Cell from "../cell";
import Row from "../row";

export default function useGameOfLifeGridFiller(size: number) {

    const [rows, setRows] = useState<Row[]>([]);

    useEffect(() => {
        function initialize() {
            const newRows: Row[] = [];
            for (let i = 0; i < size; i++) {
                const row: Row = new Row([], i);
                for (let j = 0; j < size; j++) {
                    // To generate only few living cells (Math.random() is between 0 and 1) :
                    const alive: boolean = Math.random() >= 0.95;
                    row.add(new Cell(alive, i, j));
                }
                newRows.push(row);
            }
            setRows(newRows);
        }

        initialize();
    }, [size])

    return rows;
}
