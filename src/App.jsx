import { GlobalStyles } from "./styles/GlobalStyles";
import { MyRoutes } from "./routes/routes";
import { Sidebar } from "./components/organismos/sidebar/Sidebar";
import { styled } from "styled-components";
import { Device } from "./styles/breakpoinst";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <section className="contentSidebar">
        <Sidebar />
      </section>
      <section className="contentMenuambur">menu</section>
      <section className="contentRouters">
        <MyRoutes />
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #333;
  .contentSidebar {
    display: none;
    background-color: rgba(78, 45, 45, 0.5);
  }
  .contentMenuambur {
    position: absolute;
    background-color: rgba(45, 78, 45, 0.5);
  }
  .contentRouters {
    background-color: rgba(45, 78, 76, 0.5);
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    .contentSidebar {
      display: initial;
    }
    .contentMenuambur {
      display: none;
    }
    .contentRouters {
      grid-column: 2;
    }
  }
`;

export default App;
