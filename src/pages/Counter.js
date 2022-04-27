import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../slices/counterSlide';

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>counter</h1>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment({step:10}))}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    );
}

export default Counter;
