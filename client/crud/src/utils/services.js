export const baseUrl = "http://localhost:5000";

export const getRequest = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
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
    body:JSON.stringify(data),
  });
  if (!response.ok) {
    console.log("Error");
    return { error: true, message: "An error occoured ", response };
  }
  console.log(response);
  return response;
};
