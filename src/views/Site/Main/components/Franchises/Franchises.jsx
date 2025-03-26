import * as Style from "./Franchises.styles";

import Pokemon from "../../../../../images/games/pokemon.png";
import DragonQuest from "../../../../../images/games/dragonquest.png";
import Civilization from "../../../../../images/games/civilization.png";
import DOS from "../../../../../images/games/dos.png";
import FM from "../../../../../images/games/fm.png";
import FIFA from "../../../../../images/games/fifa.png";
import DonkeyKong from "../../../../../images/games/donkeykong.png";
import SuperMario from "../../../../../images/games/supermario.png";
import WOW from "../../../../../images/games/wow.png";

const Franchises = () => {
  return (
    <Style.Container>
      <h1 className="title">FRANQUIAS</h1>
      <Style.Row>
        <div>
          <a href="https://www.pokemon.com/" target="_blank">
            <img src={Pokemon} />
          </a>
        </div>
        <div>
          <a href="https://dragonquest.square-enix-games.com/" target="_blank">
            <img src={DragonQuest} />
          </a>
        </div>
        <div>
          <a href="https://civilization.2k.com/" target="_blank">
            <img src={Civilization} />
          </a>
        </div>
      </Style.Row>
      <Style.Row>
        <div>
          <a href="http://www.divinityoriginalsin.com/" target="_blank">
            <img src={DOS} />
          </a>
        </div>
        <div>
          <a
            href="https://www.footballmanager.com/"
            target="_blank"
            style={{ backgroundColor: "white" }}
          >
            <img src={FM} />
          </a>
        </div>
        <div>
          <a
            href="https://www.ea.com/pt-br/games/ea-sports-fc/"
            target="_blank"
            style={{ backgroundColor: "white" }}
          >
            <img src={FIFA} />
          </a>
        </div>
      </Style.Row>
      <Style.Row>
        <div>
          <a
            href="https://donkey-kong-country.fandom.com/pt-br/wiki/Donkey_Kong_Country"
            target="_blank"
          >
            <img src={DonkeyKong} />
          </a>
        </div>
        <div>
          <a
            href="https://www.nintendo.com/pt-pt/Jogos/Portal-Nintendo/Portal-Super-Mario/Portal-Super-Mario-627604.html?srsltid=AfmBOopJWE5QbqmBNyxflZAYecPrj3pQqiHWXzwWN40UGHkUlWx1bBX7"
            target="_blank"
            style={{ backgroundColor: "white" }}
          >
            <img src={SuperMario} />
          </a>
        </div>
        <div>
          <a
            href="https://worldofwarcraft.blizzard.com/pt-br/"
            target="_blank"
            style={{ backgroundColor: "black" }}
          >
            <img src={WOW} />
          </a>
        </div>
      </Style.Row>
      <div id="online" />
    </Style.Container>
  );
};

export default Franchises;
