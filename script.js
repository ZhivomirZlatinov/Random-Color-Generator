const btn = document.getElementById("btn")
        
var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")
context.fillStyle = "white"
context.fillRect(0, 0, 200, 100)

btn.addEventListener("click",Rnd)

function Rnd()
    {
        var r = Math.floor(Math.random() * 255)
        var g = Math.floor(Math.random() * 255)
        var b = Math.floor(Math.random() * 255)

        context.fillStyle = "rgb("+r+", "+g+", "+b+")"
        context.fillRect(0, 0, 200, 100)
        rgb.value = "rgb("+r+", "+g+", "+b+")"
        hex.value ="#"+rgbToHex(r,g,b)
    }

function toHex(a){
    var hex = a.toString(16)
    return hex
}

function rgbToHex(r,g,b){
    return(toHex(r)+toHex(g)+toHex(b))
}

function copy(e){
    e.target.select()
    navigator.clipboard.writeText(e.target.value)
}

let colorCodes = document.querySelectorAll('input')
colorCodes.forEach(element => element.addEventListener('click',copy))
