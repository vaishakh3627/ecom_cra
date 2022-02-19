import { GQLNow } from "gql-now";

const configApp = require("../config");

export function graphQLObj(type = "") {
    let reqHeader = {
        "x-trdr-org": "6151870d3431010cb7ed351",
        crossDomain: true,
    };
    console.log(reqHeader)
    if (
        localStorage.getItem("token") &&
        localStorage.getItem("token") != null &&
        localStorage.getItem("token") != "null" &&
        localStorage.getItem("token") != "undefined"
    ) {
        reqHeader["x-access-token"] = localStorage.getItem("token");
    }

    let REACT_APP_API_URL = configApp.REACT_APP_API_URL;
    switch (type) {
        case "email":
            REACT_APP_API_URL = REACT_APP_API_URL + "/ecom-email-services";
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
