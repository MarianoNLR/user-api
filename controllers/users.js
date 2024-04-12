export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  getAll = async (req, res) => {
    const users = await this.userModel.getAll()
    res.json(users)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const user = await this.userModel.getById({ id })
    res.json(user)
  }

  create = async (req, res) => {

  }

  update = async (req, res) => {

  }

  delete = async (req, res) => {

  }
}
