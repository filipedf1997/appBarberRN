import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
  ListArea
} from './styles';
import * as Location from 'expo-location';
import API from '../../Api';
import BarberItem from '../../components/BarberItem';

export default Home = () => {
  const navigation = useNavigation();
  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleLocationFinder = async () => {
    setCoords(null);
    let { status } = await Location.requestPermissionsAsync();

    if (status === 'granted') {
      let location = Location.getCurrentPositionAsync({});
      setLoading(true);
      setLocationText('');
      setList([]);

      location.then(info => setCoords(info.coords));
      getBarbers();
    };
  };

  const getBarbers = async () => {
    setLoading(true);
    setList([]);

    let lat = null;
    let lng = null;

    if(coords){
      lat = coords.latitude;
      lng = coords.longitude;
    }

    let res = await API.getBarbers(lat, lng, locationText);
    if (res.error === '') {
      setLocationText(res.loc);
      setList(res.data);
    } else {
      alert('Erro: ' + res.error);
    }

    setLoading(false);
  };

  const onRefresh = () => {
    setRefreshing(false);
    getBarbers();
  }

  const handleLocationSearch = () => {
    setCoords(null);
    getBarbers();
  }

  useEffect(() => {
    getBarbers();
  }, []);

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito</HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width='26' height='26' fill='#FFF' />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder='Onde você está?'
            placeholderTextColor='#FFF'
            value={locationText}
            onChangeText={(text) => setLocationText(text)}
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width='24' height='24' fill='#FFF' />
          </LocationFinder>
        </LocationArea>

        {loading && <LoadingIcon color='#FFF' size='large' />}

        <ListArea>
          {list.map((item, index) => (
            <BarberItem key={index} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};