const wrapper = document.querySelector(".sliderwrappers")
/*
console.log(wrapper)

wrapper.style.transform = "translate(-100vw)"*/
const menuitems = document.querySelectorAll(".menuitem")

menuitems.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        wrapper.style.transform =`translateX(${-100*index}vw)`;
    })
})