/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
BONUS:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. 
*/

Vue.config.devtools = true;
const root = new Vue (
    {
        el: '#root',
        data: {
            message:'Sono un titolo h1',
            imgSrc: 'https://www.limontasport.com/wp-content/uploads/2016/03/landscape-test.jpg',
        }
    }
);