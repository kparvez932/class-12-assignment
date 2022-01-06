const currenccy = document.querySelector('#currency')
const buttons = document.querySelector('#buttons')
const results = document.querySelector('#results')
const intiput = document.querySelector('#intiput')
const fotter = document.querySelector('#fotter')



const usd = document.querySelector('#usd')
const toCuntry = document.querySelector('#toCuntry')
const indian = document.querySelector('#indian')


buttons.addEventListener('click', (e) => {

    e.preventDefault();

    if(currenccy.value == '' || intiput.value == ''){
        fotter.innerHTML = `<h6 class='alert alert-danger'>Al Currency Field Are Required !</h6>`
    }else{
        results.innerHTML = currencey(currenccy.value, intiput.value)
        fotter.innerHTML = ``
    }


    


})