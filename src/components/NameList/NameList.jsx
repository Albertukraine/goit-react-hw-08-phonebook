// import style from './NameList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilterValue } from 'redux/selectors';
import { Button } from '@chakra-ui/react';
import { Spacer } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

import {
  List,
  ListItem
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

export const NameList = () => {
  const dispatch = useDispatch();

  const filterValueFromStore = useSelector(getFilterValue);
  const contactsFromStore = useSelector(getContacts);

  const normalizedFilter = filterValueFromStore.toLowerCase();
  const contacts = contactsFromStore.value.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {contacts.map(contact => (
        <ListItem display='flex' key={contact.id} alignItems='center' mb={3}>

         <Avatar name={contact.name} mr={3}></Avatar>
            <Text as='b'> {contact.name}</Text>
            <Spacer/>
            <Text mr={3} >{contact.number}</Text>
          
          <Button
            name={contact.id}
          
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
