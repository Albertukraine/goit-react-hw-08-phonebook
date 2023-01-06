import { setFilterValue } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { FormControl } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { FormLabel } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);

  const handleInput = evt => {
    const input = evt.target;
    dispatch(setFilterValue(input.value));
  };

  return (
    <FormControl>
      <FormLabel>Find contacts by name</FormLabel>
      <Input
      mb={3}
        onInput={handleInput}
        value={value}
        type="text"
        name="filter"
        placeholder="Type name to find"
      />
    </FormControl>
  );
};
