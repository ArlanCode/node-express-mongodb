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

  async getUserById(userId, checkExistence = false) {
    try {
      const user = await User.findById(userId);
      if (checkExistence) {
        return !!user; // Retorna true se o usuário existe, false se não existe
      } else {
        return user || null; // Retorna o usuário ou null se não encontrado
      }
    } catch (error) {
      return null; // Retorna null em caso de erro
    }
  }

  async updateUser(userId, userData) {
    try {
      const doesExist = await this.getUserById(userId, true);
      if (doesExist) {
        const user = await User.findByIdAndUpdate(userId, userData, { new: true });
        return user;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userId) {
    try {
      const doesExist = await this.getUserById(userId, true);
      if (doesExist) {
        const user = await User.findByIdAndDelete(userId);
        return user;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

}

module.exports = new UserService();
