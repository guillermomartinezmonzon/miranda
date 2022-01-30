import styled from "styled-components";

export const PanelContainerStyled = styled.div`
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

export const InContainerStyled = styled.div`
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
