const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;



    if (!weight || !height || weight <= 0 || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }


    const bmi = ((weight / (height * height)) * 10000).toFixed(2)
    

    const value = document.getElementById('value')
    let description = ''

    value.classList.remove('danger', 'attention', 'normal')

    document.getElementById('infos').classList.remove('hidden')
    if ( bmi < 17 ){

        description = 'Atenção! Você está muito abaixo do peso!'
        value.classList.add('danger')

    } else if (bmi >= 17 && bmi <= 18.5) {

        description = 'Você está abaixo do peso!'
        value.classList.add('attention')
        
    } else if ( bmi >= 18.5 && bmi <= 25 ) {

        description = 'Você está com o peso ideal!'
        value.classList.add('normal')

    } else if ( bmi > 25 && bmi <= 30){

        description = 'Você está acima do peso!'
        value.classList.add('attention')

    } else if ( bmi > 30 && bmi <= 35){

        description = 'Atenção! Você está com obesidade moderada!'
        value.classList.add('danger')

    } else if ( bmi > 35 && bmi <= 40){

        description = 'Cuidado! Você está com obesidade severa!'
        value.classList.add('danger')

    } else {

        description = 'Cuidado! Você está com obesidade morbida!'
        value.classList.add('danger')
    }
    
    value.textContent = bmi.replace('.', ',')
    document.getElementById('description').textContent = description
})

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
})