
function startscoring(){
    let randomnumber = Math.floor(Math.random()*100)
    let name = document.getElementById('Name')
    let crushname = document.getElementById('CrushName')
    let list = document.getElementById('listscore')
    let node = document.createElement('li')
    let textnode = document.createTextNode(`${name.value} with ${crushname.value} compatibility score :${randomnumber}%`)
    node.appendChild(textnode)
    list.appendChild(node)
    name.value = ""
    crushname.value = ""
    let score = document.getElementById('score')
    score.innerHTML = `SCORE ${randomnumber}`
}

