const header = document.querySelector('.header');
const btnOpen = document.querySelector('.btn-open');

btnOpen.addEventListener('click', function() {
    header.classList.toggle('active');
});

const prItem = document.querySelectorAll('.project__list-item');
const bottDis = document.querySelectorAll('.bott-dis');
const bottActive = document.querySelectorAll('.bott-active');



prItem.forEach((item) => {
    item.addEventListener('click', function() {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            
        } else {
            prItem.forEach((el) => el.classList.remove('active'));
            item.classList.add('active');
        }
    });
});