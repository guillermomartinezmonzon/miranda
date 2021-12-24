import {useContext} from "react";
import { Navigate } from "react-router";
import { logout, useAuthDispatch, useAuthState } from "../../../context";
import { GreenBtn } from "../../../styles/buttons/GrenBtn";
import {EditModeContext} from "./UserLogged";

export const NormalMode = () => {
     
  const { toggleEdit } = useContext(EditModeContext);
  const dispatch = useAuthDispatch(); // read dispatch method from context
  const userDetails = useAuthState(); //read user details from context

  function logOut() {
    logout(dispatch); //call the logout action
    <Navigate to="/login" />; //navigate to login page on logout
  };

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
          <h2>{userDetails.user.name}</h2>
          <h3>{userDetails.user.email}</h3>
          <GreenBtn onClick={logOut}>Log out</GreenBtn>
          <p></p>
          <GreenBtn onClick={handleEdit}>Edit</GreenBtn>
      </div>
  )
}





