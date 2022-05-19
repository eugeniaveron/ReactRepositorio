
export const productosData = [
    {
        id: '1',
        img: 'https://i.ibb.co/0Y6CnRK/manada3.jpg',
        title: 'GUASHA CORAZON',
        price: '1710',
        stock: '5',
        des: 'Piedra de cuarzo, para rituales faciales. Al ser suave y de tamaño mediano, es perfecta para optimizar y facilitar el masaje deseado'
    },

    {
        id: '2',
        img: 'https://i.ibb.co/bHk0Fb9/manada4.jpg',
        title: 'CESTO DE JUNCO',
        price: '2250',
        stock: '10',
        des: 'asdsdf'
    },

    {
        id: '3',
        img: 'https://i.ibb.co/44GMGK1/manada5.jpg',
        title: 'APOYA-COSAS',
        price: '1250',
        stock: '8',
        des: 'ñlasdf'
    },

    {
        id: '4',
        img: 'https://i.ibb.co/1nhLdxK/manada6.jpg',
        title: 'PORTA-MACETAS',
        price: '1250',
        stock: '2',
        des: 'ñlasdf'
    },
]

const prod = new Promise ((resp) =>{
    resp(productosData)
}, 2000)

export const getItem = () => {
    return prod
}