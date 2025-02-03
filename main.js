


// Selfwork Oggetti 1
// Crea un oggetto persona con le seguenti caratteristiche:
// nome
// cognome
// eta'
// un metodo che permetta di salutare


let persona = {
    
    'nome' : `David`,
    'cognome' : `Paparo`,
    'età' : 37,
    'saluta_familiari' : function (familiare) {
        
        if (this.conoscenze.includes(familiare)) {
            console.log(`Ciao ${familiare}`);
        } else {
            console.log(`Non posso salutare ${familiare}, perchè non lo conosco`);
            
        }
        
    },
    'conoscenze' : [`Mariana`, `Giorgia`, `Giada`, `Riccardo`],
    
}


persona.saluta_familiari(`Giada`);

persona.saluta_familiari(`Piero`);

