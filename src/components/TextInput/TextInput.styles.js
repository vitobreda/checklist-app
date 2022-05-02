import styled from 'styled-components';

const Container = styled.View`
  margin-bottom: 16px;
`;

const InputText = styled.TextInput`
  border-width: 1px;
  border-radius: 12px;
  padding-left: 16px;
  overflow: visible;
`;

const Description = styled.Text`
  margin-left: 16px;
  color: #000;
  font-size: 12px;
`;

export default {
  Container,
  InputText,
  Description,
};
