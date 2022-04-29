export const fetchRegistration = (payload) => {
  return () => {
    fetch('/registration', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
  };
};

export const fetchLogin = (payload) => {
  return () => {
    fetch('/login', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
  };
};
