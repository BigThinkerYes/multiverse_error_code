// intro is the splash screen
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelector('.logo');
//when page is fully loaded
window.addEventListener('DOMContentLoaded', ()=>{
    /**
     * forEach method
     * console.log(logoSpan)
     * 0: span.logo
     * 1: span.logo
     * length: 2
     * (idx + the first index(1))*400 milliseconds
     */
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        })
        //remove the active class
        //2000 is 2 seconds
        //2300 is 2.3 seconds
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            }, 2000)
            //remove splash screen -- vanilla javascript
            setTimeout(()=>{
                intro.style.top = '-100vh' 
            }, 2300)
        })
    })
})
