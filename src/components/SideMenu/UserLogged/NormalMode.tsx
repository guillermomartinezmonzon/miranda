import {useContext} from "react";
import { useAuthState } from "../../../context";
import { GreenBtn } from "../../../styles/buttons/GrenBtn";
import {EditModeContext} from "./UserLogged";

export const NormalMode = () => {
     
  const { toggleEdit } = useContext(EditModeContext);
  const userDetails = useAuthState(); //read user details from context

  const handleEdit = () => {
     if(toggleEdit) toggleEdit();
  }

  return (
      <div>
          <img
            width="60"
            height="60"
              src="img/myface.jpg"
            alt=""
          />
          <h3>{userDetails && userDetails.user.name}</h3>
          <p>{userDetails.user.phone}</p>
          <h3>{userDetails.user.email}</h3>
          <p><GreenBtn onClick={handleEdit}>Edit</GreenBtn></p>  
      </div>
  )
}





