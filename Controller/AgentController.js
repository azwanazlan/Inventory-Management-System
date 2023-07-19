const Agent = require('../Models/Agent');

exports.getAllAgents = async (req,res) => {
    try {
        const agents = await Agent.findAll();
        res.status(200).json(agents);
    } catch (err) {
        res.status(404).json({
            message: "Failed to fetch Agents ${err.message}"
        })
    }
}

