

import React, { useState } from "react";
import Editservice from "./Component.js/Editservices";
import Editblog from "./Component.js/Editblog";
import Edituser from "./Component.js/Edituser";
import './style.css';

export default function Admin() {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case "Editservice":
                return <Editservice />;
            case "Editblog":
                return <Editblog />;
            case "Edituser":
                return <Edituser />;
            default:
                return <div>Please select a section to edit.</div>;
        }
    };

    return (
        <div className="admin-container">
            {/* Dropdown menu */}
            <select
                className="dropdown"
                onChange={(e) => setSelectedComponent(e.target.value)}
                defaultValue=""
            >
                <option value="" disabled>
                    Select Section to Edit
                </option>
                <option value="Editservice">Edit Services</option>
                <option value="Editblog">Edit Blog</option>
                <option value="Edituser">Edit Users</option>
            </select>

            
            <div className="component-display">
                {renderSelectedComponent()}
            </div>
        </div>
    );
}
