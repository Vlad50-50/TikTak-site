const desatchasov = document.getElementById('desatchasov');
const chas = document.getElementById('chas');
const desat = document.getElementById('desat');
const min = document.getElementById('min');

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const tensOfHours = Math.floor(hours / 10);
    const singleHours = hours % 10;
    const tensOfMinutes = Math.floor(minutes / 10);
    const singleMinutes = minutes % 10;

    desatchasov.innerHTML = tensOfHours;
    chas.innerHTML = singleHours;
    desat.innerHTML = tensOfMinutes;
    min.innerHTML = singleMinutes;
    if (hours >= 17) {
        document.body.style.backgroundColor = 'rgb(49, 0, 0';
    } else {
        document.body.style.backgroundColor = '#e74c3c';
    }
}
updateTime(); 
setInterval(updateTime, 60000); 