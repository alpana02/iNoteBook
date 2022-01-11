# iNoteBook 

Contents
========

 * [Installation](#installation)
 * [About iNoteBook](#About-iNoteBook)


### Installation Client side
---

1. Clone the repository
2. Open with code editor and run following commands on the terminal.
    + ` npm install `
    + ` npm start`
3. Open the localhost link.

### Installation Server side
---

1. Clone the repository
2. Open with code editor and run following commands on the terminal.
    + ` npm install `
    + ` npm run serve`

### About iNoteBook
---
<ol>
<li>RCS Notification API <br/>
We confirm users' numbers by sending them an auto-generated OTP using RCS text API while placing the order; if the OTP matches, we complete the order and give them a confirmation message with a snapshot of the product
<br/>
<li>WBS API
<br/>
When a user selects the customer service button, an auto-generated message is sent to the specified phone number using WhatsApp API, where they can express their concerns.
<br/>
<li>SMS API
<br/>
We are using the JavaScript set interval function and fetch API method to send asynchronous messages to all of our customers (whitelisted numbers). We're reminding them about the best deals available using route mobile's SMS API.
<br/>
<li>WBS Message Callback URL
<br/>
We've given users the option of utilising Whatsapp to communicate with us about their concerns, and we'll respond using WBS Message Callback URL and WhtasApp session API.
<br/>    
<li>ML API
<br/>
We hosted our Makeup GAN Model at aws ec2 p2.2xlarge instance with K80 Tesla GPU and NVIDIA CUDA .The api passes the received arguments to the MLmodel.
The final generated image is then displayed on the client side.
</ol>

