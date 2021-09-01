function webSkillShow(){
    const web = document.getElementById("web");
    const programming = document.getElementById("programming");
    const tools = document.getElementById("tools");
   web.style.visibility = "visible";
   programming.style.visibility = "hidden";
   tools.style.visibility = "hidden";
}

function  progSkillShow(){
   const web = document.getElementById("web");
    const programming = document.getElementById("programming");
    const tools = document.getElementById("tools");

  web.style.visibility = "hidden";
  programming.style.visibility = "visible";
  tools.style.visibility = "hidden";
}

function  toolsSkillShow(){
   const web = document.getElementById("web");
    const programming = document.getElementById("programming");
    const tools = document.getElementById("tools");

   web.style.visibility = "hidden";
   programming.style.visibility = "hidden";
   tools.style.visibility = "visible";

}
