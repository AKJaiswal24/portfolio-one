let menuIcon = document.querySelector('#menuicon');
let navbar = document.querySelector('.menubar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + '] ').classList.add('active');
            })
        };
    });
    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 100);

    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')

};


ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.about_content p,.home, .headeng , .social_media a', { origin:'top'});
 ScrollReveal().reveal('img, .sercives_container, .portfolio-box , .contact form ', { origin:'bottom'});
 ScrollReveal().reveal('.home_content h1, .pi00 , .social_media', { origin:'left'});
 ScrollReveal().reveal(' .about-content ,.progress_con ', { origin:'right'});


 const typed = new Typed('.multiple-text' , {
    strings: ['Frontend developer' , 'Student', 'Freelancer' ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
 } );