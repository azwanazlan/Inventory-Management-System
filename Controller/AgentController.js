const Agent = require('../Models/Agent');

exports.getAllAgents = async (req,res) => {
    try {
        const agents = await Agent.findAll();
        res.status(200).json(agents);
    } catch (err) {
        res.status(404).json({
            message: `Failed to fetch Agents ${err.message}`
        })
    }
}

exports.getAgentbyId = async (req, res) => {
    const agent = req.params.id
    
    try {
    const agentById = await Agent.findByPk(agent);
    res.json(agentById);
    } catch (err) {
      res.status(500).json({ message: `Failed to fetch Agents ${err.message}`});
    }
  };

  exports.createAnAgent = async (req, res) => {
    const { firstName, lastName } = req.body;
  
    try {
      const agent = await Agent.create({
        firstName,
        lastName,
      });
  
      res.status(201).json(agent);
    } catch (err) {
      res.status(500).json({ message: `Failed to fetch Agents ${err.message}`});
    }
};

exports.updateAnAgent = async (req, res) => {
  const agentId = req.params.id;
  const { firstName, lastName } = req.body;

  try {
    const agent = await Agent.findByPk(agentId);
    
    if(!agent) {
      return res.status(404).json({
        message: 'Agent not found'
      });
    }

    agent.firstName = firstName;
    agent.lastName = lastName;
    
    await agent.save();

    res.status(200).json(agent);
  } catch(err) {
    return res.status(500).json({ message: `Failed to update Agents ${err.message}`});
  }
};

exports.deleteAgent = async (req, res) => {
  const agentId = req.params.id;

  try {

    const agent = await Item.findByPk(agentId);

    if (!agent) {
      return res.status(404).json({
        message: 'Agent not found.',
      });
    }
    await agent.destroy();

    res.status(204).json({
      message: `Agent with id:${agentId} was deleted.`,
    });
  
  } catch (err) {
    res.status(500).json({
      message: `Failed to delete agent:${err}`,
    });
  }
};

