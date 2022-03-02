
const itens = [
    {
        id: 0,
        nome:'Camiseta',
        img: 'image.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome:'Short',
        img:'image.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome:'Sapato',
        img: 'image.jpg',
        quantidade: 0
    },
]
    inicializarLoja = () =>{
        let containerProdutos = document.getElementById('produtos');

        itens.map((val) => {
            console.log(val.nome);
                containerProdutos.innerHTML+= `

                <div class= "produto-single">
                    <img src="`+val.img+`"/>
                    <p>`+val.nome+`</p>
                    <a key="`+val.id+`" href= "#"> Adicionar ao carrinho</a>
                </div>
                `;
    })
}

inicializarLoja()

atualizarCarrinho = () => {
    let containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    itens.map((val) => {
       if(val.quantidade >0){
            containerCarrinho.innerHTML+= `
                <p>`+val.nome+` | Quantidade: `+val.quantidade+`</p>
                <hr>

            `;
       }
})
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        return false;
    })

}