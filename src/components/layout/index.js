import styled from "styled-components";
import SideMenu from "../SideMenu/SideMenu";
import TopMenu from "../TopMenu/TopMenu";

export default function Layout(props){
    return (
    <Container>
      <SideMenu />
      <PanelContainerStyled id="panelIn">
          <TopMenu title={props.title}/>
          <InContainerStyled>
              {props.children}
          </InContainerStyled>
      </PanelContainerStyled>
    </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  padding: 0 10px;
  font-family: ${props => props.theme.fonts.mainFont};
`;

const PanelContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  width: ${props => props.theme.sizes.widthIn}%;
  margin-left: ${props => props.theme.sizes.sizeSideMenu}px;
  background-color: ${props => props.theme.colors.bg};
  #in-dashboard {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const InContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-left: ${props => props.theme.sizes.InPadding}px;
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








const ItemCardStyled = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  width: ${p => p.customWidht}px;
  margin-inline: 0.7rem;

  #view_notes_btn {
    border: none;
    text-size: 12px;
    border-radius: 20%;
    padding: 0.4rem;
    background: #e8ffee;
    color: gray;
    :hover {
      cursor: pointer;
    }
  }

  #publish {
    margin-right: 5px;
    color: green;
  }

  #archive {
    margin-left: 5px;
    color: red;
  }

  #booking-more {
    border: none;
    background: none;
  }

  .status {

  }

  ${({ status }) =>
    status === "Refund" &&
    `
    align-items: center;
    text-size: 12px;
    border-radius: 20px;
    width: 130px;
    height: 30px;
  background: #FFEDEC;
  color: red;
`}

  ${({ status }) =>
    status === "Booked" &&
    `
    align-items: center;
    text-size: 12px;
    border-radius: 20px;
    width: 130px;
    height: 30px;
background: #E8FFEE;
color: green;
`}

${({ status }) =>
    status === "Pending" &&
    `
    align-items: center;
    text-size: 12px;
    border-radius: 20px;
    width: 130px;
    height: 30px;
background: #E2E2E2;
color: #707070;
`}

${({ status }) =>
    status === "Canceled" &&
    `
    align-items: center;
    text-size: 12px;
    border-radius: 20px;
    width: 130px;
    height: 30px;
background: #707070;
color: #E2E2E2;
`}
`;
