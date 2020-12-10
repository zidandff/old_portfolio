const toggleMenu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".nav-links")
const navLinks = document.querySelectorAll(".nav-links li")
const categories = document.querySelectorAll('.category-item')
const projects = document.querySelectorAll(".card-project")
const toTop = document.querySelector(".back-to-top")
const service = document.querySelector(".service")

// navbar
toggleMenu.addEventListener('click', function(){
    navbar.classList.toggle("slide")
})
navLinks.forEach((e)=>{
    e.addEventListener('click', ()=>{
        navbar.classList.remove("slide")
    })
})

window.addEventListener('scroll', ()=> {
    navbar.classList.remove("slide")
})

// smooth scroll
new SmoothScroll('.nav-links a[href*="#"]', {
    speed: 1000,
    easing: 'easeInOutQuad'
});

new SmoothScroll('.back-to-top a[href*="#"]', {
    speed: 1000,
    easing: 'easeInOutQuad'
});

// filter project
categories.forEach(category => {
    category.addEventListener('click', ()=> {
        let filterSelected = category.getAttribute("data-target")
        
        // add/remove active class
        categories.forEach(e => e.classList.remove("active"))
        category.classList.add("active")

        // hide & show 
        projects.forEach(project => {
            project.classList.add("fade-up")
            if( filterSelected == "all" ){
                project.style.display = "block"
            }
            else if( !project.classList.contains(filterSelected) ){
                project.style.display = "none"
            }
            else {
                project.style.display = "block"
            }
            // hapus class fade
            setTimeout(() => {
                project.classList.remove('fade-up')
            }, 500);
        })
    })
})

// back to top
window.addEventListener("scroll", ()=> {
    if( window.scrollY > document.querySelector(".service").offsetTop - document.querySelector(".hero").clientHeight ){
        toTop.style.opacity = 1;
    }
    else {
        toTop.style.opacity = 0
    }
})