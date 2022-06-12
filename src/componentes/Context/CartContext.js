import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext (CartContext)



const CartContextProvider = ({children}) => {   
    const [cart, setCart] = useState ([])


    const isInCart = (id) => cart.find(p =>p.id === id)

    const addToCart = (producto, cantidad) => {
        const newCart = [ ...cart]

    const productoIsInCart = isInCart(producto.id)

    if(productoIsInCart) {
        newCart [
            newCart.findIndex(prod => prod.id === productoIsInCart.id)].quantity += cantidad

            setCart(newCart)
            return         
    }
    producto.quantity = cantidad
    setCart ([...newCart, producto]) 
    }

    const cartQuantity = () => {
        let quantity = 0
        cart.forEach((item) => {
            quantity = quantity + item.quantity
        })
        return quantity
    }

    const deleteFromCart = producto => {
        const newCart = [...cart]

        const productIsInCart = isInCart (producto.id)

        if(!productIsInCart){
            return
        }
        const deleteProduct = newCart.filter(prod => prod.id !== producto.id)
        setCart(deleteProduct)
    }

    const deleteCart =() => setCart([])

   

    console.log(cart)

    const context = {
        cart,
        addToCart,
        deleteFromCart,
        deleteCart,
        setCart,
        cartQuantity,
        
    }

    return <CartContext.Provider value ={context}>{""}{children}</CartContext.Provider>
}

export default CartContextProvider