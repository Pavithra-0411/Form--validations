const form=document.getElementById('form');
const fname=document.getElementById('fname');
const email=document.getElementById('emailId');
const phone=document.getElementById('phonenum');
const position=document.getElementById('position');


form.addEventListener('submit', e => {
e.preventDefault();
validateInputs();
})

const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    
    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess=(element)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs=()=>{
    const fnameVal=fname.value.trim();
    const emailVal=email.value.trim();
    const tele=phone.value.trim(); 
    const positionVal=position.value.trim();

    if(fnameVal==='')
    {
        setError(fname,'Fname is required')
    }
    else{
        setSuccess(fname)
    }

    if(emailVal==='')
    {
         setError(email,'email is required')
    }
    else{
            setSuccess(email)
    }

    if(tele==='')
    {
       setError(phone,'Phone num is required')
    }
    else{
         setSuccess(phone)
    }
    if(positionVal==='')
    {
        setError(position,'Position is required')
    }
    else{
         setSuccess(position)
    }
}