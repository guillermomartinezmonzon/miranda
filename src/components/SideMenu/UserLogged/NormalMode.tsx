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
            src="https://cdn.schoolstickers.com/products/en/819/10MM_SMILE-03.png"
            alt=""
          />
          <h2>{userDetails && userDetails.user.name}</h2>
          <p>{userDetails.user.phone}</p>
          <h3>{userDetails.user.email}</h3>
          <p><GreenBtn onClick={handleEdit}>Edit</GreenBtn></p>  
      </div>
  )
}





