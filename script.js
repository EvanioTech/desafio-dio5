class heroOne {
    constructor (nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
atacar (action) {
    if (action === "action") {
        return 'o ' + this.tipo + ' '+'atacou usando o(a) '+ this.ataque + '!'
    } else {
        return 'ataque negado';
    }
}

}


let infoHeroOne = new heroOne ("DarkNegro", 5297, "Mago", "Chuva de Raios das Trevas")

console.log(infoHeroOne.atacar("action"));
