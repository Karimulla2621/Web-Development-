const counterEl=document.querySelector(".counter");
function increment(){
    counterEl.textContent=parseInt(counterEl.textContent)+1;
}
function decrement(){
        counterEl.textContent= parseInt(counterEl.textContent)-1;
        if (counterEl.text > 0) {
        }else {
        alert("Minimum value is zero") }
};