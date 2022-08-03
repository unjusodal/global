function getDescription() {
    return new Promise(resolve => {
        const requestURL = 'https://baconipsum.com/api/?type=lucky'
        const xhr = new XMLHttpRequest()
        
        xhr.open('GET', requestURL)
        xhr.responseType = 'json'
        xhr.onload = () => resolve(xhr.response)
        xhr.send()
    })
}

const description = document.querySelector('.content__text p')

getDescription()
.then(data => description.textContent = data[0].slice(0, 100))
.catch(description.textContent = 'We Make international calling simple, relible, and cheap basedon your unique calling behavior.')
