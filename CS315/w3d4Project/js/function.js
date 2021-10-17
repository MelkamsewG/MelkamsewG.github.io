addToCArt = () => {
    let arrr = [];

}
const plusBtn = document.getElementById('plus');
plusBtn.addEventListener('click', function increase() {
    const inputBtn = document.getElementById('input').value;
    const newInputBtn = parseInt(inputBtn);
    const totalplus = newInputBtn + 1;
    document.getElementById('input').value = totalplus;
})

const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', function decrease() {
    const inputBtn = document.getElementById('input').value;
    const newInputBtn = parseInt(inputBtn);
    const totalminus = newInputBtn - 1;
    document.getElementById('input').value = totalplus;
})


function productCount(product) {
    const inputBtn = document.getElementById("input").value;
    const newInputBtn = parseInt(inputBtn);
    let total = newInputBtn + 1;
    if (product == true) {
        total = newInputBtn + 1;
    }
    if (product == false && newInputBtn > 0) {
        total = newInputBtn - 1;
    }
    document.getElementById("input").value = total;
    document.getElementById("quantity").innerText;
}
const buyBtn = document.getElementById("buy");
buyBtn.addEventListener("click", function() {
    const inputBtn = document.getElementById("input").value;
    const inputBtn = parseInt(inputBtn);
    const total = newInputBtn * 135;
    document.getElementById("totalprice").innerHTML = total;

})