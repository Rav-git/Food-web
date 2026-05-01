import React from 'react'
import './CancellationRefund.css'

const CancellationRefund = () => {
  return (
    <div className='policy-page'>
      <div className="policy-hero">
        <h1>Cancellation &amp; Refund Policy</h1>
        <p className="policy-date">Last updated on 01-05-2026 17:49:44</p>
      </div>
      <div className="policy-container">
        <div className="policy-card">
          <p className="policy-intro">
            RAVI believes in helping its customers as far as possible, and has therefore a liberal
            cancellation policy. Under this policy:
          </p>
          <ul className="policy-list">
            <li>
              Cancellations will be considered only if the request is made immediately after placing
              the order. However, the cancellation request may not be entertained if the orders have
              been communicated to the vendors/merchants and they have initiated the process of
              shipping them.
            </li>
            <li>
              RAVI does not accept cancellation requests for perishable items like flowers, eatables
              etc. However, refund/replacement can be made if the customer establishes that the
              quality of product delivered is not good.
            </li>
            <li>
              In case of receipt of damaged or defective items please report the same to our Customer
              Service team. The request will be entertained once the merchant has checked and
              determined the same at his own end. This should be reported within <strong>30 Days</strong> of
              receipt of the products. In case you feel that the product received is not as shown on
              the site or as per your expectations, you must bring it to the notice of our customer
              service within <strong>30 Days</strong> of receiving the product. The Customer Service Team
              after looking into your complaint will take an appropriate decision.
            </li>
            <li>
              In case of complaints regarding products that come with a warranty from manufacturers,
              please refer the issue to them. In case of any Refunds approved by RAVI, it'll take{' '}
              <strong>9-15 Days</strong> for the refund to be processed to the end customer.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CancellationRefund
