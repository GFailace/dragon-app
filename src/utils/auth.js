function auth() {
  const isAuth = sessionStorage.getItem("localAuth");
  if (isAuth === "true") return true;
  console.log(isAuth);
}

export default auth;
