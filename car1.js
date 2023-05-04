
const menuBtn = document.querySelector('.menu-btn');
const menuBtnMobile = document.querySelector('.menu-btn-mobile');
const sidebar = document.querySelector('.sidebar')
const closeBtn= document.querySelector('.close-btn');
const backdrop=document.querySelector('.sidebar-backdrop');

AOS.init();

menuBtn.addEventListener('click',sidebaropen);
menuBtnMobile.addEventListener('click',sidebaropen);


function sidebaropen()
{
    sidebar.style.right ="10em";
    backdrop.style.display ="block";
    setTimeout(() => {
        backdrop.style.opacity = "1";
    }, 50);
    document.body.classList.add('sidebar-open body');
}

closeBtn.addEventListener('click', () =>{
    sidebar.style.right="-20em";
    sidebar.style.opacity="0";
    setTimeout(() => {
        backdrop.style.display="none";
    },300);

    document.body.classList.remove('sidebar-open body');
});
