import {useContext, useState} from "react";
import { useAuthDispatch, useAuthState } from "../../../context";
import { GreenBtn } from "../../../styles/buttons/GrenBtn";
import {EditModeContext} from "./UserLogged";

export const EditMode = () => {
  const dispatch = useAuthDispatch(); // read dispatch method from context
  const userDetails = useAuthState(); //read user details from context
  const [inputName, setInputName] = useState(userDetails.user.name)
  const [inputEmail, setInputEmail] = useState(userDetails.user.email)

  const { toggleEdit } = useContext(EditModeContext);
    
  function handleEdit() {
      console.log("handleEdit"); 
      try {
          if (!inputName || !inputEmail) {
             alert("Name or email empty")
             return
          } else {
             const data = {
                name: inputName,
                email: inputEmail,
             }
             dispatch({ type: "CHANGE_USER", payload: data });
             if (toggleEdit) toggleEdit();
          }  
    } catch (error) {
      console.log(error);
    }
  };

  return (
        <div>
            <label>Nombre</label>
            <p></p>
            <input 
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
            />
            <p></p>
            <label>Email</label>
            <p></p>
            <input
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
            />
            <p></p>
            <GreenBtn onClick={handleEdit}>Guardar</GreenBtn>
        </div>
  );

}
