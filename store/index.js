export const state = () => ({
    products: [
        {id: 10, name: 'Lorem Product', description: 'lorem ipsum products'},
        {id: 11, name: 'Lorem Product 2', description: 'lorem ipsum products'},
        {id: 12, name: 'Lorem Product 3', description: 'lorem ipsum products'},
        {id: 13, name: 'Lorem Product 4', description: 'lorem ipsum products'},
        {id: 14, name: 'Lorem Product 5', description: 'lorem ipsum products'}
    ],
});


export const getters = {
    getProductById: (state) => (id) => {
        return state.products.find( product => product.id == id);
    }
}

export const mutators = {
    addItem: (state, id) => {
        let item = state.products.find( product => product.id == id);
        state.products.push(item);
    }
}