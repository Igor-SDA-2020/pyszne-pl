const idBtn = document.getElementById('id-btn');
let order = {
    pizza: '',
    sosy: [],
    name: '',
    address: '',
    email: '',
    tel: '',
    text: ''
}
idBtn.addEventListener("click", takeOrder)
function takeOrder() {
    sprawdzanieSosow("sosy")
    const pomidorowy = document.getElementById('pomidorowy').checked
    const czosnkowy = document.getElementById('czosnkowy').checked
    const ostryPomidorowy = document.getElementById('ostryPomidorowy').checked
    order.sosy = [pomidorowy, czosnkowy, ostryPomidorowy]
    // albo:
    // order.sosy.push(pomidorowy)
    // order.sosy.push(czosnkowy)
    // order.sosy.push(ostryPomidorowy)    
    
    // pobieram imię i nazwisko z input 
    const nameC = document.getElementById('nameC').value
    order.name = nameC
    // pobieram email z input
    const email = document.getElementById('email').value
    order.email = email
    // pobieram telefon z input
    const tel = document.getElementById('tel')
    order.tel = tel
    // pobieram address
    const address = document.getElementById('address')
    order.address = address
    const msg = document.getElementById('msg').value
    order.text = msg
    console.log("tekeOrder -> nameC", order)

    let aa = ["Igor", "Khrystyna", "Roman"]
    aa.push



    console.log("takeOrder -> aa", aa)
}
function sprawdzanieSosow(nazwaKlasy) {
    const pobraneWszytkieSosyZinputu = document.getElementsByClassName(nazwaKlasy)
    for (let i = 0; i < pobraneWszytkieSosyZinputu.length; i++) {
        // console.log(pobraneWszytkieSosyZinputu[i])
        if (pobraneWszytkieSosyZinputu[i].checked === true) {
            console.log(pobraneWszytkieSosyZinputu[i].attributes)
        }
    }
}

// function dodawanie(a, b) {
//     let wynik = a + b
//     console.log(wynik)
// }
// dodawanie(5, 15)// dodawanie(2, 15)
// dodawanie(7, 1885)
// dodawanie(5, 88)
// dodawanie(7, 7)