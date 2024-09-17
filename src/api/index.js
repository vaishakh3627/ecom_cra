import { GQLNow } from "gql-now";

const configApp = require("../config");

export function graphQLObj(type = "") {
  let reqHeader = {
    "x-trdr-org": "6151df36faf2a6fb0edff873",
    crossDomain: true,
  };
  if (
    localStorage.getItem("token") &&
    localStorage.getItem("token") != null &&
    localStorage.getItem("token") != "null" &&
    localStorage.getItem("token") != "undefined"
  ) {
    reqHeader["x-access-token"] = localStorage.getItem("token");
  }

  let REACT_APP_API_URL = configApp.REACT_APP_API_URL;
  console.log(type);
  switch (type) {
    case "email":
      REACT_APP_API_URL = REACT_APP_API_URL + "/ecom-email-services";
      break;
    case "admin":
      REACT_APP_API_URL = REACT_APP_API_URL + "/ecom-admin-services";
      break;
    case "member":
      REACT_APP_API_URL = REACT_APP_API_URL + "/ecom-member-services";
      break;
    default:
      REACT_APP_API_URL = REACT_APP_API_URL + "/ecom-services";
      break;
  }

  return new GQLNow(REACT_APP_API_URL, reqHeader);
}

export async function query(operation_name, field, response_field, type = "") {
  const response = await graphQLObj(type).query(
    operation_name,
    field,
    response_field
  );

  return response;
}

export async function mutation(
  operation_name,
  field,
  response_field,
  type = ""
) {
  const response = await graphQLObj(type).mutation(
    operation_name,
    field,
    response_field
  );

  return response;
}
