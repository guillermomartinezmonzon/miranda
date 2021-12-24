import {useState} from "react";
import { Navigate } from "react-router";
import { logout, useAuthDispatch, useAuthState } from "../../../context";
import { GreenBtn } from "../../../styles/buttons/GrenBtn";
import { CardLoggedStyled } from "./CardLogged.styled";

export default function NormalMode(setEditMode) {
  const dispatch = useAuthDispatch(); // read dispatch method from context
  const userDetails = useAuthState(); //read user details from context

      const logOut = () => {
        logout(dispatch); //call the logout action
        <Navigate to="/login" />; //navigate to logout page on logout
      };
      const handleEdit = () => {
        try {
            if (!inputName || !inputEmail) alert("Name or email empty")
            dispatch({ type: "CHANGE_USER", payload: {name: inputName, email: inputEmail });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardLoggedStyled>
        <form onSubmit={handleEdit}>
            <label>Nombre</label>
            <label id="inputName" value={userDetails.user.name}/>
            <label>Email</label>
            <label id="inputEmail" value={userDetails.user.email}/>

            <GreenBtn type="submit">Guardar</GreenBtn>
        </form>
    </CardLoggedStyled>
  );

}





