export default class Cliente {
  #id: string | null;
  #nome: string;
  #idade: number | null;

  constructor(
    nome: string,
    idade: number | null = null,
    id: string | null = null
  ) {
    this.#nome = nome;
    this.#idade = idade;
    this.#id = id;
  }

  static vazio() {
    return new Cliente("");
  }

  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }

  get idade() {
    return this.#idade;
  }
}
