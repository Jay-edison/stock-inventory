import { Outlet } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <div className="Sidebar">
            <h2>John Robot</h2>
            <a className="name-logo" href=""><i className="fa fa-user-circle"></i></a>
            <a className="chevron" href=""><i className="fa fa-chevron-down"></i></a>
            <ul>
            <li className="active"><a href="/"><i className="fa fa-home"></i>Dashboard Home</a></li>
            <li className="active"><a href="/request-management"><i className="fa fa-align-left"></i>Request Managment</a><a className="chevron-down" href=""><i className="fa fa-chevron-down"></i></a></li>
            <li className="active"><a href="/vendor-management"><i className="fa fa-users"></i>Vendor Managment</a><a className="chevron-down" href=""><i className="fa fa-chevron-down"></i></a></li>
            <li className="active"><a href="/sales"><i className="fa fa-money"></i>Sales</a><a className="chevron-down" href=""><i className="fa fa-chevron-down"></i ></a></li>
            <li className="active"><a href=""><i className="fa fa-stack-exchange"></i> Stock</a><a className="chevron-down" href=""><i className="fa fa-chevron-down"></i></a></li>
            <li className="active"><a href=""><i className="fa fa-cog"></i>Settings</a><a className="chevron-down" href=""><i className="fa fa-chevron-down"></i></a></li>
            <li className="active"><a href=""><i className="fa fa-clone"></i>Report</a> <a className="chevron-down" href=""><i className="fa fa-chevron-down"></i ></a></li>
            </ul>
        </div>

        <div className="main-content">
            <Outlet />
            <footer>
              <div className="footer-container">
                                           
                  <div className="container-details">
                    <h2>Copyright &#169; 2022 <b>Procurement Portal.</b> All rights reserved.</h2>
                     
                </div>
              </div>
                            
          </footer>
        </div>
        
      </div>

    </>
  )
};

export default Layout;
