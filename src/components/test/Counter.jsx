import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../stores/slices/counterSlice';
import { useNavigate } from 'react-router-dom';
import routes from '@src/router/index.js';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            <button onClick={() => navigate(routes.home)}>BACK</button>
        </div>
    );
};

export default Counter;
