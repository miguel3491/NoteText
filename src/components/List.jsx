import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

function List(props){

    function handleClick(){
        props.delete(props.id)
    }
    return(
        <div className="note">
            <p>{props.Title}</p>
            <Fab onClick = {handleClick}><DeleteIcon/></Fab>
        </div>
    )
}

export default List;