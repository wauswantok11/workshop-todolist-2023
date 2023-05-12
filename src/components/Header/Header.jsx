import React from "react";
import "./Header.css"

function Header() {
    return (
        <div className="container-header">
            <div className="label-header">
                Filter:
            </div>
            <select class="select-header">
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
            </select>
        </div>

    )
}

export default Header;
