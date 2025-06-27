document.addEventListener("DOMContentLoaded", () => {


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('inview');
                return;
            }
            entry.target.classList.remove('inview'); // Optional: removes the class when the element leaves the viewport
        });
    });


    const allAnimatedElements = document.querySelectorAll('.animate');


    allAnimatedElements.forEach((element) => observer.observe(element));
})