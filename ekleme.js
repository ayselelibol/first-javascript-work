let userName=document.querySelector("#myName")
isim= prompt("lutfen adınızı giriniz","orneğin:emre").toUpperCase()
userName.innerHTML=isim
if(!(isim.length>0)) {
alert("eksik bilgi girdiniz")
}

let kodluyoruz=document.querySelector("#kodluyoruz")
kodluyoruz.classList.add("img")
let merhaba= document.querySelector("#merhaba")
merhaba.classList.add("text1")
function guncel(){
let Datee= new Date()
let tarih= document.querySelector("#myClock")
let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
let saat= Datee.getHours()
let dakika= Datee.getMinutes()
let saniye= Datee.getSeconds()

let güncelgün= gunler[Datee.getDay()]
tarih.innerHTML= `${saat}:${dakika}:${saniye}  ${güncelgün}`
}
guncel();
setInterval(guncel,1000);

