import banner from "../../assets/images/banner_PanchoRoss.png"

const ItemListContainer = ({texto}) => {
    return(
        <div>
            <img style={{width:"100%"}} src={banner} alt="Banner Pancho Ross"/>
            <h1 style={{marginTop: '20px', backgroundColor: 'black', color:'white'}}>{texto}</h1>
        </div>
    )
}

export default ItemListContainer