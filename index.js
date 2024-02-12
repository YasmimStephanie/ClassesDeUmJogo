class heros {
    constructor(name , age, type) {
        this.nome = name;
        this.age = age;
        this.type = type;
    }

    attack () {
        let typeAttack = ""
        if (this.type === "guerreiro") {
            typeAttack = "espada"
        } else if (this.type === "mago") {
            typeAttack = "magia"
        }  else if (this.type === "monge") {
            typeAttack = "artes marciais"
        } else if (this.type === "ninja") {
            typeAttack = "shuriken" 
        }
        return typeAttack }
}
let hero = new heros("alanzoka", "18", "mago");
let typeOfAttack = hero.attack();

let hero2 =new heros("megan", "19", "ninja")
let typeOfAttack2 = hero2.attack();

console.log(`O ${hero.type} atacou usando ${typeOfAttack}`);
console.log(`O ${hero2.type} atacou usando ${typeOfAttack2}`);