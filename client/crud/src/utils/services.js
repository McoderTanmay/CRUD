export const baseUrl = "http://localhost:5000";

export const getRequest = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(1);
    return error;
  }
};

export const postRequest = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: data,
  });
  if (!response.ok) {
    return { error: true, message: "An error occoured" };
  }
  return response;
};
