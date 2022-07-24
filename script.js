let input = document.getElementById("weight")
let result = document.getElementById("result")

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
 if (weight < 0 ){
  result.innerHTML = "請輸入正數！";
 }else if (weight > 150){
  result.innerHTML = "應該沒有人這麼重吧 冏！";
 }else if (weight>0 && weight <150){
  result.innerHTML = `頸椎牽引: ${bodyweight7(weight)}公斤~${bodyweight4(weight)}公斤  <br/>腰椎牽引: ${bodyweight4(weight)}公斤~${bodyweight2(weight)}公斤` ;
 }else if (weight == ""){
  result.innerHTML = "" ;
 }
}


//click 呼叫程式 calculator()
input.addEventListener("input" ,()=>{calculator();});