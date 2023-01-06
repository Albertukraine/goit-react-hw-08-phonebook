import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormControl } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { FormLabel } from '@chakra-ui/react';


export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
      <FormLabel >
        Email
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <Input type="password" name="password" />
      </FormLabel>
      <Button type="submit">Log In</Button>

      </FormControl>
    </form>
  );
};