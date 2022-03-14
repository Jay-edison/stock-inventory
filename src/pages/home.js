import { Link } from "react-router-dom";
// Usage of the ES6 arrow function to declare and initialize our component
const Home = () => {
    return (
        <main>

          <header>
              <h2>DASHBOARD</h2>
          </header>
          <div className="cards">
            <div className="card-single">
              <div className="home-icon">
                <img
                  className="dashboard-img"
                  src={require("./asset/images/Group 3.svg").default}
                  alt="icon1"
                />
              </div>
              <div className="card-info">
                <span>Vendors Count</span>
                <h1>2</h1>
                <Link className="button" to="/vendor-management">View all Vendors</Link>
              </div>
            </div>
  
            <div className="card-single">
              <div className="home-icon">
                <img
                  className="dashboard-img"
                  src={require("./asset/images/batch count.svg").default}
                  alt="icon"
                />
              </div>
              <div className="card-info">
                <span>Batch Count</span>
                <h1>7</h1>
                <Link className="button" to="#">View all Batches</Link>
              </div>
            </div>
  
            
            <div className="card-single">
              <div className="home-icon">
                <img
                  className="dashboard-img"
                  src={require("./asset/images/order count.svg").default}
                  alt="icon"
                />
              </div>
              <div className="card-info">
                <span>Order Count</span>
                <h1>7</h1>
                <Link className="button" to="#">View all Counts</Link>
              </div>
            </div>
      
  
              <div className="card-single">
                <div className="home-icon">
                  <img
                    className="dashboard-img"
                    src={require("./asset/images/user reg.svg").default}
                    alt="icon"
                  />
                </div>
                <div className="card-info">
                  <span>User Registration</span>
                  <h1>2</h1>
                  <Link className="button" to="#">View all Users</Link>
                </div>
              </div>
          </div>
  
            <div className="grid">
              <div className="recent-grid">
                <div className="projects">
                  <div className="card-header">
                    <h3>Recent Request</h3>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <table>
                        <thead>
                          <tr>
                            <td>Item Name</td>
                            <td>Status</td>
                            <td>Request Date</td>
                            <td>Quantity</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Corolla Tyre</td>
                            <td>
                              <img className="grid-img"
                                src={require("./asset/images/Req not sent.svg").default}
                                alt="Pending"
                              />
                            </td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>20</strong></td>
                          </tr>
                          <tr>
                            <td>Iphone11</td>
                            <td>
                              <img className="req-img"
                                src={require("./asset/images/Req sent.svg").default}
                                alt="req sent"
                              />
                            </td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>100</strong></td>
                          </tr>
                          <tr>
                            <td>Pixel 3</td>
                            <td>
                              <img className="grid-img"
                                src={require("./asset/images/Req not sent.svg").default}
                                alt="not sent"
                              />
                            </td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>200</strong></td>
                          </tr>
                          <tr>
                            <td>Max Engine Oil</td>
                            <td>
                              <img className="req-img"
                                src={require("./asset/images/Req sent.svg").default}
                                alt="req sent"
                              />
                            </td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>1,000</strong></td>
                          </tr>
                          <tr>
                            <td>MacBook Pro</td>
                            <td>
                              <img className="pending-img"
                                src={require("./asset/images/Req Rejected.svg").default}
                                alt="rejected"
                              />
                            </td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>2,000</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <Link className="button-grey" to="/request-management"
                    >View all Requests</Link>
                </div>
              </div>
  
              <div className="recent-grid">
                <div className="projects">
                  <div className="card-header">
                    <h3>My Order Status</h3>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <table>
                        <thead>
                          <tr>
                            <td>Item Name</td>
                            <td>Status</td>
                            <td>Order Date</td>
                            <td><strong>Total</strong></td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Corolla Tyre</td>
                            <td>
                              <img className="grid-img"
                                src={require("./asset/images/Pending.svg").default}
                                alt="processing"
                              />
                            </td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>20</strong></td>
                          </tr>
                          <tr>
                            <td>Iphone11</td>
                            <td>
                              <img className="req-img"
                                src={require("./asset/images/Approved.svg").default}
                                alt="granted"
                              />
                            </td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>100</strong></td>
                          </tr>
                          <tr>
                            <td>Pixel 3</td>
                            <td>
                              <img className="grid-img"
                                src={require("./asset/images/Pending.svg").default}
                                alt="Pending"
                              />
                            </td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>200</strong></td>
                          </tr>
                          <tr>
                            <td>Max Engine Oil</td>
                            <td>
                              <img className="req-img"
                                src={require("./asset/images/Approved.svg").default}
                                alt="processed"
                              />
                            </td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>1,000</strong></td>
                          </tr>
                          <tr>
                            <td>MacBook Pro</td>
                            <td>
                              <img className="pending-img"
                                src={require("./asset/images/Pending.svg").default}
                                alt="Pending"
                              />
                            </td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>2,000</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <Link className="button-grey" to="/sales">View my Orders</Link>
                </div>
              </div>
            </div>
  
            {/* <!-- The grid className houses two divs that'll be divided equally --> */}
            <div className="grid">
              {/* <!-- The recent-grid className is the div that's been divided --> */}
              <div className="recent-grid">
                <div className="projects">
                  <div className="card-header">
                    <h3>Latest Quotation</h3>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <table>
                        <thead>
                          <tr>
                            <td>Item Name</td>
                            <td>Quantity</td>
                            <td>Unit Price</td>
                            <td><strong>Total</strong></td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Corolla Type</td>
                            <td>20</td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>20</strong></td>
                          </tr>
                          <tr>
                            <td>Iphone11</td>
                            <td>100</td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>200</strong></td>
                          </tr>
                          <tr>
                            <td>Pixel 3</td>
                            <td>200</td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>400</strong></td>
                          </tr>
                          <tr>
                            <td>Max Engine Oil</td>
                            <td>1,000</td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>2,000</strong></td>
                          </tr>
                          <tr>
                            <td>MacBook Pro</td>
                            <td>130</td>
                            <td>Nov 12,2020,10:32pm</td>
                            <td><strong>130</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button className="button-grey">View all Quotation</button>
                </div>
              </div>
  
              <div className="recent-grid">
                <div className="projects">
                  <div className="card-header">
                    <h3>Latest Orders</h3>
                  </div>
                  <div className="order-section">
                    <div className="card-body">
                      <table>
                        <thead>
                          <tr>
                            <td>Order ID</td>
                            <td>Batch</td>
                            {/* <!-- <td>Unit Price</td> --> */}
                            <td><strong>Total</strong></td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>BCS1234</td>
                            <td>20</td>
                            {/* <!-- <td>20</td> --> */}
                            <td>140</td>
                          </tr>
                          <tr>
                            <td>BCS1234</td>
                            <td>100</td>
                            {/* <!-- <td>100</td> --> */}
                            <td>150</td>
                          </tr>
                          <tr>
                            <td>BCS1234</td>
                            <td>200</td>
                            {/* <!-- <td>200</td> --> */}
                            <td>180</td>
                          </tr>
                          <tr>
                            <td>BCS1234</td>
                            <td>1,000</td>
                            {/* <!-- <td>1,000</td> --> */}
                            <td>190</td>
                          </tr>
                          <tr>
                            <td>BCS1234</td>
                            <td>130</td>
                            {/* <!-- <td>130</td> --> */}
                            <td>200</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <button className="order-btn">View all Orders</button>
              </div>
            </div>
  
            <div className="recent-grid">
              <div className="projects">
                <div className="card-header">
                  <h4>Latest Batches</h4>
                </div>
                <div className="block">
                  <div className="card-body">
                    <table>
                      <thead>
                        <tr>
                          <td>Refrence No</td>
                          <td>Open Date</td>
                          <td>Close Date</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Ref-00000009</td>
                          <td>Nov 12,2020,10:32pm</td>
                          <td>Nov 12,2020,10:32pm</td>
                        </tr>
                        <tr>
                          <td>Ref-00000009</td>
                          <td>Nov 12,2020,10:32pm</td>
                          <td>Nov 12,2020,10:32pm</td>
                        </tr>
                        <tr>
                          <td>Ref-00000009</td>
                          <td>Nov 12,2020,10:32pm</td>
                          <td>Nov 12,2020,10:32pm</td>
                        </tr>
                        <tr>
                          <td>Ref-00000009</td>
                          <td>Nov 12,2020,10:32pm</td>
                          <td>Nov 12,2020,10:32pm</td>
                        </tr>
                        <tr>
                          <td>Ref-00000009</td>
                          <td>Nov 12,2020,10:32pm</td>
                          <td>Nov 12,2020,10:32pm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <button className="btn-grey">View all Batches</button>
            </div>
  
            
  
        </main>
    );
  };
  
  export default Home;