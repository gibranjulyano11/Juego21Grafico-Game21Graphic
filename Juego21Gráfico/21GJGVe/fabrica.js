class Fabrica {
    constructor() {
        
        //se crea las cartas y en este array se guarda las cartas creadas en orden
        this.mazo = [];
        //mazo de cartas mezclado aqui se ingresa una por una las cartas
        this.mazoMezclado = [];
        //creas 4 instancias de la clase palo
        this.palo = [new Palo("♣"), new Palo("♠"), new Palo("♥"), new Palo("♦")];
        this.texto = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        //Se pone la ruta para colocar las imagenes
        this.imagenes = ['cartas/trebol/TA.png', 'cartas/trebol/T2.png', 'cartas/trebol/T3.png', 'cartas/trebol/T4.png', 'cartas/trebol/T5.png', 'cartas/trebol/T6.png',
        'cartas/trebol/T7.png', 'cartas/trebol/T8.png', 'cartas/trebol/T9.png', 'cartas/trebol/T10.png', 'cartas/trebol/TJ.png', 'cartas/trebol/TQ.png', 'cartas/trebol/TK.png',
        'cartas/corazon negro/CNA.png', 'cartas/corazon negro/CN2.png', 'cartas/corazon negro/CN3.png', 'cartas/corazon negro/CN4.png', 'cartas/corazon negro/CN5.png', 'cartas/corazon negro/CN6.png', 'cartas/corazon negro/CN7.png',
        'cartas/corazon negro/CN8.png', 'cartas/corazon negro/CN9.png', 'cartas/corazon negro/CN10.png', 'cartas/corazon negro/CNJ.png', 'cartas/corazon negro/CNQ.png', 'cartas/corazon negro/CNK.png', 'cartas/corazon rojo/CRA.png',
        'cartas/corazon rojo/CR2.png', 'cartas/corazon rojo/CR3.png', 'cartas/corazon rojo/CR4.png', 'cartas/corazon rojo/CR5.png', 'cartas/corazon rojo/CR6.png', 'cartas/corazon rojo/CR7.png', 'cartas/corazon rojo/CR8.png', 'cartas/corazon rojo/CR9.png',
        'cartas/corazon rojo/CR10.png', 'cartas/corazon rojo/CRJ.png', 'cartas/corazon rojo/CRQ.png', 'cartas/corazon rojo/CRK.png', 'cartas/brillo/BA.png', 'cartas/brillo/B2.png', 'cartas/brillo/B3.png', 'cartas/brillo/B4.png', 'cartas/brillo/B5.png',
        'cartas/brillo/B6.png', 'cartas/brillo/B7.png', 'cartas/brillo/B8.png', 'cartas/brillo/B9.png', 'cartas/brillo/B10.png', 'cartas/brillo/BJ.png', 'cartas/brillo/BQ.png', 'cartas/brillo/BK.png'
        ];
    }

    crearMazo() {
        var valor = [0]
        var i = 0;
            this.palo.forEach(element => {
                this.texto.forEach(element2 => {
                    if (element2 == "A") {
                        valor = [1, 11]

                    } else if (element2 == "J" || element2 == "Q" || element2 == "K") {
                        valor = [10];
                    } else {
                        //tranformar elemtonto2 que esta en string a entero
                        valor = [parseInt(element2)];
                    }

                    let carta = new Carta(element2, element.nombre, valor, this.imagenes[i]);
                    i++;
                    //guarda la carta creada en el mazo
                    this.mazo.push(carta);
                })
            })
        return this.mazo
    }

    mezclarCarta() {
//this.mazo.length; ES PARA SABER EL TAMAÑO DEL ARREGLO CUANTOS ELEMENTOS TIENE
        let cantidadBaraja = this.mazo.length;
        this.mazo.forEach((item) => {

           let posicionAleatoria = Math.floor(Math.random() * cantidadBaraja);
            
             item =this.mazo[posicionAleatoria];
             this.mazoMezclado.push(item);
        });

        return this.mazoMezclado;
    }

    pedirCarta(mazoActual) {
        let carton = mazoActual.pop();
        console.log(carton)
        document.getElementById('cartas').src=carton.imagen;
        puntajes.push(carton.valor[0]);
    }

    validarCarta(){
        //SUMA TODOS LOS NUMEROS QUE ESTAN DENTRO DEL ARRAY
        puntajes.forEach ( function(numero){
            suma += numero;
        });
        document.getElementById('puntaje').innerHTML='LAS SUMA ES:  '+suma;
        if (suma>21) {
            alert('PERDISTE');
        }else{
            alert('GANASTE')
        }
    }
}