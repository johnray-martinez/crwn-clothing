import { useState, useEffect, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalAmountOfItemsInCart, selectCart } from '../../store/cart/cartSelectors';
import { selectCurrentUser } from '../../store/user/userSelectors';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {
  Container,
  FormContainer,
  PaymentButton
} from './index.styles';
import { StripeCardElement } from '@stripe/stripe-js';

const PaymentForm = () => {
  const [isProcessingPayment, setIsProccessingPayment] = useState(false);

  // SELECTORS
  const totalAmount = useSelector(selectTotalAmountOfItemsInCart);
  const cart = useSelector(selectCart);
  const currentUser = useSelector(selectCurrentUser);

  // HOOKS
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // TESTING
  }, [cart, totalAmount, currentUser])

  // HELPERS
  const paymenthandler = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProccessingPayment(true);

    const { paymentIntent: { client_secret } } = await fetch('/.netlify/functions/createPaymentIntent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: totalAmount * 100 })
    }).then(res => res.json())

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest Customer'
        }
      }
    });

    if (paymentResult.error) {
      console.log(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        console.log('Payment Successful');
      }
    }
    setIsProccessingPayment(false);
  }

  return (
    <Container>
      <h2>Credit Card Payment:</h2>
      <FormContainer onSubmit={paymenthandler}>
        <CardElement />
        <PaymentButton 
          isLoading={isProcessingPayment}
          buttonType='inverted'>
            Pay Now
          </PaymentButton>
      </FormContainer>
    </Container>
  );
}

export default PaymentForm;