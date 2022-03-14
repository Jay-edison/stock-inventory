import { useState } from "react";


const Sales = () => {

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
                <div class="container">
                    <p class="container-header-text">Sales|<strong>Sale Order</strong></p>

                    
                           
                   
                        <div class="inner-show">
                            <p class="inner-header">Show Entries</p>
                            </div>
                        
                                <input class="show-category" type="search" placeholder="Input number"/>
              
                                    <input class="search-box" type="search"  placeholder=" Search by"/>
                                    <i class="fa fa-search-minus"></i>
                                    

                                    <div class="container">
                                        <p class="container-header-bid">Sales Order</p>
                                        </div>

                                        <div class="sale-container">
                                                <div class="transfer">

                                                    <div class="online-body">
                                                    <div class="online-body">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <td>Select</td>
                                                                    <td>ID</td>
                                                                    <td>Due Date</td>
                                                                    <td>Customer Name</td>
                                                                    <td>Batch Number</td>
                                                                    <td>Subtotal</td>
                                                                    <td>Total</td>
                                                                    <td>Negotiated</td>
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
                                                                    <td>Nov_20,2020,7:40pm</td>
                                                                    <td>OsamudiamenImasuen</td>
                                                                    <td>2640100220200525</td>
                                                                    <td>2</td>
                                                                    <td>2</td>
                                                                    <td>$12,000</td>
                                                                    <td><img className="req-img" src={require("./asset/images/Pending.svg").default} alt="pend"/></td>
                                                                    <td><img src={require("./asset/images/edit down.svg").default} alt="edit"/></td>
                                                                </tr>
                                                                <tr>
                                                                <td> 
                                                <div className="round">
                                                    <input type="checkbox" defaultChecked={checkbox_1} onClick={handleCheckBox} id="checkbox" />
                                                    <label htmlFor="checkbox"></label>
                                                </div>
                                            </td>
                                                                    <td>2</td>
                                                                    <td>Nov_20,2020,7:40pm</td>
                                                                    <td>OsamudiamenImasuen</td>
                                                                    <td>2640100220200525</td>
                                                                    <td>2</td>
                                                                    <td>2</td>
                                                                    <td>$12,000</td>
                                                                    <td><img className="req-img" src={require("./asset/images/Approved.svg").default} alt="Approved"/></td>
                                                                    <td><img src={require("./asset/images/edit down.svg").default} alt="edit"/></td>  
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                            
                                                    
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        
                                    
                      
                            
                            <div class="container">
                                <p id="container-footer-bid">1 0f 2 of 2</p>
                            </div>
                </div>
            
            </main>
 
 
 
 
 
 
 
        </>


    );
};


export default Sales;