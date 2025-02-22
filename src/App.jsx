import './App.css'
import React from 'react'
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header' 
import Service from './components/Service/Service'
import ContentList from './components/ContentList/ContentList'

let list = [
  {
    id: 1,
    name: "ข้าวกระเพาหมูสับไข่ดาว",
    price:65,
    type_category: 1,
    type_payment: 2,
    type: 2,
  },
  {
    id: 2,
    name: "Buy dog food",
    price:500,
    type_category: 1,
    type_payment: 1,
    type: 1,
  },
  {
    id: 3,
    name: "Go to cinema",
    price: 500,
    type_category: 1,
    type_payment: 1,
    type: 1,
  },
  {
    id: 4,
    name: "Print homework",
    price: 500,
    type_category: 1,
    type_payment: 1,
    type: 1,    
  }
]

function App() {
  let initialId = 4;
  function uniqueId(){
    initialId = initialId + 1
    return initialId
  }

  const [allList, setAllList] = React.useState(list)

  const addNewList = (newList) =>{ 
    const newData = {
      ...newList,
    }
    setAllList((prevList) => [
      ...prevList,
      { ...newData, id: uniqueId() }
    ]);
  }
  
  const itemId = (id) => {
    console.log('app id', id)
    const updatedItems = allList.filter((item) => item.id !== id);
    setAllList(updatedItems)
  }

  return (
    <div className="App">
      <Header />
      <Service addNewList={addNewList} />
      <ContentList list={allList} deleteItem={itemId} />
    </div>
  )
}

export default App
