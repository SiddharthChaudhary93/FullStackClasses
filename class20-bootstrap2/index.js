const root = document.documentElement;

console.log(root);


window.addEventListener('click',()=>{
    root.style.setProperty('--doppler','#ffc107');
});

// document.getElementById("Button").disabled = true;

// function disableIfeFields() {
//     document.getElementsByName("numIdentificacionPF").forEach((e) => {
//       e.disabled = true;
//     });
//   }
//   <html:text property="cicPF" maxlength="9" style="text-transform: uppercase;" />
//   <input onfocus="disableIfeFields()" type="text" name="fname">
//   <input type="text" name="numIdentificacionPF">
//   <input type="text" name="numIdentificacionPF">
//   <input type="text" name="numIdentificacionPF">
//   <input type="text" name="numIdentificacionPF">
//   <input type="text" name="numIdentificacionPF">