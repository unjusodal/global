function appearCountries() {
    const countryCircles = document.querySelectorAll('.circle__country')
    const orbit = document.querySelector('.illustration__circle')
    
    const countries = ['br', 'gb', 'cn', 'us', 'ru', 'in']
    
    const renderCountries = new Promise(resolve => {
        setTimeout(() => {
            countryCircles.forEach((item, i) => {
                setTimeout(() => {
                    item.classList.add(`circle__country--active--${countries[i]}`)
                    i === countries.length -1 ? resolve() : null
                }, i * 400)
            })
        }, 3000)
    })
    
    renderCountries.then(() => {
        setTimeout(() => {
            orbit.style.animation = 'rotation 20s linear infinite'
            countryCircles.forEach(item => {
                item.style.animation = 'rotationBack 20s linear infinite'
            })
        }, 200)
    })
}

appearCountries()
