function Compose() {
  let output = "";

  for (let i = 99; i >= 1; i--) {

  document.getElementById("mainBottle").innerHTML += `
      ${i} bottles of beer on the wall, ${i} bottles of beer.<br/>
      Take one down and pass it around, ${i - 1} bottles of beer on the wall.<br/><br/>
    `;
  }

}
