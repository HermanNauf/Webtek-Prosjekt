
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from '../../actions/actions';

export default function AddToCart({item}){
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cartList);

    dispatch(setCartItems([...cartList, item]));


}