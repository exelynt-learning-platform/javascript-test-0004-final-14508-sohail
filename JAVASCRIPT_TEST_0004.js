function printPattern(n) {
    let size = 2 * n - 1; // grid size = 7

    for (let i = 1; i <= size; i++) {
        let row = "";

        for (let j = 1; j <= size; j++) {

            // distance from each edge
            let top    = i;
            let bottom = size - i + 1;
            let left   = j;
            let right  = size - j + 1;

            // minimum distance from border
            let min = Math.min(top, bottom, left, right);

            row += (n - min + 1) + " ";
        }

        console.log(row.trim());
    }
}

printPattern(4);