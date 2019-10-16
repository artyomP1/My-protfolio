function openCanvas() {
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.comment').classList.toggle('fa-comment');
    document.querySelector('.comment').classList.toggle('fa-times');


    // document.querySelector('.offcanvas-btn').innerHTML = 'X';
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
}