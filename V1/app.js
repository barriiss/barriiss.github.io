const kare = document.querySelectorAll(".kare");
const container = document.querySelector(".container");
const sayiYeri = document.querySelectorAll('.sayi');
const yenile = document.querySelector(".button");
const puanYeri = document.querySelector(".puan");
yenile.addEventListener("click", () => { location.reload(); })

class Fonksiyonlar {
    resimEkle(element) {
        var resim = document.createElement("img");
        resim.setAttribute("src", "ok.png");
        resim.setAttribute("width", "70px")
        element.appendChild(resim);
    }

    temizle() {
        sayiYeri.forEach(element => {
            element.style.display = "none";
        })
    }
}


class Oyun extends Fonksiyonlar {
    kordinat = {};
    butonlar = [];
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

    main() {
        this.temizle();
        let uzaklik = 0, puan = 100;
        this.kordinatEkle(3, 3);
        this.kordinatBelirle();
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
                    else{
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
    resimEkle(element) {
        var resim = document.createElement("img");
        resim.setAttribute("src", "ok.png");
        resim.setAttribute("width", "70px")
        element.appendChild(resim);
    }

    temizle() {
        sayiYeri.forEach(element => {
            element.style.display = "none";
        })
    }
}


function app() {
    const oyun = new Oyun();
    oyun.main();
}
app();
