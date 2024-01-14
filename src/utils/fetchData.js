import conf from "../config/Conf";

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${conf?.tmdbApiKey}`
    }
  };

export const fetchDataFromApi = async (url, params) => {
    try {
        const queryParams = new URLSearchParams(params);
        const res = await fetch(`${BASE_URL}${url}?query=${queryParams}&append_to_response=credits`,options);

        if (!res.ok) {
            throw new Error(`Failed to fetch data from API. Status: ${res.status}`);
        }

        const response = await res.json();
        const data = await response.results || response;
        return data;
    } catch (err) {
        // console.error(err);
        return err;
    }
};
