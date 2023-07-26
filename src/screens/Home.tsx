import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Logout } from '../store/actions';
import api from '../services/api';
import note from '../assets/imgs/note.png';

const renderItem = ({ item }: any) => (
    <View style={styles.listItem}>
      <View>
        <View>
        <Image style={{width: '100%', height: '85%'}} source={note}/>
        </View>
        <View>
            <Text>{item.name}</Text>
            <Text>R$ {item.value}</Text>
        </View>
      </View>
    </View>
  );
export default function Home(){
    const dispatch = useDispatch();
    const [products, setProducts] = useState<any>([]);
    const [nextPage, setNextPage] = useState('/products');
    function handleLogout(){
        dispatch(Logout());
    }
    async function getData(){
        if (nextPage){
            const {data} = await api.get(nextPage);
            setNextPage(data.next_page_url);
            setProducts(products.concat(data.data));
        }
    }
    useEffect(()=>{
        getData();
    }, []);
    return (
        <View style={{backgroundColor: '#fff', height: '100%', flex: 1, justifyContent: 'center'}}>
            <View style={styles.containerButtonLogout}>
                <View style={styles.buttonLogout}>
                    <Button title="Sair" onPress={handleLogout}/>
                </View>
            </View>
            <FlatList
                style={{padding: 5}}
                data={products}
                numColumns={2}
                contentContainerStyle={styles.list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onEndReached={getData}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                onEndReachedThreshold={0.1}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    buttonLogout: {
        width: '20%',
    },
    containerButtonLogout: {
        width: '100%',
        alignItems: 'flex-end',
        padding: 5,
    },
    list: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    listItem: {
        width: '49%',
        height:250,
        backgroundColor: '#ddd',
        marginTop: 20,
        padding: 30,
    },
});
