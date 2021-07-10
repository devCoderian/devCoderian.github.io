(() => {
    let nav = document.querySelector('.navbar');
    console.log(nav);
    document.addEventListener('scroll', () => {
        console.log(nav)
      if (window.scrollY >= 20) {
        nav.classList.add('sticky');
      }else{
        nav.classList.remove('sticky');
      }
    })
  })();

const menuClick = () =>{
//   let hamburger = document.querySelector('.menu-btn');
  document.querySelector('.navbar .menu').classList.toggle('active');
  document.querySelector('.menu-btn span').classList.toggle('active');
//   hamburger.classList.toggle( 'active', false );
}