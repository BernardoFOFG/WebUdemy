class Animal {}
class Cachorro extends Animal {
    falar() {
        return "Au au!"
    }
}
console.log(new Cachorro().falar())