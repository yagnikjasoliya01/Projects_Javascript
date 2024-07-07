const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
  e.preventDefault();

  const heigth = parseInt(document.querySelector('#height').value);
  const weigth = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if(heigth === '' || heigth < 0 || isNaN(heigth)){
    result.innerHTML = `please enter  a valid height ${heigth}`
  }
  else if(weigth === '' || heigth < 0 || isNaN(weigth)){
    result.innerHTML = `please enter  a valid weight ${weigth}`
  }
  else{
    const bmi = (weigth / ((heigth * heigth) / 10000)).toFixed(2);

    if(bmi < 18.6)
    {
      result.innerHTML = `<span>${bmi}<br>Under Weight</span>`;
    }
    else if(bmi >= 18.6 && bmi <=24.9)
    {
      result.innerHTML = `<span>${bmi}<br>Normal Range Weight</span>`;
    }
    else
    {
      result.innerHTML = `<span>${bmi}<br>Over Weight</span>`;
    }
  }


})

