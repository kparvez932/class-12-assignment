function fullMarrige(marrigeName, marrigeYear, marrigeGender){

    let date = new Date();
    ages = date.getFullYear() - marrigeYear;
    let genderFunction = gender(ages)
    return`<h6 class='alert alert-${genderFunction.status}'>Hi ${marrigeName} You are ${ages} old & You ${ (marrigeGender == 'male') ? genderFunction.male : genderFunction.female} For Marrige</h6>`

}

function gender(age){

    if(age >= 0 && age <= 17){
        return{
            male : 'Do not Allow',
            female : 'Do not Allow',
            status : 'danger'
            
        }
    }else if(age >= 18 && age <= 21){
        return{
            female : 'Allow',
            male : 'Do not Allow',
            status : 'info'
        }
    
    }else if(age >= 21 && age <= 100){

        return{
            female : 'Allow',
            male : 'Allow',
            status : 'success'
        }

    }else{
        return{
            female : 'Date Over',
            male : 'Date Over',
            status : 'dark'
        }
    }
   
}
