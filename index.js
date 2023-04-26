

// const back=document.getElementsByTagName("body");

// console.log(back)
// console.log(input.value);


const getColor=()=>{
const input=document.getElementById("sign");
const back=document.body;
const choose= input.value;
   console.log(choose)
  
   switch(choose){
    case "2": const choose= input.value;
    back.style.backgroundColor="yellow"
    break;
    case "3":
      back.style.backgroundColor="green";
      break
      case "4":
        back.style.backgroundColor="red";
        break;
        case "5":
          back.style.backgroundColor="crison";
          break
          case "6":
        back.style.backgroundColor="mango";
        break;
        
   }

}