import * as Style from "./Consoles.styles";
import Slider from "../../../../../components/Slider/Slider";

import SNES from "../../../../../images/consoles/snes.png";
import N64 from "../../../../../images/consoles/n64.png";
import PS2 from "../../../../../images/consoles/ps2.png";
import Xbox360 from "../../../../../images/consoles/xbox360.png";
import XboxOne from "../../../../../images/consoles/xone.png";
import PC from "../../../../../images/consoles/pc.png";

const Consoles = () => {
  const data = [
    {
      id: "1",
      title: "SNES",
      image: SNES,
      text: "Pensando mais a longo prazo, o surgimento do comércio virtual deve passar por modificações independentemente das direções preferenciais no sentido do progresso.",
    },
    {
      id: "2",
      title: "Nintendo 64",
      image: N64,
      text: "É claro que o desafiador cenário globalizado apresenta tendências no sentido de aprovar a manutenção do sistema de participação geral.",
    },
    {
      id: "3",
      title: "PlayStation 2",
      image: PS2,
      text: "Desta maneira, a consolidação das estruturas prepara-nos para enfrentar situações atípicas decorrentes do fluxo de informações.",
    },
    {
      id: "4",
      title: "Xbox 360",
      image: Xbox360,
      text: "Caros amigos, a percepção das dificuldades cumpre um papel essencial na formulação dos modos de operação convencionais.",
    },
    {
      id: "5",
      title: "Xbox One",
      image: XboxOne,
      text: "A prática cotidiana prova que o julgamento imparcial das eventualidades talvez venha a ressaltar a relatividade do impacto na agilidade decisória.",
    },
    {
      id: "6",
      title: "PC",
      image: PC,
      text: "Desta maneira, o fenômeno da Internet é uma das consequências das diversas correntes de pensamento.",
    },
  ];

  return (
    <Style.Container>
      <h1 className="title">CONSOLES</h1>
      <Slider data={data} />
      <div id="franchises" />
    </Style.Container>
  );
};

export default Consoles;
