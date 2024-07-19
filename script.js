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
    const input = document.createElement('input')
    //Edit functionality
    namesection.appendChild(input)
    input.style.display = 'none'
    namesection.appendChild(paragraph)
    parent.appendChild(namesection)

    //Edit button
    const edit_btn = document.createElement('div')
    edit_btn.classList.add('edit-btn')
    //Inside Todo right section
    const deletediv = document.createElement('div')
    deletediv.classList.add("Delete")
    const deletebtn = document.createElement('button')
    deletebtn.classList.add("del-btn")
    edit_btn.innerHTML = '<i class="fa-solid fa-pencil"></i>'
    deletebtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    deletediv.appendChild(edit_btn)
    deletediv.appendChild(deletebtn)
    parent.appendChild(deletediv)


    mainparent.appendChild(parent)

    edit_btn.addEventListener('click' , (event) => {
        if(input.style.display == "none"){
            input.value = namesection.textContent
            namesection.textContent = ""
            input.style.display = "block"
            namesection.appendChild(input)
            edit_btn.innerHTML = '<i class="fa-solid fa-download"></i>'
        }
        else{
            namesection.textContent = input.value
            input.style.display = "none"
            edit_btn.innerHTML = '<i class="fa-solid fa-pencil"></i>'
        }
    })
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

