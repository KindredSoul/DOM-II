// ==================================================== Selected Elements and Styles

const navLinks = document.querySelectorAll('.nav-link')
console.log(navLinks)
const navContainer = document.querySelector('.nav-container')

const logo = document.querySelector('.logo-heading')

const contentSections = document.querySelectorAll('.content-section')
const content1 = (contentSections[0])
const content2 = (contentSections[1])

const destinationKeys = document.querySelector('.content-destination h2')

const fadeIn = {
    transition: 'all 0.5s ease-in 0s',
    transform: 'translateX(0rem)',
    color: 'black'
}
const fadeOut = {
    transition: 'all 0.5s ease-in 0s',
    transform: 'translateX(-25rem)',
    color: 'transparent'
}

// ========================================== Events, Events Everywhere
window.addEventListener('load', ()=> {
    let audioElement = new Audio('http://soundbible.com/grab.php?id=611&type=mp3')
    audioElement.play()
})

// Main Navigation Events

logo.addEventListener('dblclick', (e) => {
    e.preventDefault()
    if(e.target.style.color !== 'black'){
        Object.assign(e.target.style, fadeIn)
    } else if (e.target.style.color === 'black'){
        Object.assign(e.target.style, fadeOut)
    }
})

navLinks.forEach(item => {
    item.addEventListener('click', e=> e.preventDefault())
    item.addEventListener('mouseover', (e) => {
        e.target.style.color = "orange"
        if (e.target.style.color === "orange"){
            e.target.addEventListener('click', event =>{
                event.target.style.color = "black"
            })
        }
    })
})

// Contect Section Events
const switcheroo = (content)=>{
    content.addEventListener('mouseenter', (e) =>  e.target.style.flexDirection = "row-reverse")
    content.addEventListener('mouseleave', (e) => e.target.style.flexDirection = "row")
}
switcheroo(content1)
switcheroo(content2)

document.body.addEventListener('keydown', e=>{
    e.preventDefault()
    destinationKeys.textContent = `Your destination: ${e.code}`
})

window.addEventListener('scroll', ()=>{
    let bodyColor =navContainer.style.backgroundColor
    navContainer.style.transition = ('0.2s ease-in-out')
    if (bodyColor !== 'blue' && bodyColor !== 'red' && bodyColor !== 'white'){
        navContainer.style.backgroundColor = 'blue'
    } else if (bodyColor === 'blue' ){
        navContainer.style.backgroundColor = 'red'
    } else if (bodyColor === 'red') {
        navContainer.style.backgroundColor = 'white'
    } else if (bodyColor === 'white') {
        navContainer.style.backgroundColor = 'black'
    }
})


document.addEventListener("visibilitychange", ()=> {
    let backgroundMusic = new Audio('http://soundbible.com/grab.php?id=1297&type=mp3')
    if (document.visibilityState === 'hidden') {
        console.log(document.visibilityState)
        backgroundMusic.play();
        backgroundMusic.addEventListener('play', () =>{
            return alert('Fun Bus is returning from an adventure!')
        })
    } 
});










