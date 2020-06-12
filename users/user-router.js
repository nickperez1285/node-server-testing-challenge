const router = require("express").Router();
const Users = require("./user-model.js");
const bcrypt = require('bcryptjs');


router.get("/users",async (req, res) => {
 try {
		res.json(await Users.find())
	} catch(err) {
		console.log(err)
	}
});

router.post('/register',async (req,res) => {
	let user = req.body
	const hash = bcrypt.hashSync(user.password, 12)
	user.password = hash

	try{
		const saved = await Users.add(user)
		res.status(201).json(saved)

	} catch(err){
		console.log(err);
		res.status(500).json(err)
	}
}
)

router.delete('/:id', (req, res) => {
	const acctID = req.params.id
	Users.findById(acctID).del()
		.then( acct => 
			res.status(200).json({message:"deleted"})
			)
		.catch((err)=> res.status(500).json(err))

});

module.exports = router;
