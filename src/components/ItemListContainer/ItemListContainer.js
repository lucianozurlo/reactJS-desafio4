import './ItemListContainer.css'
import ItemCount from './ItemCount/ItemCount';

const ItemListContainer = (props) => {

    const handleOnAdd = (quantity) => {
        alert(`Se agregaron ${quantity} productos `)
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            {/* {props.children.map(c => <div>{c}</div>)} */}
            <ItemCount initial={0} stock={5} onAdd={handleOnAdd} />
        </div>
    )
}

export default ItemListContainer