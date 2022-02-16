const controller = {
	index: (req, res) => {

		res.send ('Services Page')
	},
    desing: (req, res) => {

		res.send ('Services/DesingPage')
    }
};

module.exports = controller;