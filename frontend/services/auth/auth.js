const BASE_URL = "http://localhost:3000";

export async function RegisterUser(data) {
  const response = await fetch('/api/v1/user/', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(data),
  });
  if(response.status == 201) {
    return response.json();
  } 
  return false;
}