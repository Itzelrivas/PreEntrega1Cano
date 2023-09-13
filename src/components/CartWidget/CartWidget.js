import logoNegro from "../../assets/images/logoNegro_PanchoRoss.png";

const CartWidget = ({numero}) =>{
    return(
        <div>
            <img style={{width:"8%"}} src={logoNegro} alt="Logo Pancho Ross"/>
            <p style={{fontFamily: 'monospace'}}>{numero} Productos en 🛒</p>
        </div>
    )
}

export default CartWidget