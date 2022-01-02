import { useDispatch, useSelector } from "react-redux";
import CardUser from "./Card";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { fetchUsersList, selector } from "../../redux/slices/UsersSlice";
import { Container } from "../../styles/Container.styled";
import { InContainerStyled, PanelContainerStyled } from "../../styles/PanelContainer.styled";
import { useEffect } from "react";

export default function Users() {
  const dispatch = useDispatch();

  const { usersList, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);

  function renderTableUsers() {
    return usersList.map((user, index) => {
      // const { id, user_name, job_desk, schedule, phone, status } = user;
      return <CardUser key={user.id} user={user} />;
    });
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Container>
      <SideMenu />
      <PanelContainerStyled>
        <TopMenu title={"Users"}/>
        <InContainerStyled>  
            {renderTableUsers()}
        </InContainerStyled>
      </PanelContainerStyled>
    </Container>
  );
}
