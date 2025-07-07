function expandBox(id) {
    document.getElementById("dropdown1").style.display = "none";
    document.getElementById("dropdown2").style.display = "none";
    document.getElementById("dropdown3").style.display = "none";

    document.getElementById("dropdown" + id).style.display = "block";

    let price = 0;
    if (id === 1) {
        price = 10.00;
    } else if (id === 2) {
        price = 18.00;
    } else if (id === 3) {
        price = 24.00;
    }
    document.getElementById("total-amount").textContent = price.toFixed(2);
}