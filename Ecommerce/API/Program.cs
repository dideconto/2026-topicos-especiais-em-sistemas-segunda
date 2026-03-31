//CONTRUIR A APLICAÇÃO BASE
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

//Endpoints - ADICIONAR FUNCIONALIDADES NA APLICAÇÃO
//Requisição
// - URL
// - Método HTTP
app.MapGet("/", () => "API de Produtos!");
app.MapGet("/funcionalidade", () => "Segunda funcionalidade!");
app.MapPost("/funcionalidade", () => "Funcionalidade com POST");

//RODAR A APLICAÇÃO
app.Run();
