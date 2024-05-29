const menus = [];

for (let i = 1; i <= 4; i++) {
  let menu = document.getElementById(`menu${i}`);
  menus.push(menu);
}

document.addEventListener('click', (e) => {
  menus.map((menu) => {
    menu.classList.toggle('active', e.target.id === menu.id);
  })
})