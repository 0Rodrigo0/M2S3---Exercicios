const categoriaDeLivros = [
  {
    categoria: "Riqueza",
    livros: [
      {
        titulo: "Os segredos da mente milionária",
        autor: "T. Harv Eker",
      },
      {
        titulo: "O homem mais rico da babilônia",
        autor: "George S. Clason",
      },
      {
        titulo: "Pai rico, pai pobre",
        autor: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    categoria: "Inteligência Emocional",
    livros: [
      {
        titulo: "Você é insubstituível",
        autor: "Augusto Cury",
      },
      {
        titulo: "Ansiedade - Como enfrentar o mal do século",
        autor: "Augusto Cury",
      },
      {
        titulo: "Os 7 hábitos das pessoas altamente eficazes",
        autor: "Stephen R. Covey",
      },
    ],
  },
];

const todasCategorias = categoriaDeLivros.length;
console.log("Temos " + todasCategorias + " categoria(s).");
for (let categoria of categoriaDeLivros) {
  console.log(categoria.categoria);
}

for (let item of categoriaDeLivros) {
  console.log("Total de livros da categoria: ", item.categoria);
  console.log(item.livros.length);
}

function contaAutores() {
  let autores = [];

  for (let categorias of categoriaDeLivros) {
    for (let livros of categorias.livros) {
      if (autores.indexOf(livros.autor) == -1) {
        autores.push(livros.autor);
      }
    }
  }

  console.log("Total de autores: ", autores.length);
}

// Mostra livros do autor Augusto Cury
function mostraLivrosDoAugusto() {
  let livros = [];

  for (let categorias of categoriaDeLivros) {
    for (let livro of categorias.livros) {
      if (livro.autor === "Augusto Cury") {
        livros.push(livro.titulo);
      }
    }
  }

  console.log("Livros do autor: ", livros);
}

// Transforma a função numa função dinâmica que recebe o nome do autor e procura pelo parâmetro.
function mostraLivrosDoAutor(autor) {
  let livros = [];

  for (let categorias of categoriaDeLivros) {
    for (let livro of categorias.livros) {
      if (livro.autor === autor) {
        livros.push(livro.titulo);
      }
    }
  }

  console.log("Livros do autor: ", livros);
}

contaAutores();
mostraLivrosDoAugusto();
mostraLivrosDoAutor("T. Harv Eker");
