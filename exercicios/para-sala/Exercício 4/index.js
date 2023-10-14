class Ingresso{
    preco = 20;

    mostrarPreco(){
        console.log(`O preco do ingresso é R$${this.preco}`);
    }
}

class IngressoNormal extends Ingresso{}

class IngressoVIP extends Ingresso{
    preco = this.preco + (this.preco*0.5);
    // constructor() {
    //     super();
    //     this.preco = 24;
    //   }
}

const ingresso = new Ingresso();
const ingressoNormal = new IngressoNormal();
const ingressoVIP = new IngressoVIP();

ingresso.mostrarPreco();
ingressoNormal.mostrarPreco();
ingressoVIP.mostrarPreco();
