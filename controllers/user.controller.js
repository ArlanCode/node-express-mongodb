const userService = require('../services/user.service');

class UserController {
  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getUserById(req, res) {
    const userId = req.params.id;
    try {
      const user = await userService.getUserById(userId);
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send({ message: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateUser(req, res) {
    const userId = req.params.id;
    try {
      const doesExist = await userService.doesUserExist(userId);
      if (doesExist) {
        const updatedUser = await userService.updateUser(userId, req.body);
        res.status(200).send(updatedUser);
      } else {
        res.status(404).send({ message: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async deleteUser(req, res) {
    const userId = req.params.id;
    try {
      const doesExist = await userService.doesUserExist(userId);
      if (doesExist) {
        const deletedUser = await userService.deleteUser(userId);
        res.status(200).send(deletedUser);
      } else {
        res.status(404).send({ message: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new UserController();
