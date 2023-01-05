import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { NameList } from 'components/NameList/NameList';
import { fetchContacts } from 'redux/operations';

// import { Loader } from 'components/Loader/Loader';


export default function PhoneBook() {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Form />
      <Filter />
      <Loader />
      <NameList />
     
      
      
    </>
  );
}