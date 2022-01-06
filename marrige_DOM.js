const marrigeButton = document.querySelector('#marrigeButton');
const marrigeName = document.querySelector('#marrigeName')
const marrigeYear = document.querySelector('#marrigeYear')
const marrigeGender = document.querySelector('#marrigeGender')
const marrigeResult = document.querySelector('#marrigeResult')

marrigeButton.addEventListener('click', (e) =>{

    e.preventDefault();

    marrigeResult.innerHTML = fullMarrige(marrigeName.value, marrigeYear.value, marrigeGender.value)


})