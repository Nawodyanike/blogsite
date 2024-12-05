const navItems= document.querySelector('.nav_items');

const sidebar= document.querySelector('aside');
const showsidebarbtn= document.querySelector('#show_sidebar-btnd');
const hidesidebarbtn= document.querySelector('#hide_sidebar-btn');

const showsidebar =()=>{
    sidebar.style.left= '0';
    showsidebarbtn.style.display='none';
    hidesidebarbtn.style.display='inline-block'
}

const hidesidebar=()=>

{
sidebar.style.left = '-100%';
showsidebarbtn.style.display='inline-block';
hidesidebarbtn.style.display='inline-block'
}
showsidebarbtn.addEventListener('click', showsidebar);
hidesidebarbtn.addEventListener('click', hidesidebar);