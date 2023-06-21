import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, {useState, useRef} from 'react';
import Link from 'next/link';

const TopHeader = styled.div`
display: flex;
background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #63b1ff 70px ), repeating-linear-gradient( #53A9FF, #53A9FF );
background-attachment: fixed;
width: 100%;
height: 248px;
margin: 0 auto;

 .textContainer{
    margin: auto;
    text-align: center;
 }

  h2{
    font-size: 35px;
    font-weight: 700;
    color: #ffffff;
  }

  p{
    font-size: 17px;
    color: #ffffff;
    margin: 0;
  }
`;

const FaqNav = styled.div`
@media screen and (min-width: 1060px){
  width: 50%;
  margin: 2% 26%;
}

display: flex;
flex-direction: row;
justify-content: space-evenly;
margin: 2% auto;

a:hover{
  color: #0070f3;
  font-weight: 400;
}
`;

const AccountSection = styled.div`
display: grid;
margin: auto;
grid-template-columns: 25% 75%;

#account{
  margin-top: 35px;
  text-align: center;
  font-weight: 600;
}

@media screen and (min-width: 1445px){
  max-width: 80%;
}

@media screen and (min-width: 1771px){
  max-width: 70%;
}
`;

const Faqs = styled.div`
margin: 1rem;
width: 85%;
border-radius: 17px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);


.toggle{
  display: flex;
  cursor: pointer;
  width: auto;
  height: 59px;
}

.toggle h2{
  margin: auto auto auto 3%;
}

.toggle > span{
  font-weight: 600;
  margin: auto 10% auto auto;
}

.toggle h2,
.toggle span{
  font-size: 15px;
  color: #405FFF;
}

.answer-parent{
  height: 0px;
  overflow: hidden;
  transition: height ease 0.3s;
}

.answer{
  margin: auto 3% 3% 2.5%;
}

.answer p{
  line-height: 1.5rem;
  color: #5785F0;
  padding: 0.3rem;
}
`;

const Divider = styled.div`
.box{
  width: 90%;
  margin: 0 auto;
}

p{
  border-top: 1px solid #CACACA;
}
`

const OrdersSection = styled.div`
display: grid;
margin: auto;
grid-template-columns: 25% 75%;

#orders{
  margin-top: 35px;
  text-align: center;
  font-weight: 600;
}

@media screen and (min-width: 1445px){
  max-width: 80%;
}

@media screen and (min-width: 1771px){
  max-width: 70%;
}
`
const PaymentsSection = styled.div`
display: grid;
margin: auto;
grid-template-columns: 25% 75%;


#payments{
  margin-top: 35px;
  text-align: center;
  font-weight: 600;
}

@media screen and (min-width: 1445px){
  max-width: 80%;
}

@media screen and (min-width: 1771px){
  max-width: 70%;
}
`
const SnDSection = styled.div`
display: grid;
margin: auto;
grid-template-columns: 25% 75%;

#SnD{
  margin-top: 35px;
  text-align: center;
  font-weight: 600;
}

@media screen and (min-width: 1445px){
  max-width: 80%;
}

@media screen and (min-width: 1771px){
  max-width: 70%;
}
`

const RnRSection = styled.div`
display: grid;
margin: auto auto 6% auto;
grid-template-columns: 25% 75%;

#RnR{
  text-align: center;
  margin-top: 35px;
  font-weight: 600;
}

@media screen and (min-width: 1445px){
  max-width: 80%;
}

@media screen and (min-width: 1771px){
  max-width: 70%;
}
`


function AccountQ1(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);


  return(
    <Faqs>
      <div className="question">
      <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>DO I NEED TO SIGN UP FOR AN ACCOUNT TO PLACE MY ORDER?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
        <p>Kindly note that you must first create an account on our platform before placing an order. Doing so allows you to track your order and get updates about attractive promotion and new arrivals. 
          <br /><br />Please read the FAQ [How to sign up for an online account] for instructions to sign up an account.</p>
      </div>
    </div>
      </div>
    </Faqs>
  );
}

function AccountQ2(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>HOW TO SIGN UP FOR AN ONLINE ACCOUNT</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>You can either sign up with email or by connecting your Google account. 
        <br /><br />From our Shift.com website, click the profile icon on the top right corner. Click on the "Sign up" and fill in the required information to sign up with email. 
        <br /><br />To connect Google account, click on “Continue with Google” and choose the account you would like to connect with Shift.com.</p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function AccountQ3(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>I FORGOT MY PASSWORD, WHAT SHOULD I DO?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>In the "Log in" page, click on "Reset" to reset your password. Enter your account email to receive an automated email that will help you to reset your password.
        <br /><br /> Please note that your new password should have
        <br />- 8 to 32 alphanumeric characters (Must include 1 upper case)
        <br /> - 1 or more numbers
        <br /> - 1 or more special characters
        </p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function AccountQ4(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>I RESET MY PASSWORD, BUT I STILL CANNOT LOG IN</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>If you still can't log in to your account with your new password, please contact us during our operation hours (9 AM - 9 PM). We will assist you as soon as possible.</p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function AccountQ5(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>HOW DO I CHANGE MY PASSWORD?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>You can change your password by going to [My &#62; My Account &#62; Edit password].</p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function OrdersQ1(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>HOW TO CANCEL MY ORDER?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>You can cancel your orders with the following steps below.
      <br /><br />[My &#62; My Orders &#62; Order Detail &#62; Cancel order]
      <br /><br />However, we are unable to cancel your order once it has proceeded. Therefore, please request returns or refund later after receiving those orders. Kindly refer to the FAQ [How to request return or refund].</p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function OrdersQ2(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>HOW TO CHANGE MY ORDER?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>If you want to change the order that has been placed, you must cancel your order first before ordering the products that you want. 
      <br /><br />For the order that has proceeded, you must first receive your order and request refunds afterward.
      </p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function PaymentsQ1(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>WHAT PAYMENT METHODS ARE CURRENTLY AVAILABLE?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p> Payment is accepted via these transactions: 
      <br /><br />a. Debit card / Credit card payments
      <br />b. Cash on delivery
      </p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function PaymentsQ2(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>CAN I MAKE PAYMENTS BY USING CREDIT CARDS ISSUED OUTSIDE MALAYSIA?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p> Yes, we accept payments from customers with billing details in Singapore, Malaysia, Indonesia, Thailand, Indonesia as well.</p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function SnDQ1(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>HOW DO I KNOW THE CURRENT SHIPPING LOCATION OF MY ORDER?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>You can check the current shipping location of your order by following the steps below.
      <br /><br />[My &#62; My Order &#62; Order Details &#62; Order status]
      <br /><br />It usually takes 2 to 3 days on average after the courier has received the order. Due to the COVID-19 outbreak, a few regions may experience delivery delays. We sincerely apologize for any late deliveries and inconvenience that has been caused.
      </p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function SnDQ2(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>CAN I CHANGE MY SHIPPING ADDRESS AFTER PLACING ORDER?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>Yes, you can change your shipping address of the order within an hour of placing the order by going to [My &#62; My Orders &#62; Order Details]. Please note that you can only change the shipping address before the order has proceeded.</p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function SnDQ3(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>HOW ARE THE SHIPPING FEES CALCULATED?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>The shipping fees are calculated based on the shipping region and the weight of the order packages. It is included in the final payment amount, and you can check the exact shipping fee when making payments.If you would like to get more shipping info, kindly refer to our Shipping Info page.</p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function SnDQ4(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>THE COURIER LOST THE PRODUCTS I ORDERED DURING SHIPPING.</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>Please reach out to us for support. You may find out our contact details on the "Contact" page.</p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function RnRQ1(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>HOW TO REQUEST RETURNS OR REFUNDS?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>Please submit a request for return or refund with the following steps.
       <br /><br />[My &#62; My Orders &#62; Order Detail &#62; Request for Return or Refund]
      </p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function RnRQ2(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>I RECEIVED MY ORDER WITH DEFECTS / I RECEIVED A WRONG DELIVERY.</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>a. Please include the order number, name, phone number, and a photo to confirm the wrong delivery or defects when submitting the return request.
      <br /><br />[My &#62; My Orders &#62; Order Detail &#62; Request for Return or Refund]
      <br /><br />b. Upload a photo of a package that clearly shows the shipping invoice and number.
      <br /><br />c. In case of defective products, please upload a photo to clearly show the defects
      <br /><br />d. We will then check the orders and the uploaded photos, and make decisions on the process of return or refund at the distribution center.
      <br /><br />e. If the request for return or refund has been accepted, we will send a courier to your address to pick up your order.
      <br /><br />f. Please return the order after re-packing them, as close to the original.
      <br /><br />g. Once your order has been picked up by the distribution center, we will send your refund or replacement.
      <br /><br />If you are having difficulty with submitting your return and refund request , please reach out to us for support.
      </p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function RnRQ3(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>HOW TO KNOW WHERE MY ORDER IS DURING THE RETURN OR REFUND PROCESS?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>You can find out where your order is during the return or refund process by following the steps below. 
      <br /><br />[My &#62; Return and Refund history]</p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function RnRQ4(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>HOW LONG DOES THE RETURN OR REFUND TAKE?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>If you requested a replacement, we will notify you by email once your replacement has been shipped.
      <br /><br />If you requested a refund, the refund will be posted to your card-issuing bank within 3 working days. Please contact your bank for any further questions regarding your refund.
      </p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

function RnRQ5(){
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const parentref = useRef<HTMLSpanElement>(null);

  return(
    <Faqs>
    <div className="question">
    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
      <h2>DO I HAVE TO PAY FOR THE SHIPPING FEE OF RETURN ORDERS?</h2>
      <span className="iconPlus"
      ref={parentref}
      style={
        isOpen ? {
          transition: `0.3s`,
          transform: `rotate(45deg)`
        }
        : {
          transition: `0.3s`,
          transform: `rotate(90deg)`,
        }
      }
      >+</span>
    </div>

    <div className="answer-parent"
    ref={parentRef} 
    style={
      isOpen ? {
      height: parentRef?.current?.scrollHeight + "px",
    }
    : {
        height: "0px",
      }
     }
    >
      <div className="answer">
      <p>The shipping fee would be refunded. Please let us know the amount by sending us an email with the receipt attached.</p>
      </div>
    </div>
    </div>
    </Faqs>
  );
}

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - Shift</title>      
      </Head>
      <Header />
      <main>
      <TopHeader className="faqBanner">
        <div className="textContainer">
          <h2>Frequently Asked Questions</h2>
          <p>How can we help you?</p>
        </div>
      </TopHeader>
      <FaqNav>
        <a href="#account">Account</a>
        <a href="#orders">Orders</a>
        <a href="#payments">Payments</a>
        <a href="#SnD">Shipping & Delivery</a>
        <a href="#RnR">Return & Refund</a>
      </FaqNav>
      <AccountSection>
        <div id="account">
        <span >ACCOUNT</span>
        </div>
        <div id="accountFaq">
        <AccountQ1 />
        <AccountQ2 />
        <AccountQ3 />
        <AccountQ4 />
        <AccountQ5 />
        </div>
        </AccountSection>

        <Divider>
        <div className="box">
          <p></p>
        </div>
        </Divider>

        <OrdersSection>
          <span id="orders">ORDERS</span>
          <div id="ordersFaq">
          <OrdersQ1 />
          <OrdersQ2 />
          </div>
        </OrdersSection>
        
        <Divider>
        <div className="box">
          <p></p>
        </div>
        </Divider>

        <PaymentsSection>
          <span id="payments">PAYMENTS</span>
          <div id="paymentsFaq">
            <PaymentsQ1 />
            <PaymentsQ2 />
          </div>
        </PaymentsSection>

        <Divider>
        <div className="box">
          <p></p>
        </div>
        </Divider>

        <SnDSection>
          <span id="SnD">SHIPPING & DELIVERY</span>
          <div id="SnDFaq">
            <SnDQ1 />
            <SnDQ2 />
            <SnDQ3 />
            <SnDQ4 />
          </div>
        </SnDSection>

        <Divider>
        <div className="box">
          <p></p>
        </div>
        </Divider>

        <RnRSection>
          <span id="RnR">RETURN & REFUND</span>
          <div id="RnRFaq">
            <RnRQ1 />
            <RnRQ2 />
            <RnRQ3 />
            <RnRQ4 />
            <RnRQ5 />
          </div>
        </RnRSection>
        <div className="breadcrumb container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <img
            className="breadcrumb__arrow"
            src="img/breadcrumb-arrow.svg"
            alt="Right Arrow >"
          />
          <span>FAQ</span>
        </div>
        </main>
      <Footer />
    </>
  );
}
