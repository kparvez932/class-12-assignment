/**
 * 
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */

function ageCale (name, year){
    let date = new Date();
    age = date.getFullYear() - year;

    let ageStatus = checkAgeStatus(age)

    return`<p class='alert alert-${ageStatus.status}'>Hi ${name}, You are ${age} years old & you are a ${ageStatus.name}</p>`

}

/**
 * 
 * @param {*} age 
 * @returns 
 */
function checkAgeStatus(age){
    if(age >= 0 && age <= 10){
        return{
           name : 'Baby',
           status : 'success'
        }
    }else if (age >= 11 && age <= 20){
        return{
            name : 'Kishor',
            status : 'info'
         }
    }else if (age >= 21 && age <= 30){
        return{
            name : 'Jubjok',
            status : 'warning'
         }
    }else if (age >= 31 && age <= 40){
        return{
            name : 'Togboge Jubok',
            status : 'info'
         }
    }else if (age >= 42 && age <= 55){
        return{
            name : 'Moddho Boysko',
            status : 'primary'
         }
    }else if (age >= 56 && age <= 70){
        return{
            name : 'Briddho',
            status : 'danger'
         }
    }else if (age >= 71 && age <= 100){
        return{
            name : 'Full Briddho',
            status : 'danger'
         }
    }else{
        return{
            name : 'Jin OR Bhoot',
            status : 'dark'
         }
    }
}





