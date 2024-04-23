
const btnCarga = document.getElementById('btnCarga');

//Este vai ser o contador de páxinas, xa que esta API ten moitos resultados nos que devolven 20 elementos por páxina.
let contador = 1;

//Evento que vai suceder ó premer sobre o botón de cargar datos.
btnCarga.addEventListener('click', () => {

    //Chamada á función creada abaixo pasándolle como parámetro a páxina actual.
    cargaAPI(contador);

    let contidoBotons = document.getElementById('contidoBotons');

    //Unha vez premido o botón de cargar datos, creo os botóns para avanzar ou retroceder o número da páxina.
    let btnAnterior = document.createElement('button');
    btnAnterior.textContent = "Páxina anterior";
    btnAnterior.disabled = true;
    btnAnterior.classList = "btn btn-warning p-3 m-3";


    let btnSiguiente = document.createElement('button');
    btnSiguiente.textContent = "Páxina seguinte";
    btnSiguiente.classList = "btn btn-success p-3 m-3";

    let numPaxinas = document.createElement('h4');

    contidoBotons.appendChild(btnAnterior);
    contidoBotons.appendChild(btnSiguiente);
    contidoBotons.appendChild(numPaxinas);

    //Oculto o botón de carga.
    btnCarga.style.display = "none";

    /*Doulle funcionalidade ós botón recén creados, depende do botón pulsado incrementará ou decrementará o contador da páxina, tamén se
    o número de páxina é 1 ou a páxina é a última da API, desactivo os botóns acordes.*/
    btnSiguiente.addEventListener('click', () => {
        contador++;
        if (contador == 1)
            btnAnterior.disabled = true
        else if (contador > 1)
            btnAnterior.disabled = false;

        if (contador == 42)
            btnSiguiente.disabled = true
        else if (contador > 1)
            btnSiguiente.disabled = false;

        cargaAPI(contador);
    })

    btnAnterior.addEventListener('click', () => {
        contador--;
        if (contador == 1)
            btnAnterior.disabled = true
        else if (contador > 1)
            btnAnterior.disabled = false;

        if (contador == 42)
            btnSiguiente.disabled = true
        else if (contador > 1)
            btnSiguiente.disabled = false;

        cargaAPI(contador);
    })

    // Función para chamar á API cun parámetro que será o número da páxina a mostrar.
    function cargaAPI(contador) {
        const url = `https://rickandmortyapi.com/api/character?page=${contador}`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const contido = document.getElementById('contido');
                const enunciado = document.getElementById('enunciados');

               // Limpo o contido anterior para mostrar o novo.
               contido.innerHTML = "";

               //Obteño o número de páxinas que ten a API.
               $numeroDePaxinas = data.info.pages;
               //Mostro a páxina actual das páxinas que hai.
               numPaxinas.textContent = `Páxina ${contador} de ${$numeroDePaxinas}`;

                contido.style.display = 'flex';
                enunciado.style.display = 'flex';
                //Percorro os datos recibidos.
                data.results.forEach(personaxe => {
                    /*Creo un array cos nomes das propiedades o obxecto e itero sobre eles cun map para crear un div para cada un,
                    faría unha táboa cas filas e columnas, pero no enunciado entendín que habia que facer un grid con bootstrap*/
                    const divs = ['name', 'status', 'species', 'gender', 'location'].map(prop => {
                        const div = document.createElement('div');
                        //Cun ternario comprobo que a propiedade obtida non é location, por si é teño que acceder con 'doble key'.
                        div.textContent = prop === 'location' ? personaxe[prop]['name'] : personaxe[prop];
                        div.classList = 'col-md-2 p-5';
                        if (prop === 'location') div.textContent = personaxe[prop]['name'];
                        return div;
                    });
                    //Cada elemento ten unha imaxe, así que creo os novos elementos img cas propiedades axeitadas e as emgado ó div co id contido.
                    const imaxe = document.createElement('img');
                    imaxe.width = "100";
                    imaxe.src = personaxe['image'];
                    const divImaxe = document.createElement('div');
                    divImaxe.classList = 'col-md-2';
                    divImaxe.appendChild(imaxe);
                    contido.append(...divs, divImaxe);
                });
            })
            .catch(error => {
                alert('Ups! Parece que hai algún problema ó intentar cargar os datos', error);
            });
    }
})
