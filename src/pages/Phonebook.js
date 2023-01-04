import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { NameList } from 'components/NameList/NameList';
import { fetchContacts } from 'redux/operations';


export default function PhoneBook() {
  const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

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
     
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      
    </>
  );
}