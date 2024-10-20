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
    console.log(result); //array di 6 objects
    //stringa vuota dove inserire il markup generato dal ciclo forEach
    let cards_elements = "";
    //ciclo forEach per accedere agli elementi dell'array
    result.forEach(element => {
        let {url, title} = element;
        //inserire la maiuscola ad ogni parola di title (stringa)
        //1) .split(): crea una array di stringhe, dove ogni parola è una singola stringa sulla quale possiamo agire
        let new_title = title.split(' ')
        //2) .map(): funzione dove per ogni stringa dell'array: charAt(0).toUpperCase() prende solo la prima lettera della parola e la mette maiuscola, poi con: + word.slice(1), aggiunge il resto delle lettere della parola (partendo da 1 (seconda lettera, la prima come abbaimo visto è 0))
        new_title = new_title.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        // 3) .join("") unisce tutte le stringhe in un'unica stringa, all'interno di un array
        new_title = new_title.join(' ');
        //creo il markup generato nell'html
        let markup = ` 
        <div class="col-20rem image">
            <img class="img" src="${url}" alt="">
            <img class="pin" src="./blog_assets_day1/img/pin.svg" alt="">
            <p class="card-text">${new_title}</p>
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






