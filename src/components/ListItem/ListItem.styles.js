import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 16px;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const Description = styled.Text`
  font-size: 16px;
`;

export default {
  Container,
  Title,
  Description,
};
