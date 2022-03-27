import { useContext } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";
import { ShoppingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleCartDropdown}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;