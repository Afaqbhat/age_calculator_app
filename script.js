// Inputs

const inputDay=document.getElementById('day')
const inputMonth=document.getElementById('month')
const inputYear=document.getElementById('year')

// Outputs

const outputDay=document.getElementById('DD')
const outputMonth=document.getElementById('MM')
const outputYear=document.getElementById('YY')


//Current Date

const today=new Date();
let currentDay=today.getDate();
let currentMonth=1+today.getMonth();
let currentYear=today.getFullYear();


const months=[31,28,31,30,31,30,31,31,30,31,30,31];

// Functions
//validating
function validate(){
   let validator=true
    const inputs=document.querySelectorAll('input');
  inputs.forEach((i) => {
    const parent=i.parentElement;

    if(i.value ===''){
        i.style.borderColor='red';
        parent.querySelector('small').innerText='this field is required'
        validator=false;
    }else if(inputMonth.value > 12){
        inputMonth.style.borderColor='red';
        inputMonth.parentElement.querySelector('small').innerText='must be a valid Month';
        validator=false;
    }else if(inputDay.value > 31){
        inputDay.style.borderColor='red';
        inputDay.parentElement.querySelector('small').innerText='must be a valid Day';
        validator=false;
    }else if(inputYear.value == 0 || inputYear.value<1900){
        inputYear.style.borderColor='red';
        inputYear.parentElement.querySelector('small').innerText='must be a valid Year';
        validator=false;
    }
    else{
        i.style.borderColor='black';
        parent.querySelector('small').innerText='';
        validator=true;

    }
  })
  return validator;
  }

// ADD Event Listner
const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
      e.preventDefault();
      if(validate()){
        if(inputDay.value > currentDay){
            currentDay=currentDay + months[currentMonth-1];
            currentMonth=currentMonth-1
        }
        if(inputMonth > currentMonth){
            currentMonth=currentMonth + 12;
            currentYear=currentYear - 1;

        }
        // subtract current with d.o.b
        const day=currentDay - inputDay.value;
        const month=currentMonth - inputMonth.value;
        const year=currentYear - inputYear.value;
        
        //output values
        outputDay.innerText=day;
        outputMonth.innerText=month;
        outputYear.innerText=year;

        //reset
        form.reset();


}
})






