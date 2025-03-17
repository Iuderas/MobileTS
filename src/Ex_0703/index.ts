// EX 1
interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  motor?: string;
}

const meuCarro: Carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  motor: "1.8",
};

console.log(meuCarro);

// EX 2

interface Multiplicacao {
  (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => {
  return a * b;
};

console.log(multiplicar(2, 3));
console.log(multiplicar(4, 5));
console.log(multiplicar(10, 0));
console.log(multiplicar(-2, 3));

// EX 3

function inverterArray<T>(array: T[]): T[] {
  return array.reverse();
}

const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = inverterArray(numeros);
console.log(numerosInvertidos);

const strings = ["a", "b", "c", "d"];
const stringsInvertidas = inverterArray(strings);
console.log(stringsInvertidas);

// EX 4

interface Repositorio<T> {
  salvar(dado: T): void;
  obterTodos(): T[];
}

interface Usuario {
  nome: string;
  email: string;
}

class RepositorioUsuarios implements Repositorio<Usuario> {
  private usuarios: Usuario[] = [];

  salvar(dado: Usuario): void {
    this.usuarios.push(dado);
  }

  obterTodos(): Usuario[] {
    return this.usuarios;
  }
}

const repositorio = new RepositorioUsuarios();

repositorio.salvar({ nome: "João", email: "joao@example.com" });
repositorio.salvar({ nome: "Maria", email: "maria@example.com" });

console.log(repositorio.obterTodos());

// EX 5

type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log(`A resposta do servidor é uma string: ${resposta}`);
  } else if (typeof resposta === "boolean") {
    console.log(
      `A resposta do servidor é um booleano: ${
        resposta ? "verdadeiro" : "falso"
      }`
    );
  }
}

processarResposta("Sucesso!");
processarResposta(true);
processarResposta(false);

// EX 6

interface Estudante {
  nome: string;
  curso: string;
}

interface Trabalhador {
  empresa: string;
  cargo: string;
}

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
  nome: "João Silva",
  curso: "Engenharia da Computação",
  empresa: "TechCorp",
  cargo: "Desenvolvedor Júnior",
};

console.log(estudanteTrabalhador);
