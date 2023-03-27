let joins = document.getElementsByClassName("join")
join.addEventListener("click", function(){
    for(join of joins){
        join.classList.remove("b")
    }
})

function bars(tabname){
    for (join of joins){
        join.classList.remove("b")
    }
    event.currentTarget.classList.add("b")
    let login = document.getElementById("login1")
    let register = document.getElementById("register1")
    let page = document.getElementById(tabname);

    login.style.display = "none"
    login.style.height = "0%"

    register.style.display = "none"
    register.style.height = "0%"

    page.style.display = "grid"
    page.style.height = "100%"
}


btn1 = document.getElementById("btn2")
let count = 0;
let navin = document.getElementById("navin")

btn1.addEventListener("click", function(){
    if (count % 2 == 0){
        navin.style.top = 1000 + "px"
        count += 1
        
    }else{
        navin.style.top = -1000 + "px"
        count += 1
    }
    navin.style.fontSize = "0px"
    return count

})