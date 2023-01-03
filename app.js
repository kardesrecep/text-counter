const karakterSay = () => { 

    const sayac=document.querySelector(".sayac");
    const giris=document.querySelector("#giris")
    const resetBtn=document.querySelector("#sil")
    const mesaj=document.querySelector(".msj")

    giris.addEventListener("input",()=>{
        mesaj.innerHTML = "";
        sayac.innerHTML = giris.value.length;
    })

    resetBtn.addEventListener("click",()=>{
        sayac.innerHTML = "0";
        karakterSay();
    })

    setTimeout(()=>{
        if(giris.value) return;
        mesaj.innerHTML = "<b>Write Me!</b>";
    },3000)
 }


 karakterSay();