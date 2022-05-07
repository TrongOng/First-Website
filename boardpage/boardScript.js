
window.onload=function() {
    const redPiece = document.getElementsByClassName(".redPiece").addEventListener("click", clicked);
    const blackPiece = document.querySelector(".blackPiece").addEventListener("click", clicked);
    const spans = document.querySelectorAll("span").addEventListener("click", clicked);

    function clicked() {
        alert("Under Construction");
        console.log("Under Construction");
    }
    
}


/*
    function redClick() {
        redPiece.addEventListener("click", e => {
            console.log("red clicked")
        })
    }
    function blackClick() {
        blackPiece.addEventListener("click", e => {
            console.log("black clicked")
        })
    }

    spans.forEach(span => {
        span.addEventListener("click", () => {
            if (redClick()) {
                console.log("true red");
            }
            else if (blackClick()) {
                console.log("true black");
            }
        })
    })
*/
/*
    if (spans.forEach(item => {
        span.addEventListener("click", () => {
            if(redPiece.addEventListener("click", e => {
                console.log("red clicked")
            }))
            else if(blackPiece.addEventListener("click", e => {
                console.log("black clicked")
            }))
        })
    }))

}
*/



//row + column
/*
var initBoard = [
    [0, 1, 0, 3, 0, 5, 0, 7],
    [8, 0, 10, 0, 12, 0, 14, 0],
    [0, 17, 0, 19, 0, 21, 0, 23],
    [24, 0, 26, 0, 28, 0, 30, 0],
    [0, 33, 0, 35, 0, 37, 0, 39],
    [40, 0, 42, 0, 44, 0, 46, 0],
    [0, 49, 0, 51, 0, 53, 0, 55],
    [56, 0, 58, 0, 60, 0, 62, 0],   
];
var newBoard = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],   
];
//add eventListener element.addEventListener(event, function, useCapture);
/*
for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
        if(newBoard[y][x] == "r") {
            console.log("okay");
        }
        else if(newBoard[y][x] == "0") {
            console.log("false");
        }
    }
}
*/


