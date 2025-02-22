import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function Service(props) {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("")
    const [SelectPaymentChannels, setPaymentChannels] = React.useState("");
    const [SelectTypeList, setSelectTypeList] = React.useState("");
    const [SelectCategory, setSelectCategory] = React.useState("");


    const  handleSetPrice =(e)=>{ 
        setPrice(e.target.value);
    }; 
    const  handleSetName =(e)=>{ 
        setName(e.target.value);
    }; 
    const handlePaymentChannelsChange = (e) => { 
        setPaymentChannels(e.target.value);
    };
    const handleSelectTypeListChange = (e) => { 
        setSelectTypeList(e.target.value);
    };
    const handleSelectCategory = (e) => { 
        setSelectCategory(e.target.value);
    };

    const PaymentChannels = [
        { id: 1, name: "บัตรเครดิต" },
        { id: 2, name: "เงินสด" },
        { id: 3, name: "พร้อมเพย์" },
    ];
    const TypeList = [
        { id: 1, name: "รายจ่าย" },
        { id: 2, name: "รายรับ" },
    ];
    const Category = [
        { id: 1, name: "อาหาร" },
        { id: 2, name: "เครื่องดื่ม" },
        { id: 3, name: "ของหวาน" },
    ];

    React.useEffect(() => {}, [SelectPaymentChannels]);

    React.useEffect(() => {}, [SelectTypeList]);

    React.useEffect(() => {}, [SelectCategory]);

    async function handlerSubmitForm() { 
        const newList = {
            name: name,
            price: price,
            type_category: SelectCategory,
            type_payment: SelectPaymentChannels,
            type: SelectTypeList,  
        }
        setName("");
        setPrice("")
        setPaymentChannels("");
        setSelectTypeList("");
        setSelectCategory("");
        props.addNewList(newList)
    }

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="name">ชื่อรายการ</InputLabel>
        <Input value={name} onChange={handleSetName} type="text" id="name" />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="amount">ราคา</InputLabel>
        <Input value={price} onChange={handleSetPrice} type="number" id="amount" />
      </FormControl>

      <FormControl variant="filled" fullWidth margin="normal">
        <InputLabel id="category-label">หมวดหมู่</InputLabel>
        <Select
          labelId="category-label"
          id="select-category"
          value={SelectCategory}
          onChange={handleSelectCategory}
        >
          {Category.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="filled" fullWidth margin="normal">
        <InputLabel id="payment-label">ช่องทางการจ่ายเงิน</InputLabel>
        <Select
          labelId="payment-label"
          id="select-payment-channels"
          value={SelectPaymentChannels}
          onChange={handlePaymentChannelsChange}
        >
          {PaymentChannels.map((payment) => (
            <MenuItem key={payment.id} value={payment.id}>
              {payment.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="filled" fullWidth margin="normal">
        <InputLabel id="type-label">ประเภทรายการ</InputLabel>
        <Select
          labelId="type-label"
          id="select-type-list"
          value={SelectTypeList}
          onChange={handleSelectTypeListChange}
        >
          {TypeList.map((type) => (
            <MenuItem key={type.id} value={type.id}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div style={{ marginBottom: "20px" }}>
        <Button
          onClick={handlerSubmitForm}
          variant="contained"
          sx={{ mt: 2, mr: 1 }}
        >
          เพิ่มข้อมูล
        </Button>
        <Button variant="outlined" sx={{ mt: 2 }}>
          ยกเลิก
        </Button>
      </div>
    </Box>
  );
}

export default Service;
