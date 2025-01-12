import { compareData } from "../../utils/hash.utils.js";
import { generateToken } from "../../utils/manageToken.utils.js";
import { userExist } from "../../utils/query.utils.js";

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userExist(email);
    console.log("In Login");

    if (user) {
      console.log("In Login user found");
      const authUser = await compareData(password, user.password);
      if (authUser) {
        console.log("In Login auth user");
        const token = generateToken(user._id.toString());
        res.cookie("authUser", token, {
          httpOnly: true, // Prevent JavaScript from accessing the cookie
          secure: false, // Use secure cookie only in production (HTTPS)
          maxAge: 3600000, // 1 hour (same as token expiration)
          sameSite: "Strict", // Prevent the cookie from being sent in cross-origin requests
        });
        console.log("Logged In");

        return res.status(200).json({ message: "Logged in successfully!" });
      } else {
        return res
          .status(400)
          .json({ message: "Invalid credentials please check and try again" });
      }
    } else {
      return res
        .status(404)
        .json({ message: "User not found, Please check credentials" });
    }
  } catch (error) {
    console.log("Error while login user", error);
    return res.status(500).json({ message: "Error while login user", error });
  }
}

export default loginUser;
