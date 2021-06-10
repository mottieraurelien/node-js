import React, {useEffect, useState} from "react";
import useGridFiller from "../structure/grid/useGridFiller";
import DepthFirstSearchFiller from "../algo/dfs";
import BreadthFirstSearchFiller from "../algo/bfs";
import Grid from "../structure/grid";
import Queue from "../structure/data/queue";
import Cell from "../structure/cell";
import Filler from "../algo/filler";

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
        const cell: Cell = new Cell("white", rowIndex, colIndex);
        const filler: Filler = new BreadthFirstSearchFiller(bfsRows, new Queue());
        const newBfsRows = filler.fillFrom(cell);
        setBfsRows(newBfsRows);
    }

    const handleClickDfs = (rowIndex: number, colIndex: number) => {
        const cell: Cell = new Cell("white", rowIndex, colIndex);
        const filler: Filler = new DepthFirstSearchFiller(dfsRows);
        const newDfsRows = filler.fillFrom(cell);
        setDfsRows(newDfsRows);
    }

    return <div className="container">
        <Grid approach="Breadth-First-Search" rows={bfsRows} handleClick={handleClickBfs}/>
        <Grid approach="Depth-First-Search" rows={dfsRows} handleClick={handleClickDfs}/>
    </div>

}