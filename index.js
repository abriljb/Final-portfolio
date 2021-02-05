const barcontainer = document.querySelector('.Bars-container')
const Icon = document.getElementById('bars')
const bgnavigators = document.querySelector('.Navigators')


barcontainer.addEventListener(`click`, ()=>{
    if(Icon.classList.contains('fa-bars')){
        Icon.classList.remove('fa-bars')
        Icon.classList.add('fa-close')
        bgnavigators.classList.remove('show')
        bgnavigators.classList.add('hide')
        
        
    }else{
        Icon.classList.remove('fa-close')
        Icon.classList.add('fa-bars')
        bgnavigators.classList.remove('hide')
        bgnavigators.classList.add('show')
    }
})

