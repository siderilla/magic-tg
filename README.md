<!-- 
// 1 - nel main creo una nuova istanza della classe e la assegno alla costante "service"
- creazione nuova istanza di classe >>> new NomeClasse()
- quando creata, questa istanza EREDITA i metodi definiti nella classe e di seguito è possibile invocarli

// 2 - definisco una funzione che si occuperà di richiamare il metodo get dell'istanza service

//// cos'è un metodo:
le proprietà contengono i dati degli oggetti
i metodi contengono le azioni che gli oggetti possono eseguire
i metodi sono funzioni definiti all'interno di una classe e ne descrive il comportamento
////

// 3 - invoca la funzione fetchData per iniziare il processo di fetch dei dati
fetchData();

// 4 - Definisce una funzione chiamata render che riceverà i dati (magicData) dall'API
// 5 - Questa funzione sarà utilizzata per gestire la visualizzazione dei dati nella pagina
function render(magicData) -->

<!-- Le proprietà statiche appartengono alla classe stessa, non alle singole istanze. Quindi, quando scrivi "static MAGIC_URL" all'interno della classe, quella proprietà diventa una proprietà del costruttore (MagicService) e non di ogni oggetto creato con la classe. Perciò, all'interno del metodo getData, se vuoi accedere a MAGIC_URL devi farlo tramite il nome della classe (MagicService.MAGIC_URL) oppure tramite this.constructor.MAGIC_URL. In questo modo il JavaScript sa dove cercare la proprietà, evitando l'errore "not defined". -->
perché preferire una proprietà statica?

/////////////////////////////////////////////////////////////

