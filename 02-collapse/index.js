const content = document.querySelector('.collapsible__content') 
const buttonHidden = document.querySelector('.collapsible__action--hidden')
const buttonVisible = document.querySelector('.collapsible__action--visible')
let isHide = true
const changeDisplay =()=>{
    if(isHide){
        buttonHidden.style.display = 'none'
        buttonVisible.style.display='block'
    }
    else{
        buttonVisible.style.display='none'
        buttonHidden.style.display='block'
    }
}
//Сделал анимации с аргументом для того, чтобы можено было переиспользовать анимацию к другим элементам(возможно пригодилось бы в будущем)

const hiddenAnimate=(node)=>{
    node.animate([
        {transform:'translateY(15em)',opacity:0},
        {transform:'translateY(0)',opacity:1},
    ],{
        fill: 'forwards',
        duration:1500,
        easing:'ease-in-out'
    })
}
const visibleAnimate=(node)=>{
    node.animate([
        {transform:'translateY(0)',opacity:1},
        {transform:'translateY(15em)',opacity:0},
    ],{
        fill: 'forwards',
        duration:1500,
        easing:'ease-in-out',
    })
}
const handleHidden=()=>{
    hiddenAnimate(content)    
    isHide=true
}
const handleVisible=()=>{
    visibleAnimate(content)  
    isHide=false 
}
changeDisplay()
document.querySelector('.collapsible__button').onclick=()=>{
    if(isHide){
        handleVisible()
    }
    else{
        handleHidden()
    }
    changeDisplay()
}