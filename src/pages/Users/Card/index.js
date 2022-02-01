import styled from 'styled-components';

export default function CardUser(user) {

  const dateFormated = user.user.startDate && new Date(`${user.user.startDate}`)
        .toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

  return (
    <UserCardStyled key={user.user.id}>
        <img src={user.user.image} style={{marginLeft: '3%', width: '2%'}} alt=""/>
        <UserItemCardStyled customWidht="18%">
            <h3>{user.user.name}</h3>
            <span>{user.user.job}</span>
            <p>{user.user._id}</p>
        </UserItemCardStyled>
        <UserItemCardStyled customWidht="15%">{dateFormated}</UserItemCardStyled>
        <UserItemCardStyled customWidht="15%">
            <span>{user.user.phone}</span>
            <p>{user.user.email}</p>
        </UserItemCardStyled>
        <UserItemCardStyled customWidht="33%">{user.user.description}</UserItemCardStyled>
        <UserItemCardStyled status={user.user.status} customWidht="10%">{user.user.status}</UserItemCardStyled>
    </UserCardStyled>
  );
}

const UserCardStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-direction: row;
    background-color: white;
    border-radius: 8px;
    height: 120px;
    width: 95%;
    white-space:nowrap;
    margin: 3px;
    :hover {
        background-color: ${props => props.theme.colors.bg};
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`

const UserItemCardStyled = styled.div`
    p{
        margin: 0;
    }
    span{
        margin: 0;
        color: green;
    }
    h3{
        margin: 0;
    }
    white-space: nowrap;
    margin: 3%;
    overflow: hidden;
    text-align: left;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: ${p => p.customWidht}};

    ${({ status }) =>
        status === "inactive" &&
        `
        &:hover{
            cursor:pointer;
        }
        align-items: center;
        justify-content: center;
        text-size: 14px;
        color: red;
        font-weight: bold;
        width: ${p=>p.customWidht};
    `}
    ${({ status }) =>
        status === "active" &&
        `
        &:hover{
            cursor:pointer;
        }
        align-items: center;
        justify-content: center;
        text-size: 14px;
        color: green;
        font-weight: bold;
        width: ${p=>p.customWidht};
    `}

`;
