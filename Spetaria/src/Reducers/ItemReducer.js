const initialState = {
    listaitem:[
        {
          id:1,
          idProduto:2,
          quantidade:3  
        }
    ]
};

const ItemReducer = (state = [], action) => {
    if(state.length == 0){
        return initialState;
    }
    return state;
}

export default ItemReducer;