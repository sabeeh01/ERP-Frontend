import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Assuming you are using react-router-dom for routing
import { Link } from "react-router-dom";
import { Nav, Dropdown } from "react-bootstrap";

const SideBar = ({ routes }) => {
  const location = useLocation();
  const asPath = location.pathname;
  const [sidebarItems, setSidebarItems] = useState(routes);
  const [expandedItems, setExpandedItems] = useState({});
  useEffect(() => {
    const updatedSidebarItems = routes.map((item) => ({
      ...item,
      active: asPath === item.path,
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
        <li className="nav-item mt-2" key={index}>
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
      <Nav className="nav-pills flex-column mb-auto">
        {renderSidebarItems(sidebarItems)}
      </Nav>
    </div>
  );
};

export default SideBar;
