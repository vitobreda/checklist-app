import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
`;

const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  color: #2e382e;
  margin-bottom: 4px;
`;

const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  color: #000;
`;

export default {
  Container,
  Title,
  Description,
};
