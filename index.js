let table = document.querySelector(".table")
let turn = 0;



table.addEventListener("click", (e) =>{
    
    if (e.target.localName === 'td')
   { 
        if (turn === 0 && !e.target.classList.contains('blue')) {
            e.target.setAttribute('class', 'red');
            turn = 1;
        }
        else if(turn === 1 && !e.target.classList.contains('red')) {
            e.target.setAttribute('class', 'blue');
            turn = 0;
        }
    }
})
