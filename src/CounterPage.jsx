import { useDispatch, useSelector } from "react-redux"
import { increment, multByAmount, decrement } from "./store/Counter"



export default function CounterPage(){

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>Count: {count}</h1>
            <br /><br />
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(multByAmount(2))}>*2</button>
        </div>
    )
}