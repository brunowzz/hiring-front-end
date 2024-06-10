import { useContext } from 'react';

import Button from '../../components/button';
import Container from '../../components/container';
import { CartContext } from '../../contexts/cartContext';
import * as S from './style';

export default function CartPage() {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
        useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <Container>
                <h1>Seu carrinho está vazio</h1>
            </Container>
        );
    }

    return (
        <Container>
            <section>
                <S.ContainerContent>
                    <S.BoxContent>
                        <S.TextCart>Produto</S.TextCart>
                    </S.BoxContent>
                    <S.BoxContent>
                        <S.TextCart>Preço</S.TextCart>
                    </S.BoxContent>
                    <S.BoxContent>
                        <S.TextCart>Quantidade</S.TextCart>
                    </S.BoxContent>
                </S.ContainerContent>

                {cartItems.map((item) => (
                    <S.ContainerContent key={item.id}>
                        <S.BoxContent>
                            <S.ProductImageCart
                                src={item.avatar}
                                alt={item.name}
                            />
                            <S.TextCart>{item.name}</S.TextCart>
                        </S.BoxContent>

                        <S.BoxContent>
                            <S.TextCart>R$ {item.price}</S.TextCart>
                        </S.BoxContent>

                        <S.BoxContent>
                            <Button
                                padding="8px"
                                onClick={() => {
                                    addToCart(item);
                                }}
                            >
                                +
                            </Button>
                            <S.TextCart>{item.quantity}</S.TextCart>
                            <Button
                                padding="8px"
                                onClick={() => {
                                    removeFromCart(item);
                                }}
                            >
                                -
                            </Button>
                        </S.BoxContent>
                    </S.ContainerContent>
                ))}
            </section>

            <S.BoxCartTotal>
                <S.CartTitle>Valor total</S.CartTitle>

                <S.ContainerContent>
                    <S.TextCart>Subtotal:</S.TextCart>
                    <S.TextCart>R$ {getCartTotal()}</S.TextCart>
                </S.ContainerContent>

                <S.ContainerContent>
                    <S.TextCart>Frete:</S.TextCart>
                    <S.TextCart>Grátis</S.TextCart>
                </S.ContainerContent>

                <S.ContainerContent>
                    <S.TextCart>Total:</S.TextCart>
                    <S.TextCart>R$ {getCartTotal()}</S.TextCart>
                </S.ContainerContent>

                <Button
                    onClick={() => {
                        clearCart();
                    }}
                >
                    Esvaziar carrinho
                </Button>
            </S.BoxCartTotal>
        </Container>
    );
}
