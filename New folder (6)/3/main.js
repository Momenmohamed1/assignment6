var inp1 = document.getElementById("inp1")
var inp2 = document.getElementById("inp2")
var btn = document.getElementById("btn")
btn.onclick = () => {
    if(inp1.value != '' &&
    inp2.value != ''){
        if(inp1.value > inp2.value){
            window.alert(inp1.value)
        }
        else if(inp2.value > inp1.value){
            window.alert(inp2.value)
        }
        else {
            window.alert("The number is equal")
        }
    }

}
