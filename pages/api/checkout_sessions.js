const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { item } = req.body;

  console.log('req => ', req.priceid);
  console.log('body => ',req.body);
  console.log('params => ',req.params);
  console.log('item => ', item);


  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1NWhEME6UDTU781cnCRTEdy4',
            //price: req.body,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: {enabled: true},
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}