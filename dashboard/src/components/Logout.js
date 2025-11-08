const logout = async () => {
  await axios.get("http://localhost:3002/logout", {
    withCredentials: true,
  });

  window.location.href = "http://localhost:3000/login";
};


