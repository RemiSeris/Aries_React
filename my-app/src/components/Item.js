import React from 'react';
import { ListItem } from '@material-ui/core';


const Item = ({ children }) => {

    return (
        <ListItem
            button
        >
            {children}
        </ListItem>
    )
}

export default Item
