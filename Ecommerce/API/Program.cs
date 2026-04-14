//CONTRUIR A APLICAÇÃO BASE
using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<Produto> produtos = new List<Produto>();
// {
//     new Produto { Nome = "iPhone 14" },
//     new Produto { Nome = "Samsung Galaxy S23" },
//     new Produto { Nome = "PlayStation 5" },
//     new Produto { Nome = "Xbox Series X" },
//     new Produto { Nome = "Notebook Dell XPS 13" },
//     new Produto { Nome = "Apple Watch Series 9" },
//     new Produto { Nome = "Kindle Paperwhite" },
//     new Produto { Nome = "GoPro Hero 12" },
//     new Produto { Nome = "Sony WH-1000XM5" },
//     new Produto { Nome = "Nintendo Switch" }
// };

//Endpoints - ADICIONAR FUNCIONALIDADES NA APLICAÇÃO
//Requisição
// - URL
// - Método HTTP
// - Parâmetros/Informações/Dados (Opcional)
//  - Listar/buscar (Retrive) dados: Método HTTP GET
//  - Cadastrar (Create) dados: Método HTTP POST

//Resposta
// - Código de Status HTTP
// - Informações/Dados (Opcional)
app.MapGet("/", () => "API de Produtos!");

//GET: /api/produto/listar
app.MapGet("/api/produto/listar", () =>
{
    if(produtos.Any())
    {
        //Configurar a resposta da requisição
        return Results.Ok(produtos);
    }
    return Results.NotFound("Lista de produtos vazia!");
});

//POST: /api/produto/cadastrar
app.MapPost("/api/produto/cadastrar", 
    ([FromBody] Produto produto) =>
{
    //Não permitir o cadastro de um produto com o mesmo nome
    for(int i = 0; i < produtos.Count; i++)
    {
        if(produtos[i].Nome == produto.Nome)
        {
            return Results.Conflict("Esse produto já existe!");
        }
    }
    produtos.Add(produto);
    return Results.Created("", produto);
});

//GET: /api/produto/buscar/{id}
app.MapGet("/api/produto/buscar/{id}", 
    ([FromRoute] string id) =>
{
    foreach(Produto produtoCadastrado in produtos)
    {
        if(produtoCadastrado.Id == id)
        {
            return Results.Ok(produtoCadastrado);
        }
    }
    return Results.NotFound("Produto não encontrado!");
});

//RODAR A APLICAÇÃO
app.Run();