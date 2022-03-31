import { CART_ACTION_TYPES } from './cart.types';
import {
  toggleCartHidden,
  addItemToCart,
  removeItem,
  clearItemFromCart,
  clearCart
} from './cart.actions';

describe('toggleCartHidden action', () => {
  it('should create the toggleHidden action', () => {
    expect(toggleCartHidden().type).toEqual(CART_ACTION_TYPES.TOGGLE_CART_HIDDEN);
  });
});

describe('addItemToCart action', () => {
  it('should create the addItemToCart action', () => {
    const mockItem = {
      id: 1
    };

    const mockCartItems = [
        {
            id: 2
        },
        {
            id: 3
        }
    ];
    const action = addItemToCart(mockCartItems, mockItem);
    const expectedPayload = [...mockCartItems, {...mockItem, "quantity": 1}]
    expect(action.type).toEqual(CART_ACTION_TYPES.SET_CART_ITEMS);
    expect(action.payload).toEqual(expectedPayload);
  });
});

describe('removeItem action', () => {
  it('should create the removeItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = removeItem(mockItem);

    expect(action.type).toEqual(CART_ACTION_TYPES.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearItemFromCart action', () => {
  it('should create the clearItemFromCart action', () => {
    const mockItem = {
      id: 1
    };

    const action = clearItemFromCart(mockItem);

    expect(action.type).toEqual(CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearCart action', () => {
  it('should create the clearCart action', () => {
    expect(clearCart().type).toEqual(CART_ACTION_TYPES.CLEAR_CART);
  });
});