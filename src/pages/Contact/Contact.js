import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardContact from "./Card";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { selector, fetchContactList } from "../../redux/slices/ContactSlice";
import { Container } from "../../styles/Container.styled";
import { InContainerStyled, PanelContainerStyled } from "../../styles/PanelContainer.styled";

export default function Contact() {
  const dispatch = useDispatch();

  const { contactList, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchContactList());
  }, []);

  function renderTableContact() {
    return contactList.map((item, index) => {
      return <CardContact key={item.id} item={item} />;
    });
  }
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <Container>
        <SideMenu />
        <PanelContainerStyled>
          <TopMenu title={"Contact"}/>
          <InContainerStyled>  
              {renderTableContact()}
          </InContainerStyled>    
        </PanelContainerStyled>
      </Container>
    );
  }
}
