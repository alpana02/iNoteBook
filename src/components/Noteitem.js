import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3"> 
            <div class="card my-3"> 
                <div class ="card-body">
                <h5 class ="card-title">{note.title}</h5>
                <p class ="card-text">{note.description}</p> 
                <i class="fas fa-trash-alt" onClick={()=>{deleteNote(note._id); 
                    props.showAlert("Deleted Successfully", "success")
                }}></i>
                <i class="fas fa-edit mx-3" onClick={()=>{updateNote(note._id)}}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem