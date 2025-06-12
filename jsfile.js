const container = document.getElementById('container')


let cells = document.getElementsByClassName('cells')

function grid(){
    makeRows(20);
    makeColumns(20);
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


