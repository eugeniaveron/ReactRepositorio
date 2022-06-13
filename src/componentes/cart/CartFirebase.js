import React, { useEffect, useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Modal from './Modal';

const CartFirebase = () => {

    const { cart, } = useCartContext()
    //useState para guardar datos del usuario
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [confMail, setConfMail] = useState('')
    //useState para ventana modal
    const [openModal, setOpenModal] = useState(false)
    //useState para guardar id de compra
    const [idCompra, setIdCompra] = useState("")
    //validaciones para formulario
    const mailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

    const handleSubmit = (e) =>{
      e.preventDefault()

      const buyer = {name, surName, phone, mail, confMail,
    }
      console.log(buyer)
    }
    
    useEffect(() => {
        console.log(cart)
    }, [cart])
    
    const cartItems = async () =>{
    //generación de orden con id, datos de clientes y productos
      const buyer = {
        name: name,
        surName: surName,
        phone: phone,
        mail: mail,
        confMail: confMail
      }        
      const Order = {
        buyer: buyer,
        items: cart,                       
      }
        console.log(Order)

        const db = getFirestore()
        const itemsCollection = collection(db, 'Orders')

      addDoc( itemsCollection, Order).then(({id}) => setIdCompra(id))
    } 
  return (
  <>
  <div className='p-40'>    
  {/* Formulario */}
    <div >
      <div>
        <h1 className=' flex font-medium font-2xl tracking-wider border-b-2 border-t-2 border-gris text-metal p-3 '>DETALLES DE FACTURACION</h1>
      </div>
      <div>
        <h2 className=' flex  text-xs tracking-wider  p-3 '>Solicitamos únicamente la información esencial
        para la finalización de la compra.</h2>
      </div>
      <div >
        <form onSubmit={handleSubmit} className='grid gap-2' >
          <input className='focus:outline-none border-b border-gray shadow-sm px-2 p-4 w-full' type="text" value= {name} onChange ={(e)=> setName(e.target.value)} placeholder = "Nombre" required ></input>
          <input className='border-b focus:outline-none border-gray  shadow-sm px-2 p-4 w-full' type="text" value= {surName} onChange ={(e)=> setSurName(e.target.value)} placeholder = "Apellido" required ></input>
          <input className='border-b focus:outline-none border-gray  shadow-sm px-2 p-4 w-full' type="tel" value= {phone} onChange ={(e)=> setPhone(e.target.value)} placeholder = "Telefono" required ></input>
          <input className='border-b focus:outline-none border-gray  shadow-sm px-2 p-4 w-full' type="mail" value= {mail} onChange ={(e)=> setMail(e.target.value)} placeholder = "Mail" required ></input>
          <input className='border-b focus:outline-none border-gray  shadow-sm px-2 p-4 w-full' type="mail" value= {confMail} onChange ={(e)=> setConfMail(e.target.value)} placeholder = "Confirmar Mail" required ></input>  
        </form>
      </div>
  {/* Si se validan los datos del formulario, se procede con la compra*/}
      {name && surName && phone && (mail === confMail) && phoneRegex.test(phone) && mailRegex.test(mail, confMail)
      ? (  
      <button onClick={() => { cartItems(); setOpenModal(true) }} className=" mt-5 bg-verdei p-3 text-sm mt-3  font-medium shadow-md mt-6 text-white hover:text-gris">FINALIZAR COMPRA</button>
      ):(
        console.log('datos incorrectos')
      )
  }
    </div>

    {/* Modal*/}
    <div>
      <Modal open={openModal} buyer={name} id={idCompra} mail={mail}  />
    </div>   
  </div>
  </>
  )
}

export default CartFirebase
