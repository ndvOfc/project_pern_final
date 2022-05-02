export const fetchRegistration = (payload) => {
  console.log(payload);
  return fetch('http://localhost:5001/api/registration', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
};

export const fetchLogin = (payload) => {
  return fetch('http://localhost:5001/api/login', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
};
