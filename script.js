function cadastraCliente(){
    let nome = document.getElementById('usuario-nome');
    let cpf = document.getElementById('usuario-cpf');
    let email = document.getElementById('usuario-email');
    let telefone = document.getElementById('usuario-telefone');
    let cep = document.getElementById('cep');
    let rua = document.getElementById('rua');
    let numero = document.getElementById('numero');
    let complemento = document.getElementById('complemento');
    let cidade = document.getElementById('cidade');
    let estado = document.getElementById('estado');

    let clientes = JSON.parse(localStorage.getItem("clientes-cadastrados"));

    if(clientes == null){
        localStorage.setItem("clientes-cadastrados", "[]");
        clientes = [];
    }

    var Registro = {
        nome: nome.value,
        cpf: cpf.value,
        email: email.value,
        telefone: telefone.value,
        cep: cep.value,
        rua: rua.value,
        numero: numero.value,
        complemento: complemento.value,
        cidade: cidade.value,
        estado: estado.value,
        
    }
    
    clientes.push(Registro);

    localStorage.setItem("clientes-cadastrados", JSON.stringify(clientes));
    alert("Email inscrito com sucesso!")
    nome.value = "";
    cpf.value = "";
    email.value = "";
    telefone.value = "";
    cep.value = "";
    rua.value = "";
    numero.value = "";
    complemento.value = "";
    cidade.value = "";
    estado.value = "";
}

function cadastraProduto(){
    let nomeProduto = document.getElementById('produto-nome');
    let categoria = document.getElementById('produto-categoria');
    let marca = document.getElementById('produto-marca');
    let qntdProdutos = document.getElementById('qntd-produtos');
    

    let produtos = JSON.parse(localStorage.getItem("produtos-cadastrados"));

    if(produtos == null){
        localStorage.setItem("produtos-cadastrados", "[]");
        produtos = [];
    }

    var RegistroProdutos = {
        nomeProduto: nomeProduto.value,
        categoria: categoria.value,
        marca: marca.value,
        quantidadeProdutos: qntdProdutos.value,
        
        
    }
    
    produtos.push(RegistroProdutos);

    localStorage.setItem("produtos-cadastrados", JSON.stringify(produtos));
    alert("Produtos cadastrados com sucesso!")
    nomeProduto.value = "";
    Categoria.value = "";
    marca.value = "";
    quantidadeProdutos.value = "";
    


}

