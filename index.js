const score = 10;
let array = new Array(score);
    function fillMatrix() {
        for (let i = 0; i < score; ++i) {
            array[i] = new Array(score);
            for (let j = 0; j < score; ++j) {
                array[i][j] = i * 10 + j + 1;
            }
        }
    }
    function showMatrix() {
        for (let i = 0; i < score; ++i) {
            for (let j = 0; j < score; ++j) {
                    document.write(array[i][j] + " ");
            }
            document.write("<br />");
        }
    }
fillMatrix();
showMatrix();