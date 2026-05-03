import React from 'react'
import './CancellationRefund.css'

const CancellationRefund = () => {
  return (
    <div className='policy-page'>
      <div className="policy-hero">
        <h1>Return &amp; Refund Policy</h1>
        <p className="policy-date">Last updated on 03-05-2026</p>
      </div>
      <div className="policy-container">
        <div className="policy-card">
          <p className="policy-intro">
            At <strong>Classic Fashion Point</strong>, we believe in a hassle-free shopping experience. We have a customer-friendly return and refund policy to ensure your complete satisfaction with every purchase.
          </p>
          <ul className="policy-list">
            <li>
              Cancellations will be considered only if the request is made <strong>within 24 hours</strong> of placing the order. Once the order has been dispatched to our logistics partner, cancellation requests cannot be entertained.
            </li>
            <li>
              Returns are accepted within <strong>7 days</strong> of delivery for clothing and accessories, provided the item is unused, unwashed, and in its original packaging with all tags intact.
            </li>
            <li>
              Items such as innerwear, swimwear, and customised/personalised products are <strong>not eligible for return or exchange</strong> due to hygiene reasons.
            </li>
            <li>
              In case of receipt of a <strong>damaged, defective, or incorrect item</strong>, please report the issue to our Customer Service team within <strong>48 hours</strong> of delivery with photographic evidence. We will arrange a free reverse pickup and replacement or full refund at no extra charge.
            </li>
            <li>
              If the product received is not as shown on the website or does not match your expectations (colour variation due to display settings is not considered a defect), please contact us within <strong>7 days</strong> of delivery. Our team will review the complaint and take appropriate action.
            </li>
            <li>
              Once a return is received and inspected at our warehouse, the refund will be processed within <strong>5–7 business days</strong> to the original payment method. For Cash on Delivery orders, refunds will be issued to the bank account provided by the customer.
            </li>
            <li>
              Exchange requests for a different size or colour are accepted within <strong>7 days</strong> of delivery, subject to stock availability. Exchange shipping is free for the first exchange per order.
            </li>
            <li>
              In case of any Refunds approved by Classic Fashion Point, it will take <strong>5–9 business days</strong> for the refund to be credited to the end customer's account, depending on the bank or payment provider.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CancellationRefund
