document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slider img');
    let currentSlide = 0;
    const slideChangeInterval = 5000; // 5 segundos

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Mostrar el primer slide al cargar la página
    showSlide(currentSlide);

    // Cambiar de slide cada 5 segundos
    setInterval(nextSlide, slideChangeInterval);
});

document.addEventListener("DOMContentLoaded", function () {
    const skillsContainer = document.querySelector('.skills-container');
    const skills = document.querySelectorAll(".skill");

    function showSkillDescription(description) {
        description.style.maxHeight = "200px";
        description.style.opacity = "1";
    }

    function hideSkillDescription(description) {
        description.style.maxHeight = "0";
        description.style.opacity = "0";
    }

    // Mostrar habilidades con un retraso
    setTimeout(function () {
        skillsContainer.classList.add('show-skills');
    }, 500);

    // Añadir eventos a cada habilidad para mostrar y ocultar descripciones
    skills.forEach(skill => {
        const description = skill.querySelector(".skill-description");

        // Ocultar las descripciones inicialmente
        hideSkillDescription(description);

        skill.addEventListener("mouseover", function () {
            // Mostrar la descripción al pasar el cursor
            showSkillDescription(description);
        });

        skill.addEventListener("mouseout", function () {
            // Ocultar la descripción al quitar el cursor
            hideSkillDescription(description);
        });
    });

    // Agregar animaciones al desplazarse
    document.addEventListener('scroll', function () {
        const windowHeight = window.innerHeight;

        animateElements('.section', windowHeight);
        animateElements('.animate-text', windowHeight);
    });

    function animateElements(selector, windowHeight) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(function (element) {
            const position = element.getBoundingClientRect().top;

            if (position < windowHeight * 0.75) {
                element.classList.add('animate-section');
            }
        });
    }
});
