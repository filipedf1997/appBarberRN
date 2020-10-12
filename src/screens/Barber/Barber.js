import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native'
import Swiper from 'react-native-swiper';
import Api from '../../Api';
import {
  Container,
  Scroller,
  SwipeDot,
  SwipeItem,
  SwipeImage,
  FakeSwiper,
  PageBody,
  UserInfoArea,
  ServiceArea,
  TestimonialArea
} from './styles';

export default Profile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
  });
  const [loading, setLoading] = useState(false);
  const [teste, setTeste] = useState("olaaaaaa");

  useEffect(() => {
    setTeste("oiiiiiiiiiiiii")
    console.log(teste)
      const getBarberInfo = async () => {
        setLoading(true);
        let json = await Api.getBarber(userInfo.id);
        if (json.error == '') {
          setTeste("oiiiiiiiiiiiii")
          console.log(teste)
          setUserInfo(json.data); 
          console.log(json.data.photos)
          console.log(userInfo)
        } else {
          alert('Error: ' + json.error);
        };
        setLoading(false);
      };
      getBarberInfo();
    
  }, []);

  return (
    <Container>     
      <Scroller>
        {loading?
          <Swiper
            style={{ height: 240 }}
            dot={<SwipeDot />}
            activeDot={<SwipeDot active />}
            paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
            autoplay={true}
          >
            {userInfo.photos.map((item, key) => {
              <SwipeItem key={key}>
                <SwipeImage source={{ uri: item.url }} resizeMode='cover' />
              </SwipeItem>
            })}
          </Swiper>
          :
          <FakeSwiper>
            <Text>oiiiiii</Text>
          </FakeSwiper>
        }
        <PageBody>
          <UserInfoArea>

          </UserInfoArea>
          <ServiceArea>

          </ServiceArea>
          <TestimonialArea>

          </TestimonialArea>
        </PageBody>
      </Scroller>
      <Text>oi</Text>
    </Container>
  );
};