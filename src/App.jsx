import './App.css'
import React , {useState} from 'react'
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

  const [allList, setAllList] = useState(list)
  const [edit, setEdit] = useState("")

  const addNewList = (newList) =>{ 
    const newData = {
      ...newList,
    }
    setAllList((prevList) => [
      ...prevList,
      { ...newData, id: uniqueId() }
    ]);
  }
  const clearEditList = () => {
    setEdit("");  
  };
  const editNewList = (editList) => { 
    console.log('editList', editList);
  
    setAllList((prevList) => 
      prevList.map((item) =>
        item.id === editList.id ? { ...item, ...editList } : item
      )
    );
  };
  
  const handleDeleteId = (id) => {
    const updatedList = allList.filter((item) => item.id !== id);
    setAllList(updatedList)
  }

  const handleEditId = (id) => {
    const items = allList.filter((item) => item.id === id);
    setEdit(items)
  }

  return (
    <div className="App">
      <Header />
      <Service addNewList={addNewList} editList={edit} editNewList={editNewList} clearEditList={clearEditList}/>
      <ContentList list={allList} deleteItem={handleDeleteId} editItem={handleEditId}/>
    </div>
  )
}

export default App
