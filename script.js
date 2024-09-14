var basic_plus = document.getElementById("basic_plus")
var basic_minus = document.getElementById("basic_minus")
var pro_plus = document.getElementById("pro_plus")
var pro_minus = document.getElementById("pro_minus")

var basic_value = document.getElementById("basic_value")
var pro_value = document.getElementById("pro_value")

var basic_signup = document.getElementById("basic_signup")
var basic_extra = document.getElementById("basic_extra")

var pro_signup = document.getElementById("pro_signup")
var pro_extra = document.getElementById("pro_extra")


basic_value_temp = 199
pro_value_temp = 298


window.onload = function(){
    basic_value.innerHTML = 199
    pro_value.innerHTML = 298
}



basic_plus.addEventListener('click', function(){
    basic_value.innerHTML = basic_value_temp + 1
    basic_value_temp = basic_value_temp + 1
})

basic_minus.addEventListener('click', function(){
    basic_value.innerHTML = basic_value_temp - 1
    basic_value_temp = basic_value_temp - 1
})

pro_plus.addEventListener('click', function(){
    pro_value.innerHTML = pro_value_temp + 1
    pro_value_temp = pro_value_temp + 1
})

pro_minus.addEventListener('click', function(){
    pro_value.innerHTML = pro_value_temp - 1
    pro_value_temp = pro_value_temp - 1
})

basic_signup.addEventListener('click', function(){
    basic_extra.style.display = 'block'
})

pro_signup.addEventListener('click', function(){
    pro_extra.style.display = 'block'
})