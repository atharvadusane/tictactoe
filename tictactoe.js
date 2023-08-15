console.log("hello")

const audioTurn= new Audio("turn.mp3")
let boxes= document.getElementsByClassName("box")
const turnText= document.getElementById("turn")
turn="X"
gameover=false;

const changeTurn = () =>{
    if(turn==="X"){
        return "O"
    }
    else{
        return "X"
    }
    // return "X"?"O":"X"
}

const checkWin=()=>{
    const wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let boxtext=document.getElementsByClassName("boxtext")
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.getElementById("turn").innerText="Player "+boxtext[e[0]].innerText+" won!"
            gameover=true;
            document.querySelector('.gameWon').getElementsByTagName('img')[0].style.width="200px"
            document.querySelector('.playerinfo').getElementsByTagName('span')[0].style.fontSize="30px"
        }
    })
}


// use queryselector for accessing the classes
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn=changeTurn()
            audioTurn.play()
            checkWin();
            if(!gameover){
                document.getElementById("turn").innerText="Player "+ turn +" turn"
            }
        }
    })
})

