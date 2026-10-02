
const showNavBtn = document.getElementById('show-nav-btn');
const navBar = document.getElementById('nav');
const sections = document.querySelectorAll('.hidden')

let clickCount = 0;

showNavBtn.addEventListener('click', () => {
    if(clickCount == 0){
        navBar.style.display = 'block';
        clickCount++;
    }else{
        navBar.style.display = 'none';
        clickCount = 0;
    }
})

scrollAnimation = new IntersectionObserver( (entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    })
})

sections.forEach(el => scrollAnimation.observe(el))
