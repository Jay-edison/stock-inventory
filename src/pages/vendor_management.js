import { useState } from "react";

const VendorManagement = () => {

    const [checkallBool, setCheckAllBool] = useState(false);

    const [checkbox_1, setCheckbox1] = useState(false);
    const checkbox = document.getElementById('checkbox');

    const handleCheckBox = () => {
        if(!checkallBool){
            setCheckAllBool(true);
            setCheckbox1(true);
        }
        else {
            setCheckbox1(false);
            setCheckAllBool(false);
        }
    }

    const handleDeselect = () => {
        setCheckAllBool(false);
        checkbox.checked = false;
    }

    return (
        <>
            <main>
                <div className="container">
                    <p className="container-header-text">VENDOR MANAGEMENT|<strong>VIEW VENDOR</strong></p>


                    <div className="mini-container">
                        <div className="inner">
                            <p className="inner-header-text">Search Details</p>


                            <div className="split-3">
                                <select className="my-select" name="">
                                    <option value="Select a vendor and document">Select a vendor and document</option>
                                </select>


                                <select className="my-select" name="">
                                    <option value="Search by vendor status">Search by vendor status</option>
                                </select>

                                <select className="my-select" name="">
                                    <option value="Search by vendor evaluation">Search by vendor evaluation</option>
                                </select>

                                <div className="search-input-container">
                                    <span className="hide" ></span>
                                    <input className="search-input" type="search" placeholder=" Search by" />
                                    <i className="fa fa-search"></i>
                                </div>


                                <button className="vendor-btn" type="button" name="button">Search</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="grids">
                    <div className="select-record">
                        <div className="options">
                            <label>Record per page</label>
                            <input className="number-input" type="number" placeholder="100" />
                            <button className="records-btn" type="button" name="button">Go To</button>
                            {
                                checkallBool ? (
                                    <div className="side-option">
                                        <button className="records-btn" type="button" name="button">Select All</button>
                                        <button className="records-btn" type="button" onClick={handleDeselect} name="button">Deselect All</button>
                                        <button className="records-btn-red" type="button" name="button">Delete Selected</button>
                                    </div>
                                ) : (
                                    <div></div>
                                )
                            }
                            
                        </div>
                        <div className="transfer">
                            <div className="online-body">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>select</td>
                                            <td>ID</td>
                                            <td>Company Name</td>
                                            <td>Contact Person</td>
                                            <td>Email</td>
                                            <td>Phone</td>
                                            <td>Qualify</td>
                                            <td>Status</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 
                                                <div className="round">
                                                    <input type="checkbox" defaultChecked={checkbox_1} onClick={handleCheckBox} id="checkbox" />
                                                    <label htmlFor="checkbox"></label>
                                                </div>
                                            </td>
                                            <td>1</td>
                                            <td>Ndsng</td>
                                            <td>Oladeja</td>
                                            <td>muhdoladejio@yahoo.com</td>
                                            <td>787878787878</td>
                                            <td><img className="grid-img" src={require("./asset/images/unApproved.svg").default} alt="not Approved"/></td>
                                            <td><img className="req-img" src={require("./asset/images/Approved.svg").default} alt="Approved"/></td>
                                            <td><img src={require("./asset/images/edit down.svg").default} alt="edit"></img> </td>
                                            <img className="img-eye" src={require("./asset/images/Fill 1.svg").default} alt="beep"></img>
                                            <img className="img-check" src={require("./asset/images/Page 1.svg").default} alt="marker"></img>
                                           
                                        

                                        </tr>
                                        <tr>
                                            <td> 
                                                <div className="round">
                                                    <input type="checkbox" disabled id="checkbox-2" />
                                                    <label htmlFor="checkbox-2"></label>
                                                </div>
                                            </td>
                                            <td>2</td>
                                            <td>Midtechng</td>
                                            <td>Ifeowo Adeaje</td>
                                            <td>info@midtechng.com</td>
                                            <td>08087342517</td>
                                            <td><img className="grid-img" src={require("./asset/images/Approved.svg").default} alt="Approved"/></td>
                                            <td><img className="req-img" src={require("./asset/images/Approved.svg").default} alt="Approved"/></td>
                                            <td><img src={require("./asset/images/edit down.svg").default} alt="edit"/></td>
                                            <img className="img-eye" src={require("./asset/images/Fill 1.svg").default} alt="beep"></img>
                                            <img className="img-check" src={require("./asset/images/Page 1.svg").default} alt="marker"></img>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <p id="container-footer-bid">1 0f 2 of 2</p>
                </div>
            </main>
        </>
    );
};

export default VendorManagement;