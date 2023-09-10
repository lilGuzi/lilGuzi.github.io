
//const treasureHunt = () => {
//var randomNumber = Math.floor(Math.random() * 9)
//if (randomNumber === 1) {
//    return "Pass!"
//} else if (randomNumber === 2) {
//    return "Pass!"
//} else if (randomNumber === 3) {
//    return "Pass!"
//} else if (randomNumber === 4) {
//   return "Pass!"
//} else if (randomNumber === 5) {
//    return "Pass!"
//} else if (randomNumber === 6) {
//    return "Pass!"
//} else if (randomNumber === 7) {
//    return "Pass!"
//} else if (randomNumber === 8) {
//    return "Pass!"
//} else if (randomNumber === 9) {
    //   return "Boom!!!"
    //}
    //}
    
    var gold = Math.floor(Math.random() * 9)

    var bomb = Math.floor(Math.random() * 9)

const treasure = (location) => {
    if (location === gold){
        document.getElementById(gold).innerHTML="👑";
        alert("WINNER WINNER CHICKEN DINNER!!!")
    } else if(location === bomb){
        document.getElementById(bomb).innerHTML="💣";
        alert("you suck.")
    } else{
        document.getElementById(location).innerHTML="🌴"}
    }

    // if(location === "0"){
    //     document.getElementById("0"). innerHTML = "🌴"
    // } else if (location === "1"){
    //     document.getElementById("1"). innerHTML = "🌴"
    // } else if (location === "2"){
    //     document.getElementById("2"). innerHTML = "🌴"
    // } else if (location === "3"){
    //     document.getElementById("3"). innerHTML = "🌴"
    // } else if (location === "4"){
    //     document.getElementById("4"). innerHTML = "🌴"
    // } else if (location === "5"){
    //     document.getElementById("5"). innerHTML = "🌴"
    // } else if (location === "6"){
    //     document.getElementById("6"). innerHTML = "🌴"
    // } else if (location === "7"){
    //     document.getElementById("7"). innerHTML = "🌴"
    // } else if (location === "8"){
    //     document.getElementById("8"). innerHTML = "🌴"
    // } else if (location === "gold"){
    //     document.getElementById("gold"). innerHTML = "👑"
    // }

  
//const winner = (gold) => {
//    if(location = gold){
//    document.getElementById(location). innerHTML = "👑"
//}
//}
//  if(location === bomb){
//    return "💣"
//  }
