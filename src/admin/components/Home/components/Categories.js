import React, { useState } from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { FaPlus } from "react-icons/fa";

import { getCategories } from "../../../api";
import AddNewCategory from "../../../common/AddCategory";

import "./styles.scss";

const Categories = () => {
  const getCategoriesQuery = useQuery("categories", getCategories);
  const [addCategoryVisible, setAddCategoryVisible] = useState(false);

  return (
    <Container>
      <AddNewCategory
        show={addCategoryVisible}
        onClose={() => setAddCategoryVisible(false)}
      />

      <Row className="title-with-add py-4">
        <Col sm={11}>
          <h4>Categories </h4>
        </Col>
        <Col sm={1}>
          <FaPlus
            title="Add new Category"
            onClick={() => setAddCategoryVisible(true)}
            className="category-button-add"
          />
        </Col>
      </Row>

      <Accordion className="home-categories" flush>
        {getCategoriesQuery.isSuccess &&
          getCategoriesQuery.data.data &&
          getCategoriesQuery.data.data.view_category.categories.map(
            (item, key) => (
              <Card key={key} className="home-category-card mb-4">
                <Accordion.Item className="py-2" eventKey="0">
                  <Accordion.Header className="home-category-header">
                    <h5 className="px-3">
                      <strong>{item.category_name}</strong>
                      {` / `}
                      {item.category_description}
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>laborum</Accordion.Body>
                </Accordion.Item>
              </Card>
            )
          )}
      </Accordion>
    </Container>
  );
};

export default Categories;
