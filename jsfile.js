const container = document.getElementById('container')
let cells = document.getElementsByClassName('cells')

let sizes = ''

function grid(){
    makeRows(sizes);
    makeColumns(sizes);
}

function makeRows(rowsNums){
    for(let i = 0; i < rowsNums; i++){
        let row = document.createElement('div')
        container.appendChild(row).className = "gridRow"
    }
}

function makeColumns(cellNums){
    let rows = document.getElementsByClassName('gridRow')
    for(let i = 0; i < rows.length; i++){
        for(let j = 0 ; j < cellNums ; j++){
            let columns = document.createElement('div')
            rows[i].appendChild(columns).className = 'cells'
        }
    }
}

grid()

let mode = ''

let draw = document.getElementById('drawbtn')

draw.addEventListener('click',function(){
    mode = 'draw'
})

let erase = document.getElementById('erasebtn')

erase.addEventListener('click',function(){
    mode = 'erase'
})



for(let i = 0; i < cells.length;i++){
    cells[i].addEventListener('mouseover' , function(){
        if(mode === 'draw'){
            cells[i].style.background = 'black'
        }else if(mode === 'erase'){
            cells[i].style.background = 'white'
        }
    })
}

let input = document.getElementById('gridSize')
let button = document.getElementById('makeGridBtn')



button.addEventListener('click', function(){
    const size = input.value
    sizes = size

    container.innerHTML = ""

    grid()

    let cells = document.getElementsByClassName('cells')
    for(let i = 0; i < cells.length;i++){
    cells[i].addEventListener('mouseover' , function(){
        if(mode === 'draw'){
            cells[i].style.background = 'black'
        }else if(mode === 'erase'){
            cells[i].style.background = 'white'
        }
    })
}

})

