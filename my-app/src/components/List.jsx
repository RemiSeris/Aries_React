import React, { useContext } from 'react'
import Switch from '@material-ui/core/Switch'
import { useState } from 'react'
import ClearIcon from "@material-ui/icons/Clear"
import CheckIcon from '@material-ui/icons/Check'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import { AppContext } from '../AppContext'



const List = ({ children, title, state, index }, props) => {
    const {changeList,openAddList} = useContext(AppContext)

    const [checked, setChecked] = useState(state)
    const toggleCheck = () => {
        if (checked)
            setChecked(false)
        else
            setChecked(true)
            changeList(index, !checked);
    }


    return (
        <div className={'list ' + index}>
            <div className="listTitle">
                {state === true
                    ? <CheckIcon color="primary" />
                    : <ClearIcon color="secondary" />
                }
                {title}
                <Switch color="primary" checked={state} onChange={toggleCheck}></Switch>
            </div>
            <div className={'listItems'}>
            <div className='item'>
                    <Button variant="outlined" color="secondary"  onClick={openAddList} startIcon={<EditIcon />} className={"btn-add"}>
                        Add Item
                        </Button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default List