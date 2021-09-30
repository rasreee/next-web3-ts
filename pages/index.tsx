import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <h1>HOME</h1>
      <WalletMultiButton />
    </Container>
  );
}
