export function generateThreeByThree([...values]: string[]): string[][] {
    const firstRow: string[] = [values[0], values[1], values[2]];
    const secondRow: string[] = [values[3], values[4], values[5]];
    const thirdRow: string[] = [values[6], values[7], values[8]];
    return [firstRow, secondRow, thirdRow];
}

export function generateFiveByFive([...values]: string[]): string[][] {
    const firstRow: string[] = [values[0], values[1], values[2], values[3], values[4]];
    const secondRow: string[] = [values[5], values[6], values[7], values[8], values[9]];
    const thirdRow: string[] = [values[10], values[11], values[12], values[13], values[14]];
    const fourthRow: string[] = [values[15], values[16], values[17], values[18], values[19]];
    const fifthRow: string[] = [values[20], values[21], values[22], values[23], values[24]];
    return [firstRow, secondRow, thirdRow, fourthRow, fifthRow];
}