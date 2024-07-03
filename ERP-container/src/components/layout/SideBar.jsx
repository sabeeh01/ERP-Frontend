
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Assuming you are using react-router-dom for routing
import { Link } from "react-router-dom";
import { Nav, Dropdown } from "react-bootstrap";

const SideBar = ({ state, routes }) => {
  const location = useLocation();
  const asPath = location.pathname;
  const [sidebarItems, setSidebarItems] = useState(routes);
  const [expandedItems, setExpandedItems] = useState({}); 

  useEffect(() => {
    const updatedSidebarItems = routes.map((item) => ({
      ...item,
      active: asPath.startsWith(item.path),
    }));
    setSidebarItems(updatedSidebarItems);
  }, [asPath]);

  const toggleExpand = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderSidebarItems = (items, parentIndex = null) => {
    return items.map((item, index) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded =
        expandedItems[parentIndex !== null ? `${parentIndex}-${index}` : index];

      return (
        <li
          className="nav-item mt-2"
          key={index}
          onClick={() => state && state(false)}
        >
          <div
            onClick={() =>
              hasChildren &&
              toggleExpand(
                parentIndex !== null ? `${parentIndex}-${index}` : index
              )
            }
          >
            <Link
              to={item.path}
              className={`nav-link ${
                item.active ? "active" : "link-body-emphasis"
              }`}
              aria-current="page"
            >
              {item.label}
            </Link>
          </div>
          {hasChildren && isExpanded && (
            <ul className="nav flex-column ms-3">
              {renderSidebarItems(
                item.children,
                parentIndex !== null ? `${parentIndex}-${index}` : index
              )}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white vh-100"
      data-bs-scroll="true"
      data-bs-backdrop="false"
    >
      <div className="d-flex justify-content-between">
        <div>
          <Link
            to={"/"}
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">
              {/* <img src={logo} alt="SocialPie Logo" /> */}
            </span>
          </Link>
        </div>
      </div>
      <hr />
      <Nav className="nav-pills flex-column mb-auto">
        {renderSidebarItems(sidebarItems)}
      </Nav>
      <hr />
      <Dropdown>
        <Dropdown.Toggle
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
          variant="transparent"
          id="dropdown-basic"
        >
          <img
            src="https://github.com/Tabish-binaryvibes.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Tabish</strong>
        </Dropdown.Toggle>

        <Dropdown.Menu className="text-small shadow">
          <Dropdown.Item href="#">New project...</Dropdown.Item>
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SideBar;
