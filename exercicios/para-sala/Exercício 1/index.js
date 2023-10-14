class InvoiceItem {
    #id;
    #description;
    #quantity;
    #unityPrice;
  
    constructor(id, description, quantity, unityPrice) {
      this.#id = id;
      this.#description = description;
      this.#quantity = quantity;
      this.#unityPrice = unityPrice;
    }

    get id(){
        return this.#id;
    }

    get description(){
        return this.#description;
    }

    get quantity(){
        return this.#quantity;
    }

    set quantity(quantity){
        this.#quantity = quantity;
    }

    get unityPrice(){
        return this.#unityPrice;
    }

    set unityPrice(unityPrice){
        this.#unityPrice = unityPrice;
    }

    get total(){
        return this.#unityPrice * this.#quantity;
    }

    InvoiceItemToString() {
        return `id = ${this.#id}, 
        description = ${this.#description}, 
        quantity = ${this.#quantity}, 
        unitPrice = ${this.#unityPrice}`;
      }
  }