const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const max = (array) => {
    let maxValue = array[0][0];

    for (const i of array) {
        for (const j of i) {
            if (j > maxValue) maxValue = j
        }
    }

    return maxValue;
}

