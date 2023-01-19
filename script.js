function changeWhenScroll()
{
    var navbar = document.getElementById('nav')
    var scrollValue = window.scrollY
    if(scrollValue < 0)
    {
        navbar.classList.remove('navChange')
    }
    else
    {
        navbar.classList.add('navChange')
        
    }
}

window.addEventListener('scroll', changeWhenScroll)

var list = document.querySelectorAll(".ul_menu_botton li")
var box = document.querySelectorAll(".menu_list .menu_table_data")

list.forEach((el)=>{
    el.addEventListener('click',(e)=>{
        box.forEach((el2)=>{
            el2.style.display = "none"
        })
        document.querySelectorAll(e.target.dataset.filter).forEach((li)=>{
            li.style.display = "inline-flex"
        })
    })
})