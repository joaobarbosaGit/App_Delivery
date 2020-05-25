export const editListaItem = (item) => {
    return {
        type: 'adicionarItemLista',
        payload: listaitem.push(item)
    }
}
export const editQuantidade = (quantidade) => {
    return {
        type: "editQuantidade",
        payload: {
            quantidade: quantidade
        }
    }
}
export const editValor = (valor) => {
    return {
        type: "editValor",
        payload: {
            valor: valor
        }
    }
}
export const editIdProduto = (idproduto) => {
    return {
        type: "editIdProduto",
        payload: {
            vaidprodutolor: idproduto
        }
    }
}
export const editNome = (nome) => {
    return {
        type: "editNome",
        payload: {
            nome: nome
        }
    }
}
export const editDescricao = (descricao) => {
    return {
        type: "editDescricao",
        payload: {
            descricao: descricao
        }
    }
}