import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types'; 

import styles from "./ListingCard.styles";

const ListingCard = ({id, title, imgURL, price, inStock, onPress}) => {

    return(
        <TouchableOpacity 
            style={[styles.container, {height:(inStock) ? 320 : 350}]}
            onPress={onPress}
        >
            <Image
                style={styles.image}
                source={{uri:imgURL}}
                resizeMode={"stretch"}
            />

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>

            {(inStock == true) ?
                null
                :
                <Text style={styles.stock}>{"STOKTA YOK"}</Text>
            }
        </TouchableOpacity>
    )
};

ListingCard.propTypes = {  
    id:PropTypes.string, 
    title:PropTypes.string, 
    imgURL:PropTypes.string, 
    price:PropTypes.string, 
    inStock:PropTypes.bool                     
};
  
ListingCard.defaultProps = {  
    id:"", 
    title:"-", 
    imgURL:"", 
    price:"-", 
    inStock:true
}

export default ListingCard;