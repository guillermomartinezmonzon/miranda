import styled from 'styled-components';
export default function CardUser(user) {
  return (
    <UserCardStyled key={user.user.id}>
      <UserItemCardStyled customWidht={10}>{user.user.name}</UserItemCardStyled>
      <UserItemCardStyled customWidht={10}>{user.user.email}</UserItemCardStyled>
      <UserItemCardStyled customWidht={10}>{user.user.startDate}</UserItemCardStyled>
      <UserItemCardStyled customWidht={10}>{user.user.phone}</UserItemCardStyled>
      <UserItemCardStyled customWidht={10}>{user.user.description}</UserItemCardStyled>
      <UserItemCardStyled customWidht={10}>{user.user.status}</UserItemCardStyled>
      <UserItemCardStyled customWidht={10}>{user.user.job}</UserItemCardStyled>
      <UserItemCardStyled customWidht={10}>{user.user.image}</UserItemCardStyled>
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
    height: ${p => p.theme.sizes.cardHeight}px;
    width: 90%;
    white-space:nowrap;
    margin: 3px;
    :hover {
        background-color: ${props => props.theme.colors.bg};
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`

const UserItemCardStyled = styled.div`
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
