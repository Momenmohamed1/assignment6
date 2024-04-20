var inp = document.getElementById("inp")
// var inp2 = document.getElementById("inp2")
var btn = document.getElementById("btn")

btn.onclick = () => {
    if(inp.value % 3 == 0)
    {
        window.alert("yes")
    }
    else if(inp.value % 4 == 0)
    {
        window.alert("yes")
    }
    else{
        window.alert("no")
    }
}
// btn.onclick = () => {
//     if(inp.value % 4 == 0)
//     {
//         window.alert("yes")
//     }else{
//         window.alert("no")
//     }
// }




