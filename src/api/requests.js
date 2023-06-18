import axios from "axios";

const BASE_URL = "https://example-data.draftbit.com/books";

async function getRequest(params) {
  try {
    return await fetch(`${BASE_URL}?${new URLSearchParams(params)}`, {
      method: 'GET',
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

export { getRequest };
