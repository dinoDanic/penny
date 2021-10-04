import { Users } from "../modules/users.modules.js";

export const createUser = async (req, res) => {
  const userData = req.body;
  const { email } = userData;
  try {
    const findUser = await Users.findOne({ email: email });
    if (findUser) {
      res.status(409).json({ message: "user exists, login instead" });
      return;
    }
    const newUser = await new User(userData);
    const respond = await newUser.save();
    respond.password = null;
    res.json(respond);
  } catch (error) {
    res.json({ error: error.message });
  }
};
