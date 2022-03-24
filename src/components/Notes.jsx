import React, {useState} from "react"
import List from "./List"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function Notes(){
    const [note, setNote] = useState({
        Title: "",
        Content: ""
    })
    const [Add, setAdd] = useState([])

    const [expand, isExpand] = useState(false)

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })

    }   

    function addItem(){
        setAdd(prevValue =>{
            return [
                ...prevValue,
                note.Title + ("\n\n") + note.Content
            ]
        })
        setNote({
            Title: "",
            Content: ""
        })
    }
    
    function deleteItem(id){
        setAdd(prevValue =>{
            return prevValue.filter((Add, id_item)=>{
                return id_item !== id;
            }) 
        })
    }

    function Expand(){
        isExpand(true)
    }

    return(
        <div>
            <div className="form">
            <input name="Title" placeholder="Title" onClick={Expand} onChange={handleChange} value={note.Title}></input> 
            {expand && (
            <textarea name="Content" placeholder="Content" onChange={handleChange} rows = {expand ? 3 : 1} value = {note.Content}></textarea>)}
            <Zoom in = {expand}>
            <Fab onClick = {addItem}><AddIcon/></Fab>
            </Zoom>
            </div>
        <div> 
            {Add.map((noteItem, id_item) =>(
                <List key = {id_item} id = {id_item} Title = {noteItem} delete = {deleteItem} ></List>
                ))}      
        </div>

        </div>
        
    )
}

export default Notes;