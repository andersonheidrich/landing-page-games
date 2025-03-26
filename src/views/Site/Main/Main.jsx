import {
  Consoles,
  Franchises,
  History,
  MostPlayed,
  Online,
} from "./components";
import * as Style from "./Main.styles";

const Main = () => {
  return (
    <Style.Container>
      <History />
      <Consoles />
      <Franchises />
      <Online />
      <MostPlayed />
    </Style.Container>
  );
};

export default Main;
