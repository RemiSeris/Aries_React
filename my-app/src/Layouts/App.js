//Lorsque on veut créer un component on importe React
import React, { useState, useEffect } from 'react';
import List from '../components/List'
import Item from '../components/Item'
import Button from '@material-ui/core/Button'
import { KEY_LOCAL_STORAGE } from '../const'
import Counter1 from '../components/Counter1';
import CounterContextProvider from '../CounterContextProvider'

//On simule un modéle de donée (tableau de list)
const defaultLists = [
    {
        title: 'Liste 1',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    },
    {
        title: 'Liste 2',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    },
    {
        title: 'Liste 3',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    }
]

//onj déclare un template d'une list
const defaultList = {
    title: 'Nouvelle liste',
    items: [
        {
            title: 'item1',
        },
        {
            title: 'item2',
        },
        {
            title: 'item3',
        },
    ]
}


// on déclare un componet sous forme d'arrow funtion 
const App = () => {
    // on utilise un hooks d'état pour pouvoir moifier la page
    // const [maVariable d'état, mon Setter de la variable] = useState(ma valeur initial)
    const [myLists, setMyList] = useState(defaultLists)


    //On utilise un useEffect pour utiliser un effet
    useEffect(() => {
        const mydataFromStorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
        if (mydataFromStorage)
            setMyList(mydataFromStorage)
    }, [])




    useEffect(() => {
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(myLists))
    }, [myLists])

    //on crée une fonction pour ajouter un élément à la liste
    const addList = () => {

        //on pousse un nouvelle élément dans le tableau de liste
        myLists.push(defaultList)

        // on crée une copie de notre tableau pour changer la référence 
        const listCpy = myLists.map(list => list)

        //on utilise le setter d'état pour changer l'états de nos liste
        setMyList(listCpy)
    }

    //on crée une fonction pour enlever un élément à la liste
    const removeList = () => {

        //on enléve le dernier élément du tableau de list
        myLists.pop()

        // on crée une copie de notre tableau pour changer la référence 
        const listCpy = myLists.map(list => list)

        //on utilise le setter d'état pour changer l'états de nos liste
        setMyList(listCpy)
    }



<<<<<<< HEAD
    const saveList = () => {
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(myLists))
    }

    const getList = () => {
        localStorage.getItem(KEY_LOCAL_STORAGE)
    }

=======
>>>>>>> f962d35f2e969dbd4ddce38acd087985547c958a
    return (
        <div className='layout'>
            {
                // On utilise la méthode .map pour parcourir les éléments,
                // de nos tableau et renvoyer pour chaque élément le component indiquée
                myLists.map(({ items, title }) =>
                    // On affiche nos lists une a une sous forme de component
                    <List title={title} myProps={"zeaaze"} >
                        {
                            // On affiche les items d'une liste une à une sous forme de component
                            items.map(({ title: itemTitle }) => <Item title={itemTitle} />)
                        }
                    </List>
                )}
            {/* On utilise notre component générique Button pour effectuer l'action d'ajout et de supression d'une liste dans le tableau de list*/}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button onClick={addList} variant='contained'>
                    {"ADD"}
                </Button>
                <Button onClick={removeList}>
                    {"DELETE"}
                </Button>
                {/* 
                <Button onClick={addList} title={'Add'} />

                <Button onClick={removeList} title={'delete'} /> 
                */}
            </div>
            <div>
                <CounterContextProvider>
                    <Counter1 />
                </CounterContextProvider>
            </div>
        </div>
    )
}


export default App;
