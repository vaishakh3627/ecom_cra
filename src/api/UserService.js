import { postRequest } from "./gql";
import { mutation } from "./request";

export const verifyEmail = (email) =>
mutation('send_email', )

    // postRequest('ecom-email-services', email)



// import { query, mutation } from "../../api";

// export async function verifyUPI(upi_id) {
//   return query(
//     "validate_upi_id",
//     { upi_id },
//     `status
//     name
//     vpa`,
//     "cashfree"
//   );
// }

// export async function fetchIposList() {
//   return query(
//     "eipo_get_open_issues",
//     {},
//     `open_issues {
//       symbol
//       name
//       isin
//       category
//       issuetype
//       opendatetime
//       closedatetime
//       floorprice
//       ceilingprice
//       cuttoff
//       tickprice
//       minbidqty
//       maxbidqty
//       tradinglot
//       minvalue
//       maxvalue
//       discounttype
//       discountvalue
//       asbanonasba
//       tplusmodificationfrom
//       tplusmodificationto
//       errorcode
//       message
//   }`,
//     "eipo"
//   );
// }

// export async function updateIpoOrder(fields) {
//   return mutation(
//     "eipo_modify_order",
//     fields,
//     `status
//     scripid
//     applicationno
//     category
//     applicantname
//     depository
//     dpid
//     clientbenfid
//     chequereceivedflag
//     chequeamount
//     panno
//     bankname
//     location
//     accountnumber_upiid
//     ifsccode
//     referenceno
//     asba_upiid
//     statuscode
//     statusmessage
//     bids {
//       bidid
//       quantity
//       rate
//       cuttoffflag
//       orderno
//       actioncode
//       errorcode
//       message
//     }`,
//     "eipo"
//   );
// }

// export async function postIpoOrder(fields) {
//   return mutation(
//     "eipo_order",
//     fields,
//     `status
//     scripid
//     applicationno
//     category
//     applicantname
//     depository
//     dpid
//     clientbenfid
//     chequereceivedflag
//     chequeamount
//     panno
//     bankname
//     location
//     accountnumber_upiid
//     ifsccode
//     referenceno
//     asba_upiid
//     statuscode
//     statusmessage
//     bids {
//       bidid
//       quantity
//       rate
//       cuttoffflag
//       orderno
//       actioncode
//       errorcode
//       message
//     }`,
//     "eipo"
//   );
// }

// export async function fetchMyIposList() {
//   return query(
//     "get_my_ipo_orders",
//     {},
//     `my_ipo_orders {
//       _id
//       status
//       message
//       user_id
//       created_ts
//       scripid
//       applicationno
//       category
//       applicantname
//       depository
//       dpid
//       clientbenfid
//       chequereceivedflag
//       chequeamount
//       panno
//       bankname
//       location
//       accountnumber_upiid
//       ifsccode
//       referenceno
//       asba_upiid
//       statuscode
//       statusmessage
//       bids {
//         bidid
//         quantity
//         rate
//         cuttoffflag
//         orderno
//         actioncode
//         errorcode
//         message
//       }
//     }`,
//     "eipo"
//   );
// }

// export async function fetchInactiveIpoDetails() {
//   return query(
//     "get_upcoming_closed_ipo",
//     {},
//     `ipo_data {
//       _id
//       created_ts
//       scrip_name
//       scrip_id
//       category
//       ipo_date
//       listing_date
//       price_range
//       min_qty
//       dhrp_link
//     }`,
//     "eipo"
//   );
// }