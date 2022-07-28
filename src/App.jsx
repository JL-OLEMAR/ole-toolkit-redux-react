import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter'

import './App.css'

export function App () {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className='App'>

      <h1>Vite + React</h1>
      <p>count is {counter}</p>
      <div className='card'>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          Increment by 2
        </button>
      </div>
    </div>
  )
}
