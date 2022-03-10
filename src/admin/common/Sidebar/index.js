import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Accordion, Container, Row } from "react-bootstrap";
import { BiCategoryAlt } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import AddNewCategory from "../AddCategory";
import { getCategories } from "../../api";

import "./styles.scss";

const Sidebar = () => {
  const getCategoriesQuery = useQuery("categories", getCategories);

  const [addCategoryVisible, setAddCategoryVisible] = useState(false);
  const sidebarItems = [
    {
      name: "Categories",
      icon: <BiCategoryAlt />,
    },
    {
      name: "Orders",
      icon: <MdProductionQuantityLimits />,
    },
  ];

  const handleCategoryAdd = (data) => {
    // createCategoryMutation.mutate(data);
  };

  return (
    <Container className="admin-sidebar-container py-2">
      <AddNewCategory
        show={addCategoryVisible}
        onClose={() => setAddCategoryVisible(false)}
        onSubmit={handleCategoryAdd}
      />
      <Accordion defaultActiveKey={0} flush>
        {sidebarItems.map((item, key) => (
          <Accordion.Item eventKey={key} key={key}>
            <Accordion.Header>
              <div className="admin-sidebar-item-header">
                {item.icon}
                {item.name}
              </div>
            </Accordion.Header>
            <Accordion.Body className="admin-sidebar-sub-items px-4">
              <Row className="sidebar-add py-2">
                <h6 onClick={() => setAddCategoryVisible(true)}>
                  Add Category
                  <FaPlus className="sidebar-button-add" />
                </h6>
              </Row>
              <hr />
              {getCategoriesQuery.isSuccess &&
                getCategoriesQuery.data.data.view_category.categories.map(
                  (el, index) => (
                    <Row key={index} className="py-2">
                      <Link to={`admin/categories/${el.id}`}>
                        <h6 title={el.category_description}>
                          {el.category_name}
                        </h6>
                      </Link>
                    </Row>
                  )
                )}
              {/* <Row className="py-2">
                <Link to={`admin/categories`}>
                  <h6 className="text-primary">Show all</h6>
                </Link>
              </Row> */}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Sidebar;
