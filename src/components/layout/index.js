import {useEffect} from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {checkAPI} from "../../api";
import SideMenu from "../SideMenu/SideMenu";
import TopMenu from "../TopMenu/TopMenu";

export default function Layout(props){
    let apiOK = false;
    useEffect(()=>{
        apiOK = checkAPI()
    },[])

    return (
    <Container>
      <SideMenu />
      <PanelContainerStyled id="panelIn">
          <TopMenu title={props.title}/>
          <InContainerStyled>
              {apiOK ? props.children : <h2>No internet connection</h2>}
          </InContainerStyled>
      </PanelContainerStyled>
    </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  flex-direction: row;
  width: 100%;
  font-family: ${props => props.theme.fonts.mainFont};
`;

const PanelContainerStyled = styled.div`
  position:absolute;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  width: 79%;
  background-color: ${props => props.theme.colors.bg};
  #in-dashboard {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const InContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.colors.desert};

.pagination {
  margin: 15px auto;
  display: flex;
  list-style: none;
  outline: none;
}
.pagination > .active > a{
  background: none;
  border-color: ${p=>p.theme.colors.mainRed};
  color: ${p=>p.theme.colors.mainRed};
    }
.pagination > li > a{
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
}
.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
  background: none;
  border: 1px solid ${p=>p.theme.colors.mainRed};
  border-color: ${p=>p.theme.colors.mainRed};
  color: ${p=>p.theme.colors.mainRed};
  outline: none ;
}
.pagination > li > a, .pagination > li > span{
  color: ${p=>p.theme.colors.mainGreen};
}
.pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
  border-radius: unset
}

`;


