const user = require("../models/userModel");
const trash = require("../models/trashModel");

const deleteUser = async (req, res) => {
  try {
    const deletedata = await user.findOneAndDelete({ _id: req.params.itemId });

    if (!deletedata) {
      return res.status(404).json({
        message: "invalid id or item not found",
      });
    }

    // make a another field to trash
    const trashSaveData = new trash({
      fullName: deletedata.fullName,
      email: deletedata.email,
      degisnation: deletedata.degisnation,
      employeId: deletedata.employeId,
    });
    await trashSaveData.save();
    res.json({ message: "Item deleted and new model created successfully" });
  } catch (error) {
    console.log("delete error: ", error);
  }
};

module.exports = deleteUser;
