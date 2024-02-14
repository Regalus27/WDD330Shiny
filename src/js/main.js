// API test
const baseURL = import.meta.env.VITE_API_BASEURL;

/**
 * @param r - fetched data from API
 */
async function convertToJson(r) {
  let response = await r.json();
  if (r.ok) {
    return response;
  } else {
    throw new Error("Issue Accessing API");
  }
}

async function getData() {
  const response = await fetch(baseURL + "pokemon/roserade");
  const data = await convertToJson(response);
  return data;
}

console.log(getData());
