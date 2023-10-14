class Ingresso{
    lote;
    preco = 20;

    constructor(lote){
        this.lote = lote;
    }
    
    mostrarPreco(){
        console.log(`O preco do ingresso é R$${this.preco}`);
    }
}

class IngressoNormal extends Ingresso{
    constructor(lote){
        super(lote);
    }
}

class IngressoVIP extends Ingresso{
    constructor(lote){
        super(lote);
        this.percental = 1;
        switch (lote) {
            case 'promocional':
                this.percental = 0.5;
                break;
            case 'primeiro':
                this.percental = 0.6;
                break;
            case 'segundo':
                this.percental = 0.7;
                break;
            case 'terceiro':
                this.percental = 0.8;
                break;
            }
        this.preco = this.preco + (this.preco*this.percental);
    }
}

// const ingresso = new Ingresso();
const ingressoNormal = new IngressoNormal('promocional');
const ingressoVIP = new IngressoVIP('terceiro');

// ingresso.mostrarPreco();
ingressoNormal.mostrarPreco();
ingressoVIP.mostrarPreco();
