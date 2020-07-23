import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
import { AppContext } from './AppContextProvider';
import List from './components/List';
import Item from './components/Item';
import Popup from './components/Popup';

const App = () => {
  const { myLists, removeList } = useContext(AppContext)
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleClose = () => {
    setOpen(false)
  }

  const openModal = () => {
    setOpen(true)
  }

  const onInputChange = (text) => {
    setInputValue(text)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={inputValue} onChangeText={onInputChange} />
      <Popup open={open} handleClose={handleClose} />
      {
        myLists.map((list) => <List list={list}>
          {list.items.map((item) => <Item title={item.title} />)}
        </List>
        )}

      <Button title={"Add List"} />
      <Button onPress={removeList} title={"Delete List"} />
      <Button title={"Open Modal"} onPress={openModal} />

      <StatusBar style="auto" />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white'
  }
});



export default App
