main();

function main() {
    const nodeSet = getNodes();
    nodeSet.btn.addEventListener('click', function() {
        const colorSet = getRandomRgb();
        const rgb = `rgb(${colorSet.r}, ${colorSet.g}, ${colorSet.b})`;
        nodeSet.h1.innerText = rgb;
        document.body.style.backgroundColor = rgb;
    });
}

function getNodes() {
    const h1 = document.querySelector('h1');
    const btn = document.querySelector('button');
    return { h1, btn };
}

function getRandomRgb() {
    const getColor = () => Math.floor(Math.random() * 256);
    return { r: getColor(), g: getColor(), b: getColor() };
}