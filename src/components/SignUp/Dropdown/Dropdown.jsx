import React, { useState } from "react";
import "./Dropdown.css";

export default function DropdownMultiSelect() {
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("Mintaqani tanlang");
    const [isRoleDropdownOpen, setRoleDropdownOpen] = useState(false);
    const [isRegionDropdownOpen, setRegionDropdownOpen] = useState(false);

    const roles = ["DEHQON", "AGRONOM", "TALABA", "FARMER", "OLIM", "DASTURCHI"];
    const regions = ["SHARQ", "G'ARB", "JANUB", "SHIMOL", "MARKAZ"];

    const toggleRoleSelection = (role) => {

        if (selectedRoles.includes(role)) {
            setSelectedRoles(selectedRoles.filter((r) => r !== role));
        } else {
            setSelectedRoles([...selectedRoles, role]);
        }
    };

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        setRegionDropdownOpen(false);
    };

    return (
        <div className="dropdown-container">
            {/* Role Dropdown */}
            <div className="dropdown">
                <button
                    className="dropdown-btn"
                    value='Rolingizni tanlang'
                    onClick={(e) => {
                        e.preventDefault()
                        setRoleDropdownOpen(!isRoleDropdownOpen)

                    }}
                >
                    {selectedRoles.length > 0
                        ? selectedRoles.join(", ")
                        : "Rolingzni tanlang"}{" "}
                    
                </button>
                {isRoleDropdownOpen && (
                    <div className="dropdown-menu">
                        {roles.map((role, index) => (
                            <div
                                key={index}
                                className={`dropdown-item ${selectedRoles.includes(role) ? "selected" : ""
                                    }`}
                                onClick={() => toggleRoleSelection(role)}
                            >
                                {role}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Region Dropdown */}
            <div className="dropdown">
                <button
                    className="dropdown-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        setRegionDropdownOpen(!isRegionDropdownOpen)
                    }}
                >
                    {selectedRegion} 
                </button>
                {isRegionDropdownOpen && (
                    <div className="dropdown-menu">
                        {regions.map((region, index) => (
                            <div
                                key={index}
                                className="dropdown-item"
                                onClick={() => handleRegionSelect(region)}
                            >
                                {region}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
