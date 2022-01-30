import {useState, createContext} from "react";
import { NormalMode } from "./NormalMode";
import { EditMode } from "./EditMode";
import {CardLoggedStyled} from "./CardLogged.styled";

interface IEditModeContext{
    editMode?: boolean
    toggleEdit?: () => void;
};

const EditModeInitialState = { editMode: false };

export const EditModeContext = createContext<IEditModeContext>(EditModeInitialState);

export default function UserLogged() {
    
    const [editMode, setEditMode] = useState(EditModeInitialState.editMode);

    const toggleEdit = () => {
        setEditMode(!editMode);
    }

    return(
      <EditModeContext.Provider value={{toggleEdit}}>
        <CardLoggedStyled>
            {!editMode ? 
                <NormalMode/> : 
                <EditMode/>}
         </CardLoggedStyled>
      </EditModeContext.Provider>
    );
}





