import * as Style from "./History.styles";

const History = () => {
  return (
    <Style.Container>
      <h1 className="title">HISTÓRIA</h1>
      <Style.Content>
        <Style.Text>
          Olá! Me chamo Anderson Heidrich e sou natural de Pelotas / RS.
          Trabalho com desenvolvimento web desde dezembro de 2021 e decidi criar
          essa landing page para compartilhar um pouco do meu gosto pessoal por
          jogos eletrônicos.
          <br />
          <br />
          Tudo começou no início dos anos 1990, com meu primeiro console: um
          Dynavision 3! Pra ser sincero, não me lembro muito bem dos jogos. Logo
          após, veio o SNES (Super Nintendo), que me marcou muito com seus
          diversos jogos que se tornaram clássicos, como Chrono Trigger, The
          Legend of Zelda: A Link to the Past, Super Mario World, Donkey Kong,
          International Superstar Soccer e todas as suas versões brasileiras
          (piratas), os muitos jogos estilo beat 'em up (os famosos "briga de
          rua"). Ao final da década de 90, ganhei meu primeiro computador e
          através dele, tive meus primeiros contatos com dois gêneros de jogos
          que são os meus favoritos até hoje: Manager e MMORPG.
        </Style.Text>
      </Style.Content>
      <div id="consoles" />
    </Style.Container>
  );
};

export default History;
