// game logic
let boxes=Array.from(document.getElementsByClassName('box'))
let replay=document.getElementsByClassName("Replay")
let gameover=false

let music=new Audio("mixkit-video-game-win-2016.wav")
let audioturn=new Audio("mixkit-space-coin-win-notification-271.wav")
let turn="X"

let spaces=Array(9).fill(null)

// function to change turn
let changeturn= (e) =>{
    const id=e.target.id
    if(gameover){return;}
    if(!spaces[id]){
        spaces[id]=turn;
        e.target.innerText=turn;
        audioturn.play();
        if(checkwin()){
            document.getElementsByClassName('display')[0].innerText="Player "+ turn +" Has Won."
            music.play();
        }
        turn = turn == "X" ? "O" : "X";
        document.getElementsByClassName('gameinfo')[0].innerText='Player '+ turn +' Turn.'
        
    }
}
//function to check for win
const checkwin=()=>{
    const wincombos =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for (const win of wincombos) {
        let[a,b,c]=win
        if(spaces[a] && spaces[a]==spaces[b] && spaces[a]==spaces[c]){
            gameover=true
            return true
        }
    }
    return false
    boxes.forEach(box=>box.removeEventListener('click',changeturn))


}

const startgame=() =>{
    boxes.forEach(box=>box.addEventListener('click',changeturn))

}

replay[0].addEventListener('click', ()=>{
    spaces.fill(null)
    boxes.forEach(box=>{
        box.innerText='';
    })
    turn='X';
    document.getElementsByClassName('gameinfo')[0].innerText='Player X Turn.'
})

startgame()