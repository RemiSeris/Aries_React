# Aries_React

## Purpose

This is an Introduction to react, we will learn some core concept, providing strong basics.

* **JSX Syntax**
* **Functional Component**
* **Props**
* **State Manadgement**
* **Context** (advanced)

## Prerequisite

First of all, let's get some setup:

  * **VSCode**: https://code.visualstudio.com/ (optional) - Number 1 code editor on the market
  * **Git Bash**: https://gitforwindows.org/ (mandatory) - A Git manager bundled with a Unix Shell, allows you to run shell command including git
  * **Node JS**: https://nodejs.org/en/download/ (mandatory) - Javascript Runtime environement
  * **Yarn**: https://classic.yarnpkg.com/fr/docs/install/#windows-stable (mandatory) - Package manager
  
  **Clone The repository** : git clone https://github.com/RemiSeris/Ipi_React.git
  
  * **Get into the code folder**: cd Ipi_React
  
 * **Get into the code folder**: cd my-app
  
  * **Install dependecies**: yarn / npm install

 * **Run in developpement**: yarn start / npm start
 
 * **Open vsCode in CurrentDirectory**: code .

 * **Access to github**: Send github account mail or username to remiseris@gmail.com with obect 'Compte github Firstname Lastname' .

  
## Workshops

### 1 Hello scalability

**Goals** :

* Run a React based Project
* Create our First functional component
* Create and use a repetible components with props


**Instruction**:

1. Do all the the prerequisite
2. Clone the project
3. Run the project

*Exo 1*

1. Create a component named List with the props children, display children in the HTML
```javascript
const List = ({ children }) => {
    return (
        <div >
            {children}
        </div>
    )
}
```
2. Create A component named Item wich display "HELLO WORLD"
3. Display List and Item in App
4. Display a title to List "Ma list"
5. Display many Items in a List
6. Display Many List with many Items in App
7. (optional) Display List title as a props name 'title'
8. (optional) Display Item title as a props name 'title'

* End Exo 1*

4. Create a Functionnal component called **Item** with border, shadow, and a "Hello World" in the center .
5. Create a Functionnal component called **List** containing many **Item**
6. Pass down the **Item** content as Props from the **List** component (item should display "Hello World 1", "Hello World 2", ...) 


### 2 State of the art 

**Goals** :

* Meet the hooks notion
* Learn how to use State

**Ressource** :

* useState Hooks documentation https://fr.reactjs.org/docs/hooks-state.html
* Array documentation https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

**Instruction**:

1. Make a "List" component pilling the previously made "Item" components in column
2. Make a button component with a onClick prop and a title prop
3. Add two Button too your layout on with the string "Add" and one With the string "Delete" to The App Component
4. When the "Add" button is clicked an list is added to the lists, When the "Delete" button is clicked an list is deleted from the lists


**Instruction 2**:

1. Add a state to the compoent item
2. create a class css itemDone
3. when a item is clicked we apply the css class done at the item
4. when is clicked when done we remove the css class

### 3 Hello open world !

**Goals** :

* Discover the library system
* Discover an ui library

**Ressource** :

* Material-ui documentation https://material-ui.com/getting-started/installation/
* LocalStorage documentation https://developer.mozilla.org/fr/docs/Web/API/Storage/LocalStorage

**Instruction**:

1. Built your layout with material-ui components
2. Store and retrieve your data from localStorage
3. Handle list creation , list deletion (list will have a title)
4. Implement a call to action to store your list/items
5. Handle item naming/renaming
6. Handle item Check/Uncheck

### 4 Did i git it ?

**Goals** :

* Asses your knowledge on react fundamental
* Familiarize with git

**Ressource** :

* Git documentation https://help.github.com/en/github/using-git/learning-about-git

**Instruction**:

1. Create a github account
2. Create your branch with *git checkout -b FirstNameLastname*
3. Add all repositorty files to your commit index *git add --all*
4. Commit your files *git commit -m "my commit msg"*
5. Push your commit to the remote repository *git push*
6. Check on github !

**On Git**:

* To switch branches git checkout *branch name*
* To push work *git push*
* To pull from master *git pull origin master*


### 6 It's all about context ?

**Goals** :

* Dicover the useContext Hooks
* Familiarize date managment

**Ressource** :

* Moment documentation https://momentjs.com/
* Hooks documentation https://fr.reactjs.org/docs/hooks-reference.html#usecontext

**Instruction**:

1. Add a date field to the list model
2. Add a date to the Header
3. Add a button to switch the date
4. Display only  the targeted date lists
5. Use a scroll area view


### 7 Let's get on Fire(Base)

**Goals** :

* Familiarize with the firebase console
* Lear some noSQL notions

**Ressource** :

* Firebase Quick start https://firebase.google.com/docs/firestore/quickstart
* Firebase Console https://console.firebase.google.com/
* Cloud Firestore documentation https://rnfirebase.io/ and https://rnfirebase.io/firestore/usage
* firestore get data documentation https://firebase.google.com/docs/firestore/query-data/get-data
* Firestore add Date documentation https://firebase.google.com/docs/firestore/manage-data/add-data

**Instruction**:

1. Start a Project into firebase
2. Create a collection Items
3. Create a collection List
4. Create list from client into firestore
5. Create item in list from client into firestore
6. Get List from firestore

### Learn by yourself

* **React Documentation**: https://fr.reactjs.org/docs/components-and-props.html
* **Git**: https://medium.com/@onejohi/git-understanding-the-basics-ba004a20dacc
