const getAlert = () => {
  let buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => alert(i);
  }
}

window.onload = getAlert;