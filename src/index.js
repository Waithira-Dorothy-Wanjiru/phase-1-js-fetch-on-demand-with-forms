const init = () => {
   
    console.log("DOM fully loaded and parsed");
  
    
    const button = document.getElementById("myButton");
    if (button) {
      button.addEventListener("click", () => {
        alert("Button clicked!");
      });
    }
  }
  
 
  document.addEventListener('DOMContentLoaded', init);
  