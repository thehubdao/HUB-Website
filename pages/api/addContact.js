const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us20",
});


const addContact = async (email, listID) => {

  await mailchimp.lists.addListMember(listID, {
    email_address: email,
    status: "subscribed"
  })
};

export default async function handler(req, res) {
  const email = req.body.email_address
  const listID = req.body.report ? process.env.MAILCHIMP_LIST_ID_REPORT : process.env.MAILCHIMP_LIST_ID

  try {

    await addContact(email, listID)
    res.json({message: "Successfully subscribed!"})

  } catch(err) {
    const errorCode = JSON.parse(err.response.text).title

    switch (errorCode) {
      case "Member Exists":
        res.json({message: "Already subscribed!"})
        break
      case "Invalid Resource":
        res.json({message: "Please insert valid email"})
        break
      default:
        res.status(400).json({message: "Something went wrong, try again later."})
    }

  }
}
