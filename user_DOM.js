const singup = document.querySelector('#singup');
const namee = document.querySelector('#namee');
const email = document.querySelector('#email');
const uname = document.querySelector('#uname');
const msg = document.querySelector('.msg');
const nbox = document.querySelector('.nbox')


singup.onsubmit = (e) => {
    e.preventDefault();

    if(email.value == ''){
        email.style.border = '1px solid red'
       
    }else{
        email.style.border = '' 
    }

    if(namee.value == ''){
        namee.style.border = '1px solid red'
        
    }else{
        namee.style.border = ''
       
    }

    if(uname.value == ''){
        uname.style.border = '1px solid red'
       
    }else{
        uname.style.border = ''
        
    }


    if(namee.value == '' || email.value == ''|| uname.value == '' ){

        msg.innerHTML = `<h6 class='alert alert-danger'>All fields are required</h6>`
        
    }else{
        msg.innerHTML = `<h6 class='alert alert-success'>Send Success...!</h6>`
    }

}


singup.addEventListener('keyup', () =>{

    let mainname = namee.value;
    let username = uname.value;
    let yourmail = email.value;


    if(username == ''){
        nbox.innerHTML = `<h6 class='text-danger mt-2'>Please set User name</h6>`
    }else if (username.length < 5 || username.length >12){
        nbox.innerHTML = `<h6 class='text-danger mt-2'>User name lenght min: 5 & max: 12 digit allow</h6>`
    }else{
        nbox.innerHTML = ``
    }
})
