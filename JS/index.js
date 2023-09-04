// Карусель просмотра услуг.
const boxServices = document.querySelector('.second_section__services');

const nextButton = document.querySelector('.next');
nextButton.addEventListener("click", () => {
    return boxServices.scrollBy(348, 0);
});

const prevButton = document.querySelector('.prev');
prevButton.addEventListener("click", () => {
    return boxServices.scrollBy(-348, 0);
});


//Анимация галереи.
function handleIntersection (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.third_section__img').forEach(elem => elem.style.display = 'flex')
            observer.unobserve(entry.target);
        }
    });
}

const targetElement = document.querySelector('.third_section__content');
const options = {
    root: null,
    threshold: 0.5,
};

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(targetElement);


// Логика открытия ответов на вопросы.
const questions = document.querySelectorAll('.fourth_section__question');

questions.forEach((elem) => {
    elem.addEventListener("click", ({target}) => {
        if (target.nextElementSibling.style.display === "none" || target.nextElementSibling.style.display === "") {
            target.nextElementSibling.style.display = "block";
            target.style.color = "#a4292e";
        } else {
            target.nextElementSibling.style.display = "none";
            target.style.color = "white";
        }
    });
})

//Логика заезда из разных сторон блоков с вопросами.
/*
function comeQuestionBlocks (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.fourth_section__frst_prt').style.animation = 'block 3s forwards';
            document.querySelector('.fourth_section__sec_prt').style.animation = 'block_2 3s forwards';
            observer.unobserve(entry.target);
        }
    });
}

const targetElem = document.querySelector('.third_section__content');
const optionsRender = {
    root: null,
    threshold: 1.0,
};

const observerSecond = new IntersectionObserver(comeQuestionBlocks, optionsRender);

observerSecond.observe(targetElem);*/

// Логика работы всплывающего меню для мобильной версии.
const menuButton = document.querySelector(".mobile__menu__dash");
menuButton.addEventListener('click', () => {
    document.querySelector(".mobile__links").style.animation = 'block 2s forwards';
})

const crossButton = document.querySelector(".mobile__links__cross");
crossButton.addEventListener('click', () =>{
    document.querySelector(".mobile__links").style.animation = 'blockBack 2s forwards';
})

const mobileLinks = document.querySelectorAll(".mobile__link");
mobileLinks.forEach(elem => {
    elem.addEventListener('click', () => {
        document.querySelector(".mobile__links").style.animation = 'blockBack 2s forwards';
    })
})

