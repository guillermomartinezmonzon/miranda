import styled from 'styled-components';

export default function CardContact(item) {
  return (
    <ContactCardStyled key={item.item._id}>
      <ContactItemCardStyled>#{item.item._id}</ContactItemCardStyled>
      <ContactItemCardStyled>{item.item.subject}</ContactItemCardStyled>
      <ContactItemCardStyled>{item.item.fullName}</ContactItemCardStyled>
      <ContactItemCardStyled>{item.item.message}</ContactItemCardStyled>
      <ContactItemCardStyled>
        <div id="publish">Publish</div>
        <div id="archive">Archive</div>
      </ContactItemCardStyled>
    </ContactCardStyled>
  );
}

const ContactCardStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-direction: row;
    background-color: white;
    border-radius: 8px;
    height: ${p => p.theme.sizes.cardHeight}px;
    width: 90%;
    white-space:nowrap;
    margin: 3px;
    :hover {
        background-color: ${props => props.theme.colors.bg};
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`

const ContactItemCardStyled = styled.div`
    text-align: left;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: ${p => p.customWidht}};

    i{
        margin-inline: 20px;
        background:none;
        border:none;
        cursor: pointer;
    }

    ${({ status }) =>
        status === "Check In" &&
        `
    `}

`;
