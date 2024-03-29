import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63C2D1;
  margin-top: 20px;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  flex: 10;
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
`;

export const SearchButton = styled.TouchableOpacity`
  flex: 1;
  padding: 5px;  
`;

export const LocationArea = styled.View`
  background-color: #4EADBE;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #FFF;
`;

export const LocationFinder = styled.TouchableOpacity``;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ListArea= styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;
