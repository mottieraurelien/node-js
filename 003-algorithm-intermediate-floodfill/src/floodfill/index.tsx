import React, {useState} from "react";
import Grid from "../grid";
import useGridFiller from "../grid/useGridFiller";

export default function Floodfill() {

    const [size] = useState<number>(50);
    const {rows, setRows} = useGridFiller(size);

    const handleClickUsingBreadthFirstSearch = (rowIndex: number, colIndex: number) => {
        const newRows = [...rows];
        fillUsingBreadthFirstSearch(newRows, rowIndex, colIndex);
        setRows(newRows);
    }

    const handleClickUsingDepthFirstSearch = (rowIndex: number, colIndex: number) => {
        const newRows = [...rows];
        fillUsingDepthFirstSearch(newRows, rowIndex, colIndex);
        setRows(newRows);
    }

    function fillUsingBreadthFirstSearch(newRows: string[][], rowIndex: number, colIndex: number) {
        newRows[rowIndex][colIndex] = "light-grey"
    }

    function fillUsingDepthFirstSearch(newRows: string[][], rowIndex: number, colIndex: number) {
        newRows[rowIndex][colIndex] = "light-grey"
    }

    return <div className="container">
        <Grid approach="Breadth-First-Search" rows={rows} handleClick={handleClickUsingBreadthFirstSearch}/>
        <Grid approach="Depth-First-Search" rows={rows} handleClick={handleClickUsingDepthFirstSearch}/>
    </div>

}