const usergiveninput = document.querySelector(".todoinput input")
const addbtn = document.querySelector(".Add")


// To do task addition section
addbtn.addEventListener('click' , () => {
    if(usergiveninput.value == ""){
        alert("Enter Valid Text")
        return
    }
    createtodo()
})

function createtodo(){
    const mainparent = document.querySelector(".todomainsection")
    const parent = document.createElement('div')
    parent.classList.add("works")

    //Inside todo left section
    const namesection = document.createElement('div')
    namesection.classList.add("nametodo")
    const paragraph = document.createElement('p')
    paragraph.textContent = usergiveninput.value
    usergiveninput.value = ""
    namesection.appendChild(paragraph)
    parent.appendChild(namesection)

    //Inside Todo right section
    const deletediv = document.createElement('div')
    deletediv.classList.add("Delete")
    const deletebtn = document.createElement('button')
    deletebtn.classList.add("del-btn")
    deletebtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    deletediv.appendChild(deletebtn)
    parent.appendChild(deletediv)


    mainparent.appendChild(parent)
    crosstodo(deletebtn , parent)


}

//Delete individual todo
function crosstodo(deletebtn , parent){
    deletebtn.addEventListener('click' , () => {
        parent.style.display = "none"
    })
}

// Clear all todo

const clearallbtn = document.querySelector(".ClearAll")
clearallbtn.addEventListener('click', () => {
    console.log("Clicked")
    const alltodo = document.querySelectorAll(".works")
    alltodo.forEach(function(element){
        element.style.display = "none"
    })
})
