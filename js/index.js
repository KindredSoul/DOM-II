// ==================================================== Selected Elements and Styles
const navLinks = document.querySelectorAll('nav .nav-link')
console.log(navLinks)

const logo = document.querySelector('.logo-heading')


const contentSections = document.querySelectorAll('.content-section')
const content1 = (contentSections[0])
const content2 = (contentSections[1])

// ========================================== Events, Events Everywhere
// window.addEventListener('load', (event)=> {
//     let audioElement = new Audio('http://soundbible.com/grab.php?id=611&type=mp3')
//     audioElement.play()
// })

// Main Navigation Events
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

logo.addEventListener('dblclick', (e) => {
    e.preventDefault()
    if(e.target.style.color !== 'black'){
        Object.assign(e.target.style, fadeIn)
    } else if (e.target.style.color === 'black'){
        Object.assign(e.target.style, fadeOut)
    }
})

navLinks.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        e.preventDefault()
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

















