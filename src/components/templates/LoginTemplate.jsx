import styled from "styled-components";
import { Title } from "../atomos/Title";
import { InputText2 } from "../organismos/formularios/InputText2";
import { Btnsave } from "../moleculas/Btnsave";
import { Linea } from "../atomos/Linea";
import { v } from "../../styles/variables";

export function LoginTemplate() {
  return (
    <Container>
      <section className="contentCard">
        <div className="card">
          <Title>Login:</Title>
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
          <Btnsave titulo="Google" bgcolor="#fff" icono={<v.iconogoogle />} />
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
