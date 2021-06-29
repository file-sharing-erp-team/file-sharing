class UserController {

    async login (req,res) {
        res.json('логин')
    }

    async check (req,res){
        res.json('чек авторизации')
        const {id} = req.query
        res.json(id)
    }

}

module.exports = new UserController()
