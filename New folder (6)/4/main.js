var inp = document.getElementById("inp")
var btn = document.getElementById("btn")


btn.onclick = () => {
    if(inp.value >= 0 )
    {
        window.alert("positive")
    }else{
        window.alert("nagative")
    }
}