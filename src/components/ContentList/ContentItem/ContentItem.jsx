import React from 'react';
import "./ContentItem.css"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { TbCategoryPlus } from "react-icons/tb";
import { TbCurrencyBaht } from "react-icons/tb";

function ContentItem(props) {
  // console.log("props", props);
  let category, payment, type;
  if (props.typeCategory === 1) {
    category = "อาหาร";
  } else if (props.typeCategory === 2) {
    category = "เครื่องดื่ม";
  } else if (props.typeCategory === 3) {
    category = "ของหวาน";
  }
  if (props.typePayment === 1) {
    payment = "บัตรเครดิต";
  } else if (props.typePayment === 2) {
    payment = "เงินสด";
  } else if (props.typePayment === 3) {
    payment = "พร้อมเพย์";
  }
  if (props.type === 1) {
    type = "รายจ่าย";
  } else if (props.type === 2) {
    type = "รายรับ";
  }

  const [deleteId, setDeleteId] = React.useState("")
  const handleDeleteFilter =(id)=>{
    setDeleteId(id)
  }

  if (deleteId != ""){  
    props.deleteId(deleteId) 
  }


  return (
    <div className="content-item" key={props.id}>
      <div className="item-header">
        <h3>{props.name}</h3>
        <span className="price-tag">{props.price} <TbCurrencyBaht/> </span>
      </div>
      <div className="item-details">
      <table className="contentTable">

        <tr>
          <td>
            <strong><TbCategoryPlus/> {" "} หมวดหมู่ :</strong>
          </td>
          <td>{category}</td>
        </tr>
        <tr>
          <td>
            <strong> <FaPaypal/> {" "} การชำระเงิน :</strong>
          </td>
          <td >{payment}</td>
        </tr>
        <tr>
          <td>
            <strong><RiAlignItemBottomFill/> {" "}ประเภทรายการ :</strong> 
          </td>
          <td>{type}</td>
        </tr> 
        </table>
      </div>
      <div className="item-controller">
        <span onClick={()=>{}} className="edit-tag" > <FaEdit/> </span>
        <span onClick={()=>{handleDeleteFilter(props.id)}} className="delete-tag"> <MdDelete/> </span>
      </div>
    </div>
  );
}

export default ContentItem;
