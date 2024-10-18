/* 
CONSEGNA
Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)       //FATTO

Milestone 2
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.            //FATTO

Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!         //FATTO

Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata          //FATTO
*/

axios.get ("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(response => {
    let result = response.data;
    /* console.log(result); */ //array di 6 objects
    //stringa vuota dove inserire il markup generato dal ciclo forEach
    let cards_elements = "";
    //ciclo forEach per accedere agli elementi dell'array
    result.forEach(element => {
        let {url, title} = element;
        //creo il markup generato nell'html
        let markup = ` 
        <div class="col-20rem">
            <img class="img" src="${url}" alt="">
            <img class="pin" src="./blog_assets_day1/img/pin.svg" alt="">
            <p class="card-text">${title}</p>
        </div>
        `
        //inserimento del markup nell stringa vuota (+= così si sommano ad ogni iterazione del ciclo)
        cards_elements += markup; 
        //accedo all'elemento della dom da modificare
        let row = document.querySelector(".row")
        //modifico l'elemento della dom
        row.innerHTML = cards_elements;
    });
})






