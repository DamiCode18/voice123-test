import API from "..";


export const getAllActors = async (page, keyword) => {
  const response = await API.get(
    `/search/?service=voice_over&keywords=${keyword}&page=${page}`
  );
  return response.data;
};