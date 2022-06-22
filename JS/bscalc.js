document.getElementById("calc").onclick = function() {
    let diagonalLength = document.getElementById("DiagonalLength").value;
    let sideLength = document.getElementById("SideLength").value;
    let area = (Number(sideLength)*Number(sideLength))-(2*(Number(diagonalLength)*Number(diagonalLength)));
    if (Boolean(String(diagonalLength)) || Boolean(String(sideLength)) === truw) {
        document.getElementById("calcOutput").innerHTML = "The area is " + area;
    }
    else {
        document.getElementById("calcOutput").innerHTML = "<i>Sorry sideLength or diagonalLength cannot be blank.</i>";
    }
}