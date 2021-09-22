import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    }
  },
  button: {
    margin: theme.spacing(2),
  }
}))

function App() {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { firstName: '', lastName: '', email: ''},
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }

  return (
    <Container>
    <h1>Добавление пользователя</h1>
      <form className={classes.root}>
        { inputFields.map((inputField, index) => (
          <div key={index}>
              <TextField 
                name="fistName"
                label="Имя"
                variant="filled"
                value={inputField.firstName} 
                onChange={event => handleChangeInput(index, event)}
              />
              <TextField 
                name="lastName"
                label="Фамилия"
                variant="filled"
                value={inputField.lastName} 
                onChange={event => handleChangeInput(index, event)}
              />
              <TextField 
                name="email"
                label="e-mail"
                variant="filled"
                value={inputField.email} 
                onChange={event => handleChangeInput(index, event)}
              />
              <Button 
              className={classes.button}
              variant="contained" 
              color="primary" 
              type="submit">Добавить пользователя</Button>
          </div>
        ))}
      </form>
    </Container>
  );
}

export default App