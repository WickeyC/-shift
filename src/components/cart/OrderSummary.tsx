import Link from 'next/link';
import styled from 'styled-components';
import { ProductType } from '../../data';

import { useAuth } from '../../context/AuthUserContext';

const StyledOrderSummary = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  color: #141418;
  max-width: 440px;
  padding: 50px 56px;
  flex: 1;

  .order-summary__title {
    font-size: 18px;
    color: #37383c;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 36px;
  }

  .order-summary__title__items {
    font-weight: 400;
  }

  .order-summary__subtotal,
  .order-summary__shipping-fee,
  .order-summary__total,
  .order-summary__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .order-summary__shipping-fee {
    padding-top: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid #e3e3e3;
  }

  .order-summary__total {
    margin-top: 18px;
    margin-bottom: 48px;
  }

  .order-summary-cont-link {
    color: #006aff;
  }

  .order-summary-checkout-btn {
    width: 130px;
    height: 50px;
  }
`;

type OrderSummaryProps = {
  cartItems: ProductType;
};

const OrderSummary: React.FC<OrderSummaryProps> = (props) => {
  const { cart } = useAuth();

  const totalItems = cart?.reduce((acc, curr) => {
    return acc + Number(curr.quantity);
  }, 0);

  let totalPrice = 0;

  props.cartItems.map(item => {
    cart?.map(c => {
      if (c.id === item.id.toString()) {
        totalPrice += c.quantity * item.price;
      }
    });
  });

  return (
    <StyledOrderSummary>
      <h2 className="order-summary__title">
        Order Summary{' '}
        <span className="order-summary__title__items">({totalItems} items)</span>
      </h2>
      <div className="order-summary__subtotal">
        <div id="cart-tot">Subtotal</div>
        <div id="sc-cartInfo-totalOriginalPrice">RM {totalPrice.toFixed(2)}</div>
      </div>
      <div className="order-summary__shipping-fee">
        <div id="cart-tot">Shipping Fee</div>
        <div id="sc-cartInfo-totalOriginalPrice">Free</div>
      </div>
      <div className="order-summary__total">
        <div className="cart-tot-ex-ship">Order total</div>
        <div>
          <b>RM {totalPrice.toFixed(2)}</b>
        </div>
      </div>
      <div className="order-summary__actions">
        <Link href="/products">
          <a className="order-summary-cont-link" href="/products">
            Continue Shopping
          </a>
        </Link>
        <Link href="/checkout">
          <a className="order-summary-checkout-btn btn--primary flex-center">
            Checkout
          </a>
        </Link>
      </div>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
