import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.actions';
// import { signOutUser } from "../../utils/firebase/firebase.utils"

import { ReactComponent as CrwnLogo } from "../../assets/logo.svg"
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles"
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';
import DisplayName from '../../components/display-name/display-name.component';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const closeCartDropdown = () => dispatch(setIsCartOpen(false));

    const handleSignOutUser = () => {
        dispatch(signOutStart());
        closeCartDropdown();
    }
    console.log(currentUser);
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/" onClick={closeCartDropdown}>
                <CrwnLogo className="logo"/>
            </LogoContainer>
            
            <NavLinks>
            { currentUser ? <DisplayName name={currentUser.displayName}/> : null}    
                <NavLink to="/shop" onClick={closeCartDropdown}>
                    SHOP
                </NavLink>
                {
                    currentUser ? (
                        <NavLink as="span" onClick={handleSignOutUser}>SIGN-OUT</NavLink>
                    ) : (
                        <NavLink to="/auth" onClick={closeCartDropdown}>
                            SIGN-IN
                        </NavLink>
                    )
                }
                <CartIcon/>             
            </NavLinks>
            {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;