let entryCount = document.querySelector("#entry-count");
let btnIncrement = document.querySelector("#btn-increment");
let btnSave = document.querySelector("#btn-save");
let saveCount = document.querySelector("#save-count");
let gunler = [];
let totalPeople = document.querySelector("#total-people");
let total = [];

let count = 0;

btnIncrement.addEventListener("click", function(){
    count += 1;
    entryCount.textContent = count;
})

btnSave.addEventListener("click", function(){
    saveCount.textContent += count + " - ";
    gunler.push(count);
    
    localStorage.setItem("gunSayac" , JSON.stringify(gunler));
    
    let toplam = 0;
    gunler.forEach( gunler => toplam += gunler )
    totalPeople.textContent = "Total People: " + toplam;
    
    total.push(toplam);
    localStorage.setItem("total", JSON.stringify(total));


    count = 0;
    entryCount.textContent = count;
    
})

let okuma = localStorage.getItem("gunSayac");
if(okuma !== null){
    let formatJs = JSON.parse(okuma);
    formatJs.forEach( (eleman)=>{
        saveCount.textContent += eleman + " - ";
        gunler.push(eleman);
    } )
}

let okuma2 = localStorage.getItem("total");
if(okuma2 !== null){
    let formatJs2 = JSON.parse(okuma2);
    totalPeople.textContent = "Total People: " + formatJs2[formatJs2.length - 1];
}