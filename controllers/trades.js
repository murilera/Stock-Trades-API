const Trade = require("../models/trades")

const post = async (req, res) => {
  try {
    const {
      type,
      user_id,
      symbol,
      shares,
      price,
      timestamp
    } = req.body

    if (!type || !user_id || !symbol || !shares || !price || !timestamp) {
      res.status(404).json({ error: 'Invalid request' })
    }

    const newTrade = await Trade.create({
      type,
      user_id,
      symbol,
      shares,
      price,
      timestamp
    })

    return res.status(201).json(newTrade)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Unexpected error' })
  }
}

const get = async (req, res) => {
  try {
    const all = await Trade.findAll()

    return res.status(200).json(all)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Unexpected error' })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const tradeById = await Trade.findByPk(id)
    if (!tradeById) return res.status(404).send("ID not found")

    return res.status(200).json(tradeById)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Unexpected error' })
  }
}

const notAllowed = async (req, res) => {
  return res.status(405).json({ error: 'Method not allowed' })
}

module.exports = {
  post, get, getById, notAllowed
}