import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const imgRojo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6DAKop9hlHmWsJiQeSrSdXIYrsx9uVS-oxZmbLwH&s"
    return (
        <>
        <h2 className = 'saludo' >{props.greeting}</h2>
        <img className = 'imgRojo' src={imgRojo} alt="" />
        </>
        

    )
}

export default ItemListContainer