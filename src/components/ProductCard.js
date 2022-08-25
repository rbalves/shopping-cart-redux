import { Text, View, StyleSheet, Button } from 'react-native';

import store from '../store/index';

import { addProductToCart } from '../store/modules/cart/reducer';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{product.name}</Text>
      {product.discount > 0 && (
        <Text
          style={{
            color: 'tomato',
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
          }}>
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>
      )}
      <Text style={styles.price}>
        {(product.discount <= 100
          ? product.price - product.price * (product.discount / 100)
          : 0
        ).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>
      <View style={styles.buttons}>
        <Button
          color="mediumseagreen"
          title="Comprar"
          onPress={() => store.dispatch(addProductToCart(product))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: '5px',
    padding: 10,
    marginTop: 8,
    gap: 8,
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
