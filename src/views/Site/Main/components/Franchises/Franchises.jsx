import * as Style from "./Franchises.styles";

import Pokemon from "../../../../../images/franchises/pokemon.png";
import DragonQuest from "../../../../../images/franchises/dragonquest.png";
import Civilization from "../../../../../images/franchises/civilization.png";
import DOS from "../../../../../images/franchises/dos.png";
import FM from "../../../../../images/franchises/fm.png";
import FIFA from "../../../../../images/franchises/fifa.png";
import DonkeyKong from "../../../../../images/franchises/donkeykong.png";

const Franchises = () => {
  return (
    <Style.Container>
      <Style.Row>
        <div>
          <a href="https://www.pokemon.com/">
            <img src={Pokemon} />
          </a>
        </div>
        <div>
          <a href="https://dragonquest.square-enix-games.com/">
            <img src={DragonQuest} />
          </a>
        </div>
        <div>
          <a href="https://civilization.2k.com/">
            <img src={Civilization} />
          </a>
        </div>
      </Style.Row>
      <Style.Row>
        <div>
          <a href="http://www.divinityoriginalsin.com/">
            <img src={DOS} />
          </a>
        </div>
        <div>
          <a href="https://www.footballmanager.com/">
            <img src={FM} />
          </a>
        </div>
        <div>
          <a href="https://www.ea.com/pt-br/games/ea-sports-fc/">
            <img src={FIFA} />
          </a>
        </div>
      </Style.Row>
      <Style.Row>
        <div>
          <a href="https://www.ea.com/pt-br/games/ea-sports-fc/">
            <img src={DonkeyKong} />
          </a>
        </div>
      </Style.Row>
      <div id="online" />
    </Style.Container>
  );
};

export default Franchises;
