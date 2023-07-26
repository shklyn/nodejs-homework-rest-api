const {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
} = require("./contacts");

const { register, login, getCurrent, logout, subscription, updateAvatar, verifyEmail, resendVerifyEmail } = require("./auth");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
  register,
  login,
  getCurrent,
  logout,
  subscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};
