export const signup = (req, res) => {
  console.log("REQ BODY ON SIGNUP", req.body);
  res.json({
    data: "you have hit the signup endpoint",
  });
};
