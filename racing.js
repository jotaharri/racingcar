
// coordenadas x e y para mover  objetos.
let x=0, y=0
const car = document.getElementById('car'),
        right = () => car.style.transform = `translate(${x += 5}%, ${y}%) rotate(90deg)`
        left = () => car.style.transform = `translate(${x -= 5}%, ${y}%) rotate(90deg)`

// mover coche
document.addEventListener('keyup', evento => {
    console.log(evento)
    switch (evento.key) {
       
        case 'ArrowRight':
           
            right()
            break
        case 'ArrowLeft':
            left()
            break
    }
})

addEventListener('scroll', () => {
    if (scrollY >= 500 && scrollY <= 550) {
        const numero = document.createElement('h1')
        numero.textContent = '550millas'
        numero.style.fontSize = '5rem'
        numero.style.position = 'absolute'
        numero.style.top = '550px'
        numero.style.left = '0px'
        document.getElementById('pista').appendChild(numero)
    }
})

 