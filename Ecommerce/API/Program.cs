//CONTRUIR A APLICAÇÃO BASE
using API.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<Produto> produtos = new List<Produto>
{
    new Produto { Nome = "iPhone 14" },
    new Produto { Nome = "Samsung Galaxy S23" },
    new Produto { Nome = "PlayStation 5" },
    new Produto { Nome = "Xbox Series X" },
    new Produto { Nome = "Notebook Dell XPS 13" },
    new Produto { Nome = "Apple Watch Series 9" },
    new Produto { Nome = "Kindle Paperwhite" },
    new Produto { Nome = "GoPro Hero 12" },
    new Produto { Nome = "Sony WH-1000XM5" },
    new Produto { Nome = "Nintendo Switch" }
};

//Endpoints - ADICIONAR FUNCIONALIDADES NA APLICAÇÃO
//Requisição
// - URL
// - Método HTTP
//  - Listar/buscar (Retrive) dados: Método HTTP GET
//  - Cadastrar (Create) dados: Método HTTP POST
app.MapGet("/", () => "API de Produtos!");

//GET: /api/produto/listar
app.MapGet("/api/produto/listar", () =>
{
    //Configurar a resposta da requisição
    return produtos;
});

//POST: /api/produto/cadastrar
app.MapPost("/api/produto/cadastrar", 
    (Produto produto) =>
{
    produtos.Add(produto);
});

//RODAR A APLICAÇÃO
app.Run();


//Próximos passos'