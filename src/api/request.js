import { graphQLObj } from "./gql";

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
