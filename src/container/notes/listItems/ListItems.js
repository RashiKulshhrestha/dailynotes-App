import React from 'react';
import './ListItems.css';

function ListItems (props){
    const items = props.items;
    const listItems = items.map(item =>{
        return <div className = "list" key={item.key}>
            <textarea className="notes-content" type="text" id={items.key} value={item.note}
            onChange={(e) => {props.setUpdate(e.target.value,item.key)}} ></textarea>
            <button className="delete" onClick={ () => props.deleteItem(item.key)}></button>
        </div>
    })
    return(
        <div>{listItems}</div>
    )
}
export default ListItems;