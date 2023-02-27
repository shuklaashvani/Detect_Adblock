const detect = document.querySelector("#detect"),
wrapper = document.querySelector(".wrapper"),
button = document.querySelector("button"),
message = document.querySelector(".message") 


// these are some possible classes that adblocker avoid to render
let adClasses = ["ad","ads","adsbox","ad-placement","doubleclick","ad-placeholder","ad-badge"]
for(let item of adClasses){
    detect.classList.add(item)
}

let getProperty = window.getComputedStyle(detect).getPropertyValue("display")

button.addEventListener("click",()=>{
    wrapper.classList.remove("show")
    message.classList.add("show")
})

if(!wrapper.classList.contains("show")){
    getProperty == "none" ? wrapper.classList.add("show") : wrapper.classList.remove("show")
    getProperty == "none" ? message.classList.remove("show") : message.classList.add("show")
}