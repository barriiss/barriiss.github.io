const kare = document.querySelectorAll(".kare");
const sayiYeri = document.querySelectorAll('.sayi');
const baslatButon = document.querySelector(".btn-baslat");
const puanYeri = document.querySelector(".puan");
const nasilButon = document.querySelector(".btn-nasil");

nasilButon.addEventListener("click", () => {
    document.querySelector(".nasil-oynanir").style.display = "block";
    document.querySelector(".butonlar").style.display = "none";
})

baslatButon.addEventListener("click", () => {
    location.reload();
})

class Fonksiyonlar {
    kordinatEkle(satir, sutun) {
        let index = 0;
        for (let y = 0; y < sutun; y++) {
            for (let x = 0; x < satir; x++) {
                kare[index].setAttribute("x", x);
                kare[index].setAttribute("y", y)
                index++;
            }
        }
    }

    kordinatBelirle() {
        const x = Math.floor(Math.random() * 3);
        const y = Math.floor(Math.random() * 3);
        const kordinat = {
            "x": x,
            "y": y
        }
        this.kordinat = kordinat;
    }
    resimEkle(element) {
        var resim = document.createElement("img");
        resim.setAttribute("src", "ok.png");
        resim.setAttribute("width", "60px")
        element.appendChild(resim);
    }

    temizle() {
        sayiYeri.forEach(element => {
            element.style.display = "none";
        })
    }

    baslat() {
        this.temizle();
        this.kordinatEkle(3, 3);
        this.kordinatBelirle();
    }
}

class Oyun extends Fonksiyonlar {
    kordinat = {};
    butonlar = [];

    main() {
        let uzaklik = 0, puan = 100;
        this.baslat();
        kare.forEach(element => {
            element.addEventListener("click", () => {
                let x = Number(element.getAttribute("x")), y = Number(element.getAttribute("y"));
                let kordinatX = Number(this.kordinat["x"]), kordinatY = Number(this.kordinat["y"]);
                if (x == kordinatX & y == kordinatY) {
                    this.temizle();
                    this.resimEkle(element);
                    puanYeri.innerHTML = puan;
                    kare.forEach(buton => {
                        buton.disabled = true;
                    });
                }
                else {
                    if (this.butonlar.includes(element)) {
                    }
                    else {
                        this.butonlar.push(element);
                        puan -= 10;
                    }
                    uzaklik = Math.abs(kordinatX - x) + Math.abs(kordinatY - y);
                    element.firstChild.innerHTML = uzaklik;
                    element.firstChild.style.display = "block";
                }
            });
        })
    }
}

function app() {
    const oyun = new Oyun();
    oyun.main();
}

app();

