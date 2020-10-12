import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FFF;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${props => props.active ? '#000' : '#FFF'};
  border-radius: 5px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63C2D1;
`;

export const SwipeImage =styled.Image`
  width: 100%;
  height: 240px;
`;

export const FakeSwiper = styled.View`
  background-color: #ff0000;
  width: 100%;
  height: 240px;
`;
export const PageBody = styled.View``;
export const UserInfoArea = styled.View``;
export const ServiceArea = styled.View``;
export const TestimonialArea = styled.View``;

