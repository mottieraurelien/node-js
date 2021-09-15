import {useEffect, useState} from "react";

export default function useGridFiller(size: number) {

    const [rows, setRows] = useState<string[][]>([]);

    useEffect(() => {
        function initialize() {
            const newRows: string[][] = [];
            const colors = ["grey", "white"];
            for (let i = 0; i < size; i++) {
                const row: string[] = [];
                for (let j = 0; j < size; j++) {
                    const rnd: number = Math.round(Math.random());
                    row.push(colors[rnd]);
                }
                newRows.push(row);
            }
            setRows(newRows);
        }

        initialize();
    }, [size])

    return rows;
}
