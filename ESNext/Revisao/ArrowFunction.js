// Arrow Function
const soma = (a, b) => a + b // quando não há chaves o return fica implicito
console.log(soma(3, 4))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()