import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { CounterContext } from '../CounterContextProvider'
import Counter2 from './Counter2'

const Counter1 = () => {
    const { count, setCount } = useContext(CounterContext)

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
                {"Counter 1 :" + count.toString()}
            </Button>
        </div>
    )
}


export default Counter1
