import styled from 'styled-components';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  font-size: 14px;
  color: #000;
`;

const Switch = styled.Switch``;

export default {
  Container,
  Title,
  Switch,
};
