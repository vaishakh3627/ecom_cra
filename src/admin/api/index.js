import { mutation, query } from "../../api";

export const createCategory = async (fields) =>
  mutation(
    "add_category",
    fields,
    `success
    message`,
    `admin`
  );

export const getCategories = async () =>
  query(
    "view_category",
    {},
    `categories {
          _id
          category_name
          category_description
        }
        success
        message`,
    `member`
  );
