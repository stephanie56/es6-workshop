const getAlert = () => {
  let buttons = document.getElementsByTagName('input');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => alert(i);
  }
}

window.onload = getAlert;