const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const values = document.getElementById('values');
let count =0;
increase.onclick =function () {
    count++;
    values.textContent =count;
}
decrease.onclick =function () {
    count--;
    values.textContent =count;
}

reset.onclick =function() {
    count =0;
    values.textContent =count;
}