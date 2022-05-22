let input = document.getElementById("input")
let demo = document.getElementById("demo")

//體重除於7
let bodyweight7=(weight) => {
  x =weight/7;
  return Math.round(x);
}

//體重除於4
let bodyweight4=(weight) => {
  x =weight/4;
  return Math.round(x);
}

//體重除一半
let bodyweight2=(weight) => {
  x =weight/2;
  return Math.round(x);
}

//顯示結果
let calculator=() => {
 let weight = input.value;
 demo.innerHTML = `體重${weight}kg <br/>拉頸從${bodyweight7(weight)}kg到${bodyweight4(weight)}kg  <br/>拉腰從${bodyweight4(weight)}kg到${bodyweight2(weight)}kg` ;
}

//click 呼叫程式 calculator()
input.addEventListener("input" ,()=>{calculator();});