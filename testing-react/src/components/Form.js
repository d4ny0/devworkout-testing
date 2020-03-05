import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { submitForm } from '../utils';
import StyledButton from './styled/StyledButton';

const StyledLink = styled(Link)`
  color: white;
  &:visited {
    color: white;
  }
`;
const StyledInput = styled.input`
  border: none;
  min-height: 20px;
  min-width: 100px;
  padding: 0.2em;
  font-size: 1em;
  margin: 0.5em;
`;
const MultiPageForm = React.createContext();

function MultiPageFormProvider({ initialValues = {}, ...props }) {
  const [initState] = React.useState(initialValues);
  const [form, setFormValues] = React.useReducer(
    (s, a) => ({ ...s, ...a }),
    initState
  );
  const resetForm = () => setFormValues(initialValues);
  return (
    <MultiPageForm.Provider
      value={{ form, setFormValues, resetForm }}
      {...props}
    />
  );
}

function useMultiPageForm() {
  const context = React.useContext(MultiPageForm);
  if (!context) {
    throw new Error(
      'useMultiPageForm must be used within a MiltiPageFormProvider'
    );
  }
  return context;
}

function Main() {
  return (
    <React.Fragment>
      <StyledLink to="/page-1">Fill out the form</StyledLink>
    </React.Fragment>
  );
}

function Page1({ history }) {
  const { form, setFormValues } = useMultiPageForm();
  return (
    <React.Fragment>
      <h2>Page 1</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          history.push('/page-2');
        }}
      >
        <label htmlFor="food">Favorite Food</label>
        <br />
        <StyledInput
          id="food"
          value={form.food}
          onChange={e => setFormValues({ food: e.target.value })}
        />
      </form>
      <div>
        <StyledLink to="/form">Go Home</StyledLink> |{' '}
        <StyledLink to="/page-2">Next</StyledLink>
      </div>
    </React.Fragment>
  );
}

function Page2({ history }) {
  const { form, setFormValues } = useMultiPageForm();
  return (
    <React.Fragment>
      <h2>Page 2</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          history.push('/confirm');
        }}
      >
        <label htmlFor="drink">Favorite Drink</label>
        <br />
        <StyledInput
          id="drink"
          value={form.drink}
          onChange={e => setFormValues({ drink: e.target.value })}
        />
      </form>
      <div>
        <StyledLink to="/page-1">Go Back</StyledLink> |{' '}
        <StyledLink to="/confirm">Review</StyledLink>
      </div>
    </React.Fragment>
  );
}

function Confirm({ history }) {
  const { form, resetForm } = useMultiPageForm();
  function handleConfirmClick() {
    submitForm(form).then(
      () => {
        resetForm();
        history.push('/success');
      },
      error => {
        history.push('/error', { state: { error } });
      }
    );
  }
  return (
    <React.Fragment>
      <h2>Confirm</h2>
      <div>
        <strong>Please confirm your choices</strong>
      </div>
      <div>
        <strong id="food-label">Favorite Food</strong>:{' '}
        <span aria-labelledby="food-label">{form.food}</span>
      </div>
      <div>
        <strong id="drink-label">Favorite Drink</strong>:{' '}
        <span aria-labelledby="drink-label">{form.drink}</span>
      </div>
      <div>
        <StyledLink to="/page-2">Go Back</StyledLink> |{' '}
        <StyledButton onClick={handleConfirmClick}>Confirm</StyledButton>
      </div>
    </React.Fragment>
  );
}

function Success() {
  return (
    <React.Fragment>
      <h2>Congrats. You did it.</h2>
      <div>
        <StyledLink to="/">Go home</StyledLink>
      </div>
    </React.Fragment>
  );
}

function Error({
  location: {
    state: { error },
  },
}) {
  return (
    <React.Fragment>
      <div>Oh no. There was an error.</div>
      <pre>{error.message}</pre>
      <div>
        <StyledLink to="/">Go Home</StyledLink>
        <StyledLink to="/confirm">Try again</StyledLink>
      </div>
    </React.Fragment>
  );
}

function Form() {
  return (
    <MultiPageFormProvider initialValues={{ food: '', drink: '' }}>
      <Router>
        <Switch>
          <Route path="/page-1" component={Page1} />
          <Route path="/page-2" component={Page2} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/success" component={Success} />
          <Route path="/error" component={Error} />
          <Route component={Main} />
        </Switch>
      </Router>
    </MultiPageFormProvider>
  );
}

export default Form;
