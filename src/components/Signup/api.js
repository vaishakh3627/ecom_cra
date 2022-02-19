import { query, mutation } from "../../api";

export async function verifyUPI(upi_id) {
    return query(
        "validate_upi_id",
        { upi_id },
        `status
    name
    vpa`,
        "cashfree"
    );
}

export async function sendEmalOtp(fields) {
    return mutation(
        "send_email",
        fields,
        `status`,
        "email"
    );
}