import { useDispatch } from 'react-redux';
import { filterContactList } from 'redux/filterSlice/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    let value = e.target.value.toLowerCase();
    dispatch(filterContactList(value));
  };
  return (
    <form>
      <label>Find contact</label>
      <input onChange={handleChange}></input>
    </form>
  );
};
