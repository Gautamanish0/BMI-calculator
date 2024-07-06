const form = document.querySelector('form'); // selecting the form because inside form there are submit button and weight,height.
form.addEventListener('submit', function(e) {  //preventing the default action in form i.e not sending req to server
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value); // getting the value from the form input..) parseInt converts the string into int,float numbers
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const info = document.querySelector('#info');
    const under =18.6;

    if (height === '' || height < 0 || isNaN(height)) 
        {
        results.innerHTML = `please give a valid height ${height}`; 
    }
    
   else (weight === '' || weight < 0 || isNaN(weight)) 
        {
        results.innerHTML = `please give a valid height ${weight}`; 
    } 
    
    // else  (bmi > 18.6 )
    //     {
    //    const bmi =  (weight/((height*height)/10000)).toFixed(1);

    //    info.innerHTML = `${bmi}you are under weight`; 

//   }  
//    else {
//     const bmi =  (weight/((height*height)/10000)).toFixed(1);

    

    
       
       

    // Show the result
    {
    results.innerHTML = `<span> ${bmi} </span>`;
    }
    }
}) 



