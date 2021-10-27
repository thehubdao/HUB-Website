export default async function handler(req, res) {
    const tokenID = req.body.tokenID
  
    try {
  
      const response = await fetch(`https://services.itrmachines.com/sandbox/predictDetailed?tokenId=${tokenID}`)
      const data = await response.json()
      res.json(data)
  
    } catch(err) {
        res.status(400).json(err)
    }
  }