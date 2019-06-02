let nSquares=16;
const containerWidth=500;
const containerHeight=500;
let titleHalf1="ETCH A";
let titleHalf2="SKETCH";
createTitle(titleHalf1,title1);
createTitle(titleHalf2,title2);
let opacity=0.1;

createGrid(nSquares);
clearButton.addEventListener("click",clear);
changeGridButton.addEventListener("click",newGrid);

function createGrid(num){
    for(i=1;i<=(num**2);i++){
        let div=document.createElement("div");
        div.style.width=`${containerWidth/num}px`;
        div.style.height=`${containerHeight/num}px`;
        container.appendChild(div);
        div.addEventListener('mouseover',paint)
    }
}

function paint(e){
    e.target.classList.add("on");
    switch(modeSelect.value){
        case "classic":
            e.target.style.background="black";
            e.target.style.opacity=1;
            break;
        case "brush":
            e.target.style.background="black";
            let opacity=Number(e.target.style.opacity);
            opacity+=0.1;
            e.target.style.opacity=opacity;
            break;
        case "random":
            e.target.style.background="rgb("+Math.random()*255+", "+Math.random()*255+", "+Math.random()*255+")";
            e.target.style.opacity=1;
            break;
    }
}

function clear(e){
    const colored=Array.from(document.querySelectorAll(".on"));
    colored.forEach(element => {element.style.background=""; element.classList.remove("on");});
    opacity=0.1;
}

function newGrid(e){
    let newTiles=prompt("Insert number of square per side:");
    console.log(newTiles);
    let div=Array.from(document.querySelectorAll("#container div"));
    div.forEach(elem =>{elem.remove();});
    createGrid(newTiles);
}

function createTitle(string,column){
    stringArray=string.split("");
    stringArray.forEach(function(letter){const div=divLetter(letter); column.appendChild(div)});
}

function divLetter(letter){
    let div=document.createElement("div");
    div.classList.add("titleLetter");
    div.innerHTML=letter;
    return div;
}