import { getBaseURL } from "./utils.mjs";

export default class APIHandler {
    async getData(query) {
        //TODO: Add error handling for convertToJson
        let response = await fetch(getBaseURL() + query);
        let data = await convertToJson(response);
        return data;
    }
}

/**
 * @param r - fetched data from API
 */
async function convertToJson(r) {
    let response = await r.json();
    if (r.ok) {
    return response;
    } else {
        console.error("Issue Accessing API");
      throw new Error("Issue Accessing API");
    }
}