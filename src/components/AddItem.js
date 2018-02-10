import React from 'react'

const style = {
    alignSelf: 'center'
}

export default function AddItem({addItem}) {
    return <form
    style={style} 
    className="add-choice"
    onSubmit={(e) => {
        e.preventDefault()
        const item = e.target.item.value;
        if(!item) {
            return
        }
        e.target.item.value = ""
        addItem(item)
    }}
    >   
        <p>Add Item to hat</p>
        <input type="text" name="item" />
        <input type="submit" value="add"/>
    </form>
}