// Import React
import React from "react";
import LogoReact from "./assets/images/logo_react.svg";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  List,
  ListItem,
  Heading,
  Quote,
  Slide,
  Text,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <img src={LogoReact} alt="Logo React" width="128" />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Hooks o que são e como utilizar
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Quem sou
          </Heading>
          <Text size={6} textColor="tertiary">
            Um breve resumo
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <img src={LogoReact} alt="Logo React" width="468" />
          <Heading size={6} textColor="secondary" caps>
            React? O que é?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Text size={6} textColor="primary">
            React é "uma biblioteca JavaScript declarativa, eficiente e flexível
            para a criação de interfaces de usuário (UI)"
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Statefull
          </Heading>
          <CodePane
            lang="jsx"
            source={require("./assets/statefull.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Stateless
          </Heading>
          <CodePane
            lang="jsx"
            source={require("./assets/stateless.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary" caps>
            O que são Hooks?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Text size={6} textColor="primary">
            É uma funcionalidade implementada a partir da versão 16.7.0 do React
            que visa oferecer formas de trabalharmos com estado e outras API's
            sem a necessidade de ter uma classe (stateful component).
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Motivações
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            HOC’s (Higher-order components)
          </Heading>
          <CodePane
            lang="jsx"
            source={require("./assets/hoc.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Render props
          </Heading>
          <Text size={6} textColor="tertiary">
            Compartilhamento de funcionalidade e estado do react, deixa o código
            mais verboso.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane
            lang="jsx"
            source={require("./assets/counterWrapper.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane
            lang="jsx"
            source={require("./assets/counterUI.example")}
            margin="20px auto"
            overflow="overflow"
          />
          <CodePane
            lang="jsx"
            source={require("./assets/renderProps.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Finalmente Hooks
          </Heading>
          <img src={require("./assets/images/meme.jpeg")} alt="Enfim hooks" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Hooks básicos
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} textColor="primary" textAlign="left">
            useState
          </Heading>
          <Text size={6} textColor="primary" textAlign="left">
            Substitui a declaração de state = {} e o this.setState({}), retorna
            vetor [value, fn] facilitando a desestruração para utilização.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Exemplos
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane
            lang="jsx"
            source={require("./assets/state.example")}
            margin="20px auto"
            overflow="overflow"
          />
          <CodePane
            lang="jsx"
            source={require("./assets/usestate.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Text size={6} textColor="primary" textAlign="left">
            Então para ter mais de um estado devo sempre declarar o const [] =
            useState?
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane
            lang="jsx"
            source={require("./assets/usereducer.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} textColor="primary" textAlign="left">
            useEffect
          </Heading>
          <Text size={6} textColor="primary" textAlign="left">
            Permite que seu componente em forma de função tenha acesso aos
            métodos de ciclo de vida sem precisar refatorar seu componente para
            uma classe.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text size={6} textColor="secondary" caps>
            Lifecicles
          </Text>
          <CodePane
            lang="jsx"
            source={require("./assets/lifecicle.example")}
            margin="20px auto"
            overflow="overflow"
          />
          <CodePane
            lang="jsx"
            source={require("./assets/lifecicleeffects.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            usecontext
          </Heading>
          <Text size={6} textAlign="left" textSize={24} textColor="tertiary">
            Para utilizarmos a Context API do React até então precisávamos
            utilizar o pattern de render props criando um código como o
            seguinte:
          </Text>
          <CodePane
            lang="jsx"
            source={require("./assets/contextapi.example")}
            margin="20px auto"
            overflow="overflow"
          />
          <Text size={6} textAlign="left" textSize={24} textColor="tertiary">
            Com os hooks podemos simplesmente fazer o seguinte:
          </Text>
          <CodePane
            lang="jsx"
            source={require("./assets/usecontext.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps textAlign="left">
            Hooks adicionais
          </Heading>
          <List>
            <ListItem>useReducer</ListItem>
            <ListItem>useCallback</ListItem>
            <ListItem>useMemo</ListItem>
            <ListItem>useRef</ListItem>
            <ListItem>useImperativeHandle</ListItem>
            <ListItem>useLayoutEffect</ListItem>
            <ListItem>useDebugValue</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps textAlign="left">
            Hooks da comunidade
          </Heading>
          <List>
            <ListItem>useDispatch</ListItem>
            <ListItem>useSelector</ListItem>
            <ListItem>useAxios</ListItem>
            <ListItem>useClipboard</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Obrigado</Quote>
            <Cite>Francis Soares de Oliveira</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
