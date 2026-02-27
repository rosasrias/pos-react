import styled from "styled-components";
import { Title } from "../atomos/Title";
import { InputText2 } from "../organismos/formularios/InputText2";
import { Btnsave } from "../moleculas/Btnsave";
import { Linea } from "../atomos/Linea";
import { v } from "../../styles/variables";
import { Device } from "../../styles/breakpoinst";
import { Footer } from "../organismos/Footer";

export function LoginTemplate() {
  return (
    <Container>
      <section className="contentCard">
        <div className="card">
          <Title $paddingbottom="20px">Login</Title>
          <form action="">
            <InputText2>
              <input
                type="email"
                className="form__field"
                placeholder="email"
                required
              />
            </InputText2>
            <InputText2>
              <input
                type="password"
                className="form__field"
                placeholder="password"
                required
              />
            </InputText2>
            <Btnsave
              titulo="INGRESAR"
              bgcolor="#1CB0F6"
              color="255,255,255"
              width="100%"
              active
            ></Btnsave>
          </form>
          <Linea>O</Linea>
          <br />
          <Btnsave titulo="Google" bgcolor="#fff" icono={<v.iconogoogle />} />
        </div>
        <Footer />
      </section>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 20px;
  .contentCard {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
      @media ${Device.tablet} {
        width: 400px;
      }
    }
  }
`;
