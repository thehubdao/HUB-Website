const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us5",
});

const listID = "e4825fe57d"

const addContact = async (email) => {
  await mailchimp.lists.addListMember(listID, {
    email_address: email,
    status: "subscribed"
  })
};

export default async function handler(req, res) {
  const email = req.body.email_address

  try {

    await addContact(email)
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
