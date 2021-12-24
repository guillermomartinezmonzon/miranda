import { useLocation } from "react-router";
import { IconTopMenuStyled } from "../../styles/IconTopMenu.styled";
import { TitleTopMenuStyled, TopMenuStyled } from "./TopMenu.styled";

export default function TopMenu() {
  let path = useLocation().pathname;
  return (
    <TopMenuStyled>
      <TitleTopMenuStyled>{path}</TitleTopMenuStyled>
      <IconTopMenuStyled>
        <i className="fas fa-search"></i>
      </IconTopMenuStyled>
      <IconTopMenuStyled>
        <i className="far fa-heart"></i>
      </IconTopMenuStyled>
      <IconTopMenuStyled>
        <i className="far fa-envelope"></i>
      </IconTopMenuStyled>
      <IconTopMenuStyled>
        <i className="far fa-bell"></i>
      </IconTopMenuStyled>
      <IconTopMenuStyled>
        <i className="far fa-comment-alt"></i>
      </IconTopMenuStyled>
      <IconTopMenuStyled>
        <img
          width="30"
          height="30"
          src="https://cdn-icons.flaticon.com/png/512/3006/premium/3006872.png?token=exp=1637852599~hmac=73a2762f5282b8bb5d9748c1521a83b7"
          alt=""
        />
      </IconTopMenuStyled>
      <IconTopMenuStyled>
        <select name="lang" id="lang">
          <option value="ESP">ES</option>
          <option value="ENG" defaultChecked>
            EN
          </option>
        </select>
      </IconTopMenuStyled>
    </TopMenuStyled>
  );
}
