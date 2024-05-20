
window.addEventListener('load', function () {
    document.getElementById("myDIV").style.display = "none";
  })


let a=[0,0,0,0,0,0,0,0,0,"player 1"];
let b=[0,0,0,0,0,0,0,0,0,"player 2"];
let playerChance=true;
let win=false;
const myCollection = document.getElementsByTagName("div");

function myfun1(num) {
    if (!win) {
   
        if (playerChance) {
            if (b[num]==0) {
                myCollection[num].style.backgroundColor = "#BFD641";
                playerChance=false;
                a[num]=1; 
            }
        

        if (a[0]===1 && a[3]===1 && a[6]===1 ||a[1]===1 && a[4]===1 && a[7]===1 || a[2]===1 && a[5]===1 && a[8]===1 || a[0]===1 && a[4]===1 && a[8]===1  ||a[2]===1 && a[4]===1 && a[6]===1   ||a[0]===1 && a[1]===1 && a[2]===1||a[3]===1 && a[4]===1 && a[5]===1||a[6]===1 && a[7]===1 && a[8]===1) {
            document.getElementById("myDIV").style.display = "block";
            document.getElementById("myDIV").innerHTML="<h1>PLAYER 1 WIN'S</h1>";
            win=true;
        }
    }else{
        if (a[num]==0) {
            myCollection[num].style.backgroundColor = "blue";
            playerChance=true;
            b[num]=1; 
        }

        if (b[0]===1 && b[3]===1 && b[6]===1 ||b[1]===1 && b[4]===1 && b[7]===1 || b[2]===1 && b[5]===1 && b[8]===1 || b[0]===1 && b[4]===1 && b[8]===1  ||b[2]===1 && b[4]===1 && b[6]===1 ||b[0]===1 && b[1]===1 && b[2]===1||b[3]===1 && b[4]===1 && b[5]===1||b[6]===1 && b[7]===1 && b[8]===1) {
            document.getElementById("myDIV").style.display = "block";
            document.getElementById("myDIV").innerHTML="<h1>PLAYER 2 WIN'S</h1>";
            win=true;
        }
    } 
}
}


