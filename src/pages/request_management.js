import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RequestManagement = () => {

    // Getting the modal source
    function getModal() {
        return document.getElementById("request_item");
    }

    // Creating a set function to set the display value for the modal
    function setModalStatus(status){
        getModal().style.display = status;
    }
    
    // function to call the modal to open
    function open_request_item_modal(e) {
        setModalStatus("block");
    }

    // function to call the modal to close
    function close_request_item_modal(e) {
        setModalStatus("none");
    }

    // function to call the modal to close when you click anywhere else apart from the modal itself
    window.onclick = function(event) {
        if (event.target === getModal()) {
            getModal().style.display = "none";
        }
    }

    // creating constants for the variables that'll be used
    const [requestItems, setRequestItems] = useState([]);

    const [item, setItem] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [purpose, setPurpose] = useState("");
    const [warehouse, setWarehouse] = useState("");
    const [details, setDetails] = useState("");

    const handleItemChange = (event) => {
        setItem(event.target.value)
    }
    const handleManufacturerChange = (event) => {
        setManufacturer(event.target.value)
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }
    const handlePurposeChange = (event) => {
        setPurpose(event.target.value)
    }
    const handleWarehouseChange = (event) => {
        setWarehouse(event.target.value)
    }
    const handleDetailsChange = (event) => {
        setDetails(event.target.value)
    }
    
    const handleEdit = (id) => {
        alert(`Editing request item number ${id}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(`${item}` === ""){
            alert("Item required");
        }
        else if (`${manufacturer}` === ""){
            alert("Manufacturer required");
        }
        else if (`${quantity}` === "0"){
            alert("Quantity required (can't be zero)");
        }
        else if (`${purpose}` === ""){
            alert("Purpose required");
        }
        else if (`${warehouse}` === ""){
            alert("Warehouse required");
        }
        else if (`${details.length}` > 50){
            alert("Details max length reached");
        }
        else {

            setRequestItems([
                ...requestItems,    
                {
                    id: `${requestItems.length + 1}`,
                    item : `${item}`,
                    manufacturer : `${manufacturer}`,
                    quantity : `${quantity}`,
                    purpose : `${purpose}`,
                    warehouse : `${warehouse}`,
                    details : `${details}`,
                }
            ]);

            close_request_item_modal();

        }

    }

    return (
        <>

            <main>
                <div className="container">
                    <p className="container-header-text">Request Managment|<strong>Direct RFQ</strong> </p>

                    <div className="mini-container">
                    <div className="inner">
                        <p className="inner-header-text">Request Details</p>

                        <div className="split-2">
                        <select className="my-select" name="">
                            <option value="Select Request Type">Select Request Type </option>
                        </select>

                        <select className="my-select" name="">
                            <option value="Select Category">Select Category</option>
                        </select>
                        
                        </div>
                    </div>
                    </div>

                    <div className="mini-container">
                        <div className="inner">
                            <p className="inner-header">Request Item</p>

                            <button className="item-btn" onClick={open_request_item_modal}><i className="fa fa-plus"></i> Add Item</button> 
                        </div>
                    </div>
                </div>
                
                {
                    // Check if there's no item added yet then show the Empty items container if not then show the items container 
                    // that iterates through the array of objects added to the requestItems array
                    requestItems.length === 0 ? 
                    (
                        <div className="item-container">
                            <center>
                                <div className="center-text">
                                    <p>You have to add items to your <br/>
                                    Request.</p>
                                </div>
                            <img src={require("./asset/images/Spot hero illustrations (Building Functionality).svg").default} alt="ballons" />
                            </center>
                        </div>
                    )
                    : (
                        <div className="item-container">
                            {/* Starting of iteration using the map function in react */}
                            {requestItems.map(request_item => (
                                <div className="item-2" key={request_item.id}>
                                    <input type="radio"/>
                                    <p className="radio-details"><b>Item</b>: {request_item.item} <br/>
                                    <b> Manufacturer</b>: {request_item.manufacturer} <br/>
                                    <b>Qty {request_item.quantity}</b>: {request_item.purpose} <br/>
                                        {request_item.warehouse}
                                    </p>
                                    <div className="minus-btn-percent">
                                        {/* Incase of editing we are binding the current item id to the handleEdit funtion to use it and get the values of that particular object in the requestItems array */}
                                        <button className="edit-btn" onClick={() => handleEdit(request_item.id)}>Edit</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }

                <div>
                    <button className="item-container-btn to-right"> Make Request</button> 
                </div>

                <div id="request_item" className="modal">
                    <div className="modal-content">
                        <span onClick={close_request_item_modal} className="close">&times;</span>
                        <span onClick={close_request_item_modal} className="close-text">Close</span>
                        
                        {/* For all the input fields including the select and textarea we binded the value with the constant that
                         was previously created using the syntax e.g. value={item}. We also binded an on change fucntion that updates the state of the value inputed
                          at each keystroke interval using the syntax e.g. onChange={handleItemChange}*/}

                        <form className="form-mini-container" name="requestForms">
                        <div className="form-grid two">
                            <div>
                            <p className="form-label-text">Item</p>
                            <select className="form-field" id="item" value={item} onChange={handleItemChange}>
                                <option value="">Select Item </option>
                                <option value="1/2 elbow threared ">1/2 elbow threared </option>
                                <option value="1 elbow threared ">1 elbow threared </option>
                                <option value="2 elbow threared ">2 elbow threared </option>
                            </select>
                            </div>

                            <div>
                            <p className="form-label-text">Manufacturer</p>
                            <select className="form-field" id="manufacturer" value={manufacturer} onChange={handleManufacturerChange}>
                                <option value="">Select Manufacturer</option>
                                <option value="Alamir, Jet">Alamir, Jet</option>
                                <option value="Yusuf, Yacht">Yusuf, Yacht</option>
                                <option value="Sayid, Cars">Sayid, Cars</option>
                            </select>
                            </div>
                            
                        </div>

                        <div className="form-grid two">
                            <div>
                            <p className="form-label-text">Quantity</p>
                            <input className="form-field" type="number" id="quantity" value={quantity} onChange={handleQuantityChange} min="1" placeholder="Input Quantity"/>
                            </div>

                            <div>
                            <p className="form-label-text">Requested for</p>
                            <select className="form-field" id="purpose" value={purpose} onChange={handlePurposeChange}>
                                <option value="">Select Purpose</option>
                                <option value="Finance control">Finance control </option>
                                <option value="Manufacturing control">Manufacturing control </option>
                            </select>
                            </div>
                            
                        </div>

                        <div className="form-grid two">
                            <div>
                            <p className="form-label-text">Store Warehouse</p>
                            <select className="form-field" id="warehouse" value={warehouse} onChange={handleWarehouseChange}>
                                <option value="">Select Location</option>
                                <option value="Benin City Warehouse.">Benin City Warehouse.</option>
                                <option value="FCT City Warehouse.">FCT City Warehouse.</option>
                                <option value="Uyo City Warehouse.">Uyo City Warehouse.</option>
                            </select>
                            </div>
                            
                            <div>
                            <p className="form-label-text">Details</p>
                            <textarea className="form-field no-resize" id="details" value={details} onChange={handleDetailsChange} placeholder="Enter request details"></textarea>
                            </div>

                        </div>

                        <div className="form-grid two">
                            <div className="box-wrapper">
                            <div className="box">
                                <img src={require("./asset/images/football.svg").default} alt="ballons" />
                            </div>
                            <p className="text-block">image_20_04_01 
                            <br/> 10:00:23.jpeg</p>
                            <span className="close-img">&times;</span>
                            </div>
                        </div>

                        <div className="save-grid">
                            <button className="form-btn" type="button" name="button"> <i className="fa fa-paperclip"></i> Add Upload</button>
                            <button className="request-btn" type="button" name="button" onClick={handleSubmit}> SAVE</button>
                        </div>
                        </form>
                    </div>
                </div>
            </main>

        </>
    );
  };  
export default RequestManagement;