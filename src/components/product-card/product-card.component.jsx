// import "./product-card.styles.scss"
import { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.actions";
import { ProductCardContainer, ProductButton } from "./product-card.styles";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = product;

    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
    return (
        <ProductCardContainer>
            <img alt={name} src={imageUrl}/>
            <div className="footer">
                <span className='name'>{name}</span>
                <span className='price'>${price - 1}.99</span>
            </div>
            <ProductButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</ProductButton>
        </ProductCardContainer>
    );
}

export default ProductCard;