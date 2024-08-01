let hidden = Array.from(document.querySelectorAll('*')).filter((e) => e.outerHTML === `<div style="background-color: var(--blue); height: 100%; position: absolute; right: 0px; top: 0px; width: 100%;"></div>`;
let answers = [];
hidden.map((e) => answers.push(e.previousSibling.innerHTML));
for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.color = 'pink';
    hidden[i].innerHTML = answers[i];
}
setInterval(() => {
    hidden.filter((e) => e.style.width === '0%').map((e) => e.innerHTML = null);
}, 1);
