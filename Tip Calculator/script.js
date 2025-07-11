let bill = document.getElementById("billinput");
let Tip = document.getElementById("tipPer");
let Total = 0;

document.getElementById("button").onclick = function () {
    let billval = parseFloat(bill.value);
    let Tipval = parseFloat(Tip.value);
    Total = billval * Tipval/100 ;

   let  final = Total + billval;
    document.getElementById("answer").innerHTML=` <h4>Your Total Bill : ${final}</h4>`;
}