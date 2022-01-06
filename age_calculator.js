let button = document.querySelector('#button')

let name = document.querySelector("#name")
let year = document.querySelector("#year")

let result = document.querySelector('#result')

button.addEventListener('click', () => {



    if(name.value == '' || year.value == ''){
        result.innerHTML = `<p class="alert alert-danger">All Filed Are Requerd !</p>`
    }else{

    result.innerHTML = ageCale(name.value, year.value)

    name.value = '';
    year.value = '';
}

})