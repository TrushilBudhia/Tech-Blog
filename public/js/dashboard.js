async function mouseOverHandler () {
    this.querySelector('.subtext').setAttribute('class', 'subtext display');
}

async function mouseOutHandler () {
    this.querySelector('.subtext').setAttribute('class', 'subtext no-display');
}

document.querySelectorAll('.dashboard-button').forEach(item => {
    item.addEventListener('mouseover', mouseOverHandler);
    item.addEventListener('mouseout', mouseOutHandler);
});
