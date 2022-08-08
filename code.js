container.onmouseover = container.onmouseout = wakeOwl;
let closedEyes=document.getElementById('closedEyes');
let opendEyes=document.getElementById('opendEyes');
let head=document.getElementById('head');
let body=document.getElementById('body');
function wakeOwl(event){
    let opendEyesOpacity=0;
    let closedEyesOpacity=1;
    let headRot="25deg";
      if (event.type == 'mouseover') {
        opendEyesOpacity=1;
        closedEyesOpacity=0;
        headRot="0deg";
        
      }
      if (event.type == 'mouseout') {
        opendEyesOpacity=0;
        closedEyesOpacity=1;
        headRot="25deg";

      }
      opendEyes.style.opacity = opendEyesOpacity;
      closedEyes.style.opacity=closedEyesOpacity;
      head.style.transform="rotate("+headRot+")";
      closedEyes.style.transform="rotate("+headRot+")";
    
}