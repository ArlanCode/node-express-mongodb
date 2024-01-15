const User = require('../models/user.model');

class UserService {
  async createUser(userData) {
    try {
      const user = new User(userData);
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(userId) {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(userId, userData) {
    try {
      const user = await User.findByIdAndUpdate(userId, userData, { new: true });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userId) {
    try {
      const user = await User.findByIdAndDelete(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async doesUserExist(userId) {
    try {
      const user = await User.findById(userId);
      return !!user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
