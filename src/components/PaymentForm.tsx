import React from 'react';
import styled from 'styled-components';

const StyledPaymentForm = styled.div`
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 100%;
  height: 46px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #9dacbb;
  padding-left: 14px;
  background: #fff;
  transition: all 300ms;
  color: #374151;
  font-size: 16px;

  &:focus {
    border-color: #0b8aff;
    background-color: #fcfdff;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #718196;
  }
`;

type PaymentFormProps = {
  handleSubmit: () => void;
};

export default class PaymentForm extends React.Component<PaymentFormProps> {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e: any) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e: any) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <StyledPaymentForm id="PaymentForm">       
        <Form onSubmit={(e) => {
          e.preventDefault();

          const number = this.state.number.trim();
          const cvc = this.state.cvc.trim();
          let numberValid = true;
          let cvcValid = true;
          for (let i = 0; i < number.length; i++) {
            if (number[i] >= '0' && number[i] <= '9') {
            } else {
              numberValid = false;
            }
          }
          if (number.length != 16) {
            numberValid = false;
          }
          for (let i = 0; i < cvc.length; i++) {
            if (cvc[i] >= '0' && cvc[i] <= '9') {
            } else {
              cvcValid = false;
            }
          }
          if (cvc.length != 3) {
            cvcValid = false;
          }

          if (!numberValid) {
            alert('Invalid Card Number');
          } else if (!cvcValid) {
            alert('Invalid CVC');
          } else {
            this.props.handleSubmit();
          }
        }}>
          <InputGrid>
            <Fieldset>
              <Label htmlFor="card-number">Card Number</Label>
              <Input
                type="tel"
                id="card-number"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="card-name">Card Holder Name</Label>
              <Input
                type="text"
                id="card-name"
                name="name"
                placeholder="e.g. John Doe"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="card-cvc">CVC</Label>
              <Input
                type="text"
                id="card-cvc"
                name="cvc"
                placeholder="e.g. 123"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="card-expiry">Expiry</Label>
              <Input
                type="text"
                id="card-expiry"
                name="expiry"
                placeholder="e.g. 12/25"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
              />
            </Fieldset>
          </InputGrid>     
          <button type="submit" className="btn--primary">Submit</button>
        </Form>
      </StyledPaymentForm>
    );
  }
}