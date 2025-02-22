import React from "react";
import "./ContentList.css";
import ContentItem from "./ContentItem/ContentItem";
import { InputLabel,FormControl,Select, MenuItem,Button, Input } from '@mui/material'; 
import { IoMdCloseCircle } from "react-icons/io";

function ContentList(props) {
  let list = props.list; 
  const PaymentChannels = [
    { id: 1, name: "บัตรเครดิต" },
    { id: 2, name: "เงินสด" },
    { id: 3, name: "พร้อมเพย์" }
    ];

    const TypeList = [
        { id: 1, name: "รายจ่าย" },
        { id: 2, name: "รายรับ" }
    ];

    const Category = [
        { id: 1, name: "อาหาร" },
        { id: 2, name: "เครื่องดื่ม" },
        { id: 3, name: "ของหวาน" }
    ];

  const [searchQuery, setSearchQuery] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("");
  const [paymentFilter, setPaymentFilter] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("");
 
  
  const filteredList = list.filter((item) => {
    return (
      (searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (categoryFilter === "" || item.type_category === categoryFilter) &&
      (paymentFilter === "" || item.type_payment === paymentFilter) &&
      (typeFilter === "" || item.type === typeFilter)
    );
  });

  const handleDeleteFilter =(id)=>{
    console.log(' list id', id)
    props.deleteItem(id)
  }

  const handleClearFilter =()=>{
    setSearchQuery("")
    setCategoryFilter("")
    setPaymentFilter("")
    setTypeFilter("")
  }

  return (
    <div className="contentWrapper">
      <div className="contentFilter"> 
        <h3> ค้นหาข้อมูล </h3>
        <div className="inputFilter">
            <Input type="text" placeholder="ค้นหาด้วยชื่อรายการ..." className="searchInput" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <Button onClick={handleClearFilter} id="btn-clear" variant="outlined">ยกเลิก</Button>
        </div>
        <div className="filterOptions" style={{color:"#333"}}>
           {/* หมวดหมู่ (Category) */}
            <FormControl variant="filled" style={{width: "33.33%"}} fullWidth margin="normal">
                <InputLabel id="category-label">📂 ทุกหมวดหมู่</InputLabel>
                <Select
                labelId="category-label"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                >
                <MenuItem value="">📂 ทุกหมวดหมู่</MenuItem>
                {Category.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                    {category.name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>

            {/* ช่องทางจ่าย (Payment Channels) */}
            <FormControl variant="filled" style={{width: "33.33%"}} fullWidth margin="normal">
                <InputLabel id="payment-label">💳 ทุกช่องทางจ่าย</InputLabel>
                <Select
                labelId="payment-label"
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value)}
                >
                <MenuItem value="">💳 ทุกช่องทางจ่าย</MenuItem>
                {PaymentChannels.map((payment) => (
                    <MenuItem key={payment.id} value={payment.id}>
                    {payment.name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>

            {/* ประเภท (Type) */}
            <FormControl variant="filled" style={{width: "31%"}} fullWidth margin="normal">
                <InputLabel id="type-label">📌 ทุกประเภท</InputLabel>
                <Select
                labelId="type-label"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                >
                <MenuItem value="">📌 ทุกประเภท</MenuItem>
                {TypeList.map((type) => (
                    <MenuItem key={type.id} value={type.id}>
                    {type.name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>

        </div>
      </div>
      <div className="content-list">
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <ContentItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              typeCategory={item.type_category}
              typePayment={item.type_payment}
              type={item.type} 
              deleteId={handleDeleteFilter}
            />
          ))
        ) : (
          <p className="noResults"><IoMdCloseCircle/> ไม่พบข้อมูลที่ตรงกับเงื่อนไข</p>
        )}
      </div>
    </div>
  );
}

export default ContentList;
