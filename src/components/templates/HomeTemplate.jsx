import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore";

export function HomeTemplate() {
  const { cerrarSesion } = useAuthStore();
  return (
    <Container>
      <span> Home Template</span>
      <button type="submit" onClick={cerrarSesion}>
        Cerrar
      </button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
