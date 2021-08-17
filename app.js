const input = document.querySelector("input")
const btn = document.querySelector('.addtask > button')
btn.addEventListener('click', addToList)
//input.addEventListener('submit',addToList)
function addToList(element){
    const notCompleted = document.querySelector('.notCompleted')
    const Completed = document.querySelector('.Completed')
    const newLi = document.createElement('li')
    const checkbtn = document.createElement('button')
    const delbtn = document.createElement('button')

    checkbtn.innerHTML='<input type="submit" name="" id="" value="Completed">'
    delbtn.innerHTML='<input type="submit" name="" id="" value="Delete">'
    if(input.value !== ''){
        newLi.textContent= input.value
        input.value=''
        notCompleted.appendChild(newLi)
        newLi.appendChild(chekbtn)
    }
    chekbtn.addEventListner('click', function(){
        const parent = this.parentNode;
        parent.remove()
        Completed.appendChild(parent)
        chekbtn.style.display="none"
    })
}