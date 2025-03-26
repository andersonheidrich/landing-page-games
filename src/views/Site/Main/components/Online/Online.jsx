import * as Style from "./Online.styles";

import Tibia from "../../../../../images/online/tibia.png";
import Ragnarok from "../../../../../images/online/ragnarok.png";
import FIFA from "../../../../../images/online/fifa.png";
import WOW from "../../../../../images/online/wow.png";

const Online = () => {
  return (
    <Style.Container>
      <h1 className="title">ON-LINE</h1>
      <Style.Row>
        <div>
          <a href="https://www.tibia.com/" target="_blank">
            <img src={Tibia} />
          </a>
        </div>
        <div>
          <a href="https://playragnarokonlinebr.com/" target="_blank">
            <img src={Ragnarok} />
          </a>
        </div>
        <div>
          <a
            href="https://www.ea.com/pt-br/games/ea-sports-fc/"
            target="_blank"
          >
            <img src={FIFA} />
          </a>
        </div>
        <div>
          <a href="https://worldofwarcraft.blizzard.com/pt-br/" target="_blank">
            <img src={WOW} />
          </a>
        </div>
        <div id="most-played" />
      </Style.Row>
    </Style.Container>
  );
};

export default Online;
