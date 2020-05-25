const initialState = {
    listaitem:[
        {
          id:1,
          idProduto:1,
          quantidade:1,
          valor:1
        } 
    ],
    quantidade:1,
    valor:10.50,
    idproduto:1,
    nome:1,
    descricao:1
};

const ItemReducer = (state = [], action) => {
    if(state.length == 0){
        return  {...state,initialState};
    }
    if(action.type == 'adicionarItemLista'){
        return  {...state, listaitem:action.payload.listaitem};
    }
    if(action.type == 'editQuantidade'){
        return  {...state, quantidade:action.payload.quantidade};
    }
    if(action.type == 'editValor'){
        return  {...state, valor:action.payload.valor};
    }
    if(action.type == 'editIdProduto'){
        return  {...state, idproduto:action.payload.idproduto};
    }
    if(action.type == 'editNome'){
        return  {...state, nome:action.payload.nome};
    }
    if(action.type == 'editDescricao'){
        return  {...state, descricao:action.payload.descricao};
    }
    return state;
}

export default ItemReducer;