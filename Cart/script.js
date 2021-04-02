let nextbtn = document.querySelectorAll('.btn-next');
let sectionsheader = document.querySelectorAll('.sections li');

nextbtn.forEach(nextbtn__each => {
    nextbtn__each.addEventListener('click', next);
});


function next(e) {
    e.preventDefault();
    let thispage = this.parentElement.parentElement.parentElement.parentElement;

    thispage.classList.remove('active');
    thispage.nextElementSibling.classList.add('active');

    sectionsheader.forEach(sectionsheader__each => {

        let sectionid = thispage.nextElementSibling.getAttribute('id');
        let activelist = sectionsheader__each.getAttribute('data-preview');

        if (sectionid == activelist) {
            sectionsheader__each.classList.add('active');
            sectionsheader__each.previousElementSibling.classList.remove('active');
        }

    });

}