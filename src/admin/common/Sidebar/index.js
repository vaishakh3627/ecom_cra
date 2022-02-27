import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Accordion, Container, Row } from "react-bootstrap";
import { BiCategoryAlt } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import { createCategory, getCategories } from "./api";
import AddNewCategory from "../AddCategory";

import "./styles.scss";

const Sidebar = () => {
  const createCategoryMutations = useMutation(createCategory, {
    onSuccess: (res) => {
      console.log(res);
    },
    onError: () => {
      console.log("Nope");
    },
  });

  const getCategoriesQuery = useQuery("categories", getCategories);

  const [addCategoryVisible, setAddCategoryVisible] = useState(false);
  const sidebarItems = [
    {
      name: "Categories",
      icon: <BiCategoryAlt />,
      items: [
        {
          name: "CategoryOne",
          route: "one",
        },
        {
          name: "CategoryTwo",
          route: "two",
        },
        {
          name: "CategoryThree",
          route: "three",
        },
      ],
    },
    {
      name: "Orders",
      icon: <MdProductionQuantityLimits />,
      items: [
        {
          name: "CategoryOne",
          route: "one",
        },
        {
          name: "CategoryTwo",
          route: "two",
        },
        {
          name: "CategoryThree",
          route: "three",
        },
      ],
    },
  ];

  const handleCategoryAdd = (data) => {
    createCategoryMutations.mutate(data);
  };

  return (
    <Container className="admin-sidebar-container py-2">
      {console.log(getCategoriesQuery)}
      <AddNewCategory
        show={addCategoryVisible}
        onClose={() => setAddCategoryVisible(false)}
        onSubmit={handleCategoryAdd}
      />
      <Accordion flush>
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
              {item.items.map((el, index) => (
                <Row className="py-2">
                  <Link to={`admin/categories/${el.route}`}>
                    <h6>{el.name}</h6>
                  </Link>
                </Row>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Sidebar;
