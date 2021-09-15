import React, {useEffect, useState} from "react";
import Grid from "../grid";
import useGridFiller from "../grid/useGridFiller";
import fillUsingBfs from "./bfs";
import fillUsingDfs from "./dfs";

export default function Floodfill() {

    const [size] = useState<number>(50);

    const bfsGrid: string[][] = useGridFiller(size);
    const dfsGrid: string[][] = useGridFiller(size);

    const [bfsRows, setBfsRows] = useState<string[][]>([]);
    const [dfsRows, setDfsRows] = useState<string[][]>([]);

    useEffect(() => {
        if (bfsRows.length === 0) setBfsRows(bfsGrid);
    }, [bfsRows, bfsGrid]);

    useEffect(() => {
        if (dfsRows.length === 0) setDfsRows(dfsGrid);
    }, [dfsRows, dfsGrid]);

    const handleClickBfs = (rowIndex: number, colIndex: number) => {
        const newBfsRows = [...bfsRows];
        fillUsingBfs(newBfsRows, rowIndex, colIndex);
        setBfsRows(newBfsRows);
    }

    const handleClickDfs = (rowIndex: number, colIndex: number) => {
        const newDfsRows = [...dfsRows];
        fillUsingDfs(newDfsRows, rowIndex, colIndex);
        setDfsRows(newDfsRows);
    }

    return <div className="container">
        <Grid approach="Breadth-First-Search" rows={bfsRows} handleClick={handleClickBfs}/>
        <Grid approach="Depth-First-Search" rows={dfsRows} handleClick={handleClickDfs}/>
    </div>

}