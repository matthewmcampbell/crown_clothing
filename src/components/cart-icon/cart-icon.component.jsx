import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.actions";

import { ShoppingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles";

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    
    const toggleCartDropdown = () => dispatch(setIsCartOpen(!isCartOpen));
    return (
        <CartIconContainer onClick={toggleCartDropdown}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;