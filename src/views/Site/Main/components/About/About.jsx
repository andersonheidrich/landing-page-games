import * as Style from "./About.styles";

const About = () => {
  return (
    <Style.Container>
      <h1 className="title">QUEM SOU?</h1>
      <Style.Content>
        <Style.Text>
          Olá! Me chamo Anderson Heidrich e sou natural de Pelotas / RS.
          Trabalho com desenvolvimento web desde dezembro de 2021 e decidi criar
          essa landing page para compartilhar um pouco do meu gosto pessoal por
          jogos eletrônicos.
        </Style.Text>
      </Style.Content>
      <div id="contact" />
    </Style.Container>
  );
};

export default About;
