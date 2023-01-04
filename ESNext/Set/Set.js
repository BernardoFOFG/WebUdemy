// não aceita repetição, e não é indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // vai ser ignorado pois já existe um valor chamado vasco

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // false
console.log(times.has('Vasco')) // true
times.delete('Flamengo')
console.log(times.has('Flamengo')) // false

