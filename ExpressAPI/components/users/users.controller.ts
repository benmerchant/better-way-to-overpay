import User from './users.model'

const UserController = {
  // GET all users
  getUsers: (req: any, res: any, next: any) => {
    User.find({}).exec((err, users) => {
      if (err) res.status(500).json({ error: err })
      return res.status(200).json({ users: users })
    })
  }
}


export default UserController