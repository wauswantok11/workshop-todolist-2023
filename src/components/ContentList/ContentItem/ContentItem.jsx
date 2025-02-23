import React, { useState } from "react";
import "./ContentItem.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { TbCategoryPlus } from "react-icons/tb";
import { TbCurrencyBaht } from "react-icons/tb";

function ContentItem(props) {
  let category, payment, type;
  const typeCategory = props.typeCategory;
  if (typeCategory === 1) {
    category = "อาหาร";
  } else if (typeCategory === 2) {
    category = "เครื่องดื่ม";
  } else if (typeCategory === 3) {
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

  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");

  const handleDeleteFilter = (id) => {
    setDeleteId(id);
  };

  const handleEditFilter = (id) => {
    setEditId(id);
  };
 
  React.useEffect(() => {
    props.deleteId(deleteId);
  }, [deleteId]);
 
  React.useEffect(() => {
    props.editId(editId);
  }, [editId]);
 
  return (
    <div className="content-item" key={props.id}>
      <div className="item-header">
        <h3>{props.id}. {props.name}</h3>
        <span className="price-tag">
          {props.price} <TbCurrencyBaht />{" "}
        </span>
      </div>
      <div className="item-details">
        <strong>
          <TbCategoryPlus />{" "}หมวดหมู่ :{" "}{category}
        </strong>
        <strong>
          {" "}
          <FaPaypal />{" "}การชำระเงิน :{" "}{payment}
        </strong>
        <strong>
          <RiAlignItemBottomFill />{" "}ประเภทรายการ :{" "}{type}
        </strong>
      </div>
      <div className="item-controller">
        <span
          onClick={() => {
            handleEditFilter(props.id);
          }}
          className="edit-tag"
        >
          {" "}
          <FaEdit />{" "}
        </span>
        <span
          onClick={() => {
            handleDeleteFilter(props.id);
          }}
          className="delete-tag"
        >
          {" "}
          <MdDelete />{" "}
        </span>
      </div>
    </div>
  );
}

export default ContentItem;
