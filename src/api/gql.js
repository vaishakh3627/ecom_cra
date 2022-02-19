import { GQLNow } from "gql-now";
import { env } from "./config";

export function graphQLObj(endpoint) {
    let reqHeader = {
        "x-trdr-org": '6151870d3431010cb7ed3511',
        crossDomain: true,
    };

    return new GQLNow(env.API_URL_DEV + endpoint, reqHeader);
}