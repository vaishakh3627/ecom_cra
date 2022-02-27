import React from "react";
import { Accordion, Container, Row } from "react-bootstrap";
import { BiCategoryAlt } from "react-icons/bi";
import { MdProductionQuantityLimits} from "react-icons/md"

import "./styles.scss";

const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Categories",
      icon: <BiCategoryAlt />,
      items: ["CategoryOne", "CategoryTwo", "CategoryThree"],
    },
    {
      name: "Orders",
      icon: <MdProductionQuantityLimits />,
      items: ["CategoryOne", "CategoryTwo", "CategoryThree"],
    },
  ];

  return (
    <Container className="admin-sidebar-container py-2">
      <Accordion flush>
        {sidebarItems.map((item, key) => (
          <Accordion.Item eventKey={key} key={key}>
            <Accordion.Header>
              {item.icon}
              {item.name}
            </Accordion.Header>
            <Accordion.Body className="admin-sidebar-sub-items px-4">
              <Row>Item</Row>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Sidebar;
