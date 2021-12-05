

const btnHome = document.querySelector('.btnHome');
const home = document.querySelector('.home');

btnHome.addEventListener('click', function (e) {
    home.scrollIntoView({ behavior: 'smooth' });
});

const btnHome2 = document.querySelector('.btnHome2');
btnHome2.addEventListener('click', function (e) {
    home.scrollIntoView({ behavior: 'smooth' });
});


const btnWatch = document.querySelector('.btnWatch');
const watch = document.querySelector('.watch');

btnWatch.addEventListener('click', function (e) {
    watch.scrollIntoView({ behavior: 'smooth' });
});
const btnWatch2 = document.querySelector('.btnWatch2');
btnWatch2.addEventListener('click', function (e) {
    watch.scrollIntoView({ behavior: 'smooth' });
});
const btnServices = document.querySelector('.btnServices');
const services = document.querySelector('.services');

btnServices.addEventListener('click', function (e) {
    services.scrollIntoView({ behavior: 'smooth' });
});

const btnServices2 = document.querySelector('.btnServices2');
btnServices2.addEventListener('click', function (e) {
    services.scrollIntoView({ behavior: 'smooth' });
});
const btnEvents = document.querySelector('.btnEvents');
const events = document.querySelector('.events');

btnEvents.addEventListener('click', function (e) {
    events.scrollIntoView({ behavior: 'smooth' });
});
const btnEvents2 = document.querySelector('.btnEvents2');

btnEvents2.addEventListener('click', function (e) {
    events.scrollIntoView({ behavior: 'smooth' });
});
const btnAboutUs = document.querySelector('.btnAboutUs');
const aboutUs = document.querySelector('.about-us');

btnAboutUs.addEventListener('click', function (e) {
    aboutUs.scrollIntoView({ behavior: 'smooth' });
});
const btnAboutUs2 = document.querySelector('.btnAboutUs2');
btnAboutUs2.addEventListener('click', function (e) {
    aboutUs.scrollIntoView({ behavior: 'smooth' });
});
const btnPrayerRequest = document.querySelector('.btnPrayerRequest');
const prayerRequest = document.querySelector('.prayer-request-bg');

btnPrayerRequest.addEventListener('click', function (e) {
    prayerRequest.scrollIntoView({ behavior: 'smooth' });
});
const btnPrayerRequest2 = document.querySelector('.btnPrayerRequest2');

btnPrayerRequest2.addEventListener('click', function (e) {
    prayerRequest.scrollIntoView({ behavior: 'smooth' });
});
const btnContact = document.querySelector('.contact');
const contactUs = document.querySelector('.contact-us');

btnContact.addEventListener('click', function (e) {
    contactUs.scrollIntoView({ behavior: 'smooth' });
});
const btnContact2 = document.querySelector('.contact2');


btnContact2.addEventListener('click', function (e) {
    contactUs.scrollIntoView({ behavior: 'smooth' });
});
const header = document.querySelector('header');
const initialCoords = watch.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function () {
    if (window.scrollY > initialCoords.top)
        header.classList.add('sticky')
    else header.classList.remove('sticky');
});
