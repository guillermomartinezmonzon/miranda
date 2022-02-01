import styled from 'styled-components';

export default function CardContact(item) {

  const dateFormated = item.item.contactDate && new Date(`${item.item.contactDate}`)
        .toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

  return (
    <ContactCardStyled key={item.item._id}>
        <ContactItemCardStyled customWidht="20%">
            <span>#{item.item._id}</span>
            <p>{dateFormated}</p>
            </ContactItemCardStyled>
        <ContactItemCardStyled customWidht="20%">
            <span>{item.item.fullName}</span>
            <p>{item.item.phone}</p>
            <p>{item.item.email}</p>
        </ContactItemCardStyled>
      <ContactItemCardStyled customWidht="20%">{item.item.subject}</ContactItemCardStyled>
      <ContactItemCardStyled customWidht="20%">{item.item.message}</ContactItemCardStyled>
      <ContactItemCardStyled customWidht="10%">
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
    height: 100px;
    width: 95%;
    margin: 3px;
    :hover {
        background-color: ${props => props.theme.colors.bg};
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`

const ContactItemCardStyled = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: ${p => p.customWidht}};
    p{
        margin:0;
        color: green;
        font-size: 14px;
    }
    #archive{
        &:hover{
            cursor: pointer;
        }
        margin: 2%;
        color: red;
    }
    #publish{
        &:hover{
            cursor: pointer;
        }
        margin: 2%;
        color: green;
    }
    i{
        margin-inline: 20px;
        background:none;
        border:none;
        cursor: pointer;
    }

`;
