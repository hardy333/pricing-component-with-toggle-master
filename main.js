const priceSwitcherBtn = document.querySelector(".price-switcher__btn");
const priceSwitcherLabel1 = document.querySelector(".price-switcher__label:first-child");
const priceSwitcherLabel2 = document.querySelector(".price-switcher__label:last-child");

priceSwitcherBtn.addEventListener("click", () => {
    priceSwitcherBtn.querySelector("span").classList.toggle("on");
    toggleActiveToLabels()
  
})
priceSwitcherLabel1.addEventListener("click", () => {
    priceSwitcherBtn.querySelector("span").classList.remove("on");
    toggleActiveToLabels()

})
priceSwitcherLabel2.addEventListener("click", () => {
    priceSwitcherBtn.querySelector("span").classList.add("on");
    toggleActiveToLabels()

})

function toggleActiveToLabels(){
    if(priceSwitcherBtn.querySelector("span").classList.contains("on")){
        priceSwitcherLabel1.classList.add("active");
        priceSwitcherLabel2.classList.remove("active");
        showMonth();
    }else{
        priceSwitcherLabel1.classList.remove("active");
        priceSwitcherLabel2.classList.add("active");
        showyear();
    }

    console.log(priceSwitcherLabel1)
console.log(priceSwitcherLabel2)
}



// const priceMonth = document.querySelector(".card__price--month");
// const priceYear = document.querySelector(".card__price--year");

const inners = document.querySelectorAll(".card__price-inner");
console.log(inners);


function showMonth(){
    inners.forEach(inner => {
        inner.classList.remove("change");
    })
}

function showyear(){
    inners.forEach(inner => {
        inner.classList.add("change");
    })
}