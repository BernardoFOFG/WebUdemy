const tecnologia = new Map();

tecnologia.set("react", { framework: false });
tecnologia.set("angular", { framework: true });

console.log(tecnologia.react); // undefined
console.log(tecnologia.get("react")); // false

const chaveVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chaveVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chaveVariadas.has(123))
chaveVariadas.delete(123)
console.log(chaveVariadas.has(123))
console.log(chaveVariadas.size)

chaveVariadas.set(123, 'a')
chaveVariadas.set(123, 'b')
console.log(chaveVariadas)