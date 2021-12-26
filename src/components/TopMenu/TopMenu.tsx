import { useLocation } from "react-router";
import { IconTopMenuStyled, TitleTopMenuStyled, TopMenuStyled } from "./TopMenu.styled";

export default function TopMenu() {
  let path = useLocation().pathname;

  return (
    <TopMenuStyled>
        <TitleTopMenuStyled>{path}</TitleTopMenuStyled>
        <p></p>
        <p></p>
        <p></p>
      <IconTopMenuStyled>
        <i className="fas fa-search"></i>
      </IconTopMenuStyled>
        <p></p>
        <p></p>
        <p></p>
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
          src="https://cdn.schoolstickers.com/products/en/819/10MM_SMILE-03.png"
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
