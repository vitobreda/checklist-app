import styled from 'styled-components';
import {Picker} from '@react-native-picker/picker';

const Container = styled.View`
  margin-bottom: 16px;
`;

const Description = styled.Text`
  margin-left: 16px;
  color: #000;
  font-size: 12px;
`;

const PickerWrapper = styled.View`
  border-width: 1px;
  border-radius: 12px;
`;

const TypePicker = styled(Picker)``;

const TypeItem = styled(Picker.Item)`
  font-size: 14px;
  color: #000;
`;

export default {
  Container,
  Description,
  PickerWrapper,
  TypePicker,
  TypeItem,
};
