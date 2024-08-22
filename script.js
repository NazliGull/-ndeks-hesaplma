

const boy = document.querySelector(".boy");
const kilo = document.querySelector(".kilo");
const sonuc = document.querySelector(".calculate");
const remove = document.querySelector(".sıfırla");

const items = [
    {min : 0, max : 18.5  , index : "Zayıf" },
    {min : 18.5 , max : 24.9 , index : "Normal Ağırlıkta"},
    {min : 25 , max :29.9 , index : "Kilolu"},
    {min :30 , max : 34.9 , index : "1.derece obezite"},
    {min : 35 , max :39.9 , index : "2.derece obezite" },
    {min : 40 ,  max: Infinity , index : "3.derece obezite"},
]

const calculateFunc = () => {
    const boyValue = parseFloat(boy.value);
    const kiloValue = parseFloat(kilo.value);
    if(boyValue && kiloValue) {
        const indexValue =  kiloValue / (boyValue * boyValue);
        const getSonuc = items.find((item) => indexValue >= item.min && indexValue < item.max )
        sonuc.textContent = `Vücut Kitle İndeksin: ${ getSonuc.index}`;
    }
    else alert('Değer Giriniz')
}

sonuc.addEventListener("click", calculateFunc);


remove.addEventListener("click", () => {
    boy.value = "";
    kilo.value = "";
    sonuc.textContent = "Hesapla";
});