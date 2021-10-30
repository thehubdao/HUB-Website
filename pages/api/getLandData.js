export default async function handler(req, res) {
    const tokenID = req.body.tokenID
    const X = req.body.X
    const Y = req.body.Y
    let response;
  
    try {
      tokenID ? 
      response = await fetch(`https://services.itrmachines.com/sandbox/predictDetailed?tokenId=${tokenID}`) :
      response = await fetch(`https://services.itrmachines.com/sandbox/predictDetailed?x=${X}&y=${Y}`)
      const data = await response.json()
      res.json(data)
  
    } catch(err) {
        res.status(400).json(err)
    }
  }