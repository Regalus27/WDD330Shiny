import { getBaseURL } from "./utils.mjs";

export default class APIHandler {
    /**
     * @param r - fetched data from API
     */
    async convertToJson(r) {
        let response = await r.json();
        if (r.ok) {
        return response;
        } else {
          throw new Error("Issue Accessing API");
        }
    }
  
    async getData(query) {
        //TODO: Add error handling for convertToJson
        const response = await fetch(getBaseURL() + query);
        const data = await convertToJson(response);
        return data;
    }
}