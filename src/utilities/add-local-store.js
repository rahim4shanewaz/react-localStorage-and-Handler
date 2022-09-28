const adToDb = (id) => {

    let shoppingCart;
   

    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        console.log(storedCart)
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    
    }

    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));





    // single item added in local storage

    // const quantity = localStorage.getItem(id)
    //     if(quantity){
    //         const newQuantity = parseInt(quantity) + 1;
    //         localStorage.setItem(id, newQuantity)
    //     }
    //     else{
    //         localStorage.setItem(id, 1)
    //     }
}

const removeFromCart = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
    


}


export {adToDb, removeFromCart}