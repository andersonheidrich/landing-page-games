import * as Style from "./Online.styles";

import Tibia from "../../../../../images/online/tibia.png";
import Ragnarok from "../../../../../images/online/ragnarok.png";
import FIFA from "../../../../../images/online/fifa.png";
import WOW from "../../../../../images/online/wow.png";

const Online = () => {
  return (
    <Style.Container>
      <Style.Row>
        <div>
          <a href="https://www.pokemon.com/">
            <img src={Tibia} />
          </a>
        </div>
        <div>
          <a href="https://dragonquest.square-enix-games.com/">
            <img src={Ragnarok} />
          </a>
        </div>
        <div>
          <a href="https://www.ea.com/pt-br/games/ea-sports-fc/">
            <img src={FIFA} />
          </a>
        </div>
        <div>
          <a href="https://www.ea.com/pt-br/games/ea-sports-fc/">
            <img src={WOW} />
          </a>
        </div>
        <div id="most-played" />
      </Style.Row>
    </Style.Container>
  );
};

export default Online;
