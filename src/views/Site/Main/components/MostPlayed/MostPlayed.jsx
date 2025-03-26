import * as Style from "./MostPlayed.styles";

import Pokemon from "../../../../../images/games/pokemon.png";
import Civilization from "../../../../../images/games/civilization.png";
import DOS from "../../../../../images/games/dos.png";

const MostPlayed = () => {
  return (
    <Style.Container>
      <h1 className="title">MAIS JOGADOS</h1>
      <Style.Row>
        <div>
          <a href="" target="_blank">
            <img src={Pokemon} />
          </a>
        </div>
        <div>
          <a href="" target="_blank">
            <img src={Civilization} />
          </a>
        </div>
        <div>
          <a href="" target="_blank">
            <img src={DOS} />
          </a>
        </div>
        <div id="contact" />
      </Style.Row>
    </Style.Container>
  );
};

export default MostPlayed;
