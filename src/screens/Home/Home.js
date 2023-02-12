import React, {useEffect, useState} from 'react';
import { View, SafeAreaView, Text, FlatList, RefreshControl, TextInput } from 'react-native';

import {ListingCard} from "../../components/cards";

import styles from "./Home.styles";

const API = [
    {
      id: 0,
      title: 'Xiaomi Mi True Wireless Earbuds',
      imgURL:
        'https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg',
      price: '₺134,77',
      inStock: true,
    },
    {
      id: 1,
      title: 'General Mobile GM 20',
      imgURL:
        'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg',
      price: '₺1.810,21',
      inStock: true,
    },
    {
      id: 2,
      title: 'Philips 58PUS8505/62 The One',
      imgURL:
        'https://m.media-amazon.com/images/I/71zLCzJcXaL._AC._SR360,460.jpg',
      price: '₺6.992,25',
      inStock: false,
    },
    {
      id: 3,
      title: 'LG 49UM7100PLB Ultra HD 4K',
      imgURL:
        'https://m.media-amazon.com/images/I/71gAldY8eGL._AC._SR360,460.jpg',
      price: '₺4.614,38',
      inStock: true,
    },
    {
      id: 4,
      title: 'Samsung Galaxy M31 SM-M315F',
      imgURL:
        'https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg',
      price: '₺2.995,80',
      inStock: true,
    },
    {
      id: 5,
      title: 'Apple AirPods Series 2',
      imgURL:
        'https://m.media-amazon.com/images/I/51XanmiXw0L._AC._SR360,460.jpg',
      price: '₺1.299,00',
      inStock: true,
    },
    {
      id: 6,
      title: 'Lenovo Tab M10 Plus',
      imgURL:
        'https://m.media-amazon.com/images/I/81JR-A35D0L._AC._SR360,460.jpg',
      price: '₺2.496,50',
      inStock: false,
    },
    {
      id: 7,
      title: 'Xiaomi Redmi 20000 Mah',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/41vVdTukkgL._AC_SX522_.jpg',
      price: '₺134,70',
      inStock: false,
    },
    {
      id: 8,
      title: 'Xiaomi Mijia Smart Home 360',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg',
      price: '₺269,73',
      inStock: true,
    },
    {
      id: 9,
      title: 'Xiaomi Mi Box S 4K Ultra HD',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/31sNKUGwNUL._AC_.jpg',
      price: '₺478,53',
      inStock: true,
    },
    {
      id: 10,
      title: 'Haylou Solar LS-5 Smartwatch',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/51kfZ4W9YSL._AC_SX522_.jpg',
      price: '₺296,00',
      inStock: true,
    },
];

const Home = () => {
    const [data, setData] = useState([]);
    const [isRefreshListing, setIsRefreshListing] = useState(false);
    const [text, setText] = useState("");

    const getData = () => {
        setData(API);
    };

    const cardOnPress = (id) => {
        console.log(id)
    };

    const onRefreshListing = () => {
        setIsRefreshListing(true)
        getData();
        setIsRefreshListing(false)
    };

    useEffect(() => {
        getData();
    }, []);


    const renderItemListingCard = ({item}) => {
        return(
            <View style={styles.listing_card_container}>
                <ListingCard
                    id={(item?.id) ? item?.id : ""}
                    title={(item?.title) ? item?.title : "-"}
                    imgURL={(item?.imgURL) ? item?.imgURL : ""}
                    price={(item?.price) ? item?.price : "-"}
                    inStock={(item?.inStock) ? item?.inStock : false}
                    onPress={() => cardOnPress((item?.id) ? item?.id : "")}
                />
            </View>
        )
    };

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>PATIKASTORE</Text>

            <TextInput
                placeholder={"Ara"}
                placeholderTextColor={"gray"}
                style={styles.input}
                onChangeText={(text) => setText(text)}
                value={text}
                autoCorrect={false}
                autoCapitalize="none"
                maxLength={30}
            />

            <FlatList
                data={data}
                keyExtractor={(index) => index.toString()}
                horizontal={false}
                numColumns={2}
                ListFooterComponent={<View style={styles.bottom_space}></View>}
                refreshControl={    
                    <RefreshControl         
                        refreshing={isRefreshListing}
                        onRefresh={onRefreshListing} 
                    />
                }
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.listing_flatlist_container}
                renderItem={renderItemListingCard} 
            />
        </SafeAreaView>
    )
};

export default Home;