const gmail=require("./mail")

exports.sendMail = (req, res,next) =>{
console.log("mail api running")
    const product_name  =req.body.name
    const product_stock =req.body.stock
    // const user_gmail    =req.body.user_gmail
    // const user_name     =req.body.user_name
    const mailOptions = {
      from: 'SHOP FOR ME <studying.purpose0@gmail.com>',
      to: 'nikhilorai1410@gmail.com',
      subject: 'less stock',
      html: 
      `
        <h2 style="color:red">Hi, Message from G6 Shopping</h2> 
        <p>Message From G6 Shopping </p>
        Your item: ${product_name} is less in stock (${product_stock}). Kindly update your stocks.
      `    
    };
    console.log("mail Options",mailOptions)
    gmail.sendMail(mailOptions).then((result)=>{
      console.log(result)
      res.json("email sent successfully")
    }).catch((err)=>{
      console.log(err)
      res.json("something went wrong")
    })

}
  