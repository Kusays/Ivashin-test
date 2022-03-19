import { useState } from "react";

export function Note({ text, onDelete, onEdit }) {
    const [isEdit, setState] = useState(false);
    return (
        <div>
            
            {isEdit ? (<input defaultValue={text} onChange={onEdit}/>) : text}
            <button onClick={onDelete}>X</button>
            <button onClick={() => {
                setState(!isEdit)
            }}>✎</button>
        </div>
    )
}