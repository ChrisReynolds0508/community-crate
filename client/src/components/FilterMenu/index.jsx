import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_FILTERS,
  UPDATE_CURRENT_FILTER,
} from '../../utils/actions';
import { QUERY_FILTERS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import '../../index.css';
import sampleImage from '../../assets/tomato.jpg';

function FilterMenu() {
  const [state, dispatch] = useStoreContext();

  const { filters } = state;

  const { loading, data: filterData } = useQuery(QUERY_FILTERS);

  useEffect(() => {
    if (filterData) {
      dispatch({
        type: UPDATE_FILTERS,
        filters: filterData.filters,
      });
      filterData.filters.forEach((filter) => {
        idbPromise('filters', 'put', filter);
      });
    } else if (!loading) {
      idbPromise('filters', 'get').then((filters) => {
        dispatch({
          type: UPDATE_FILTERS,
          filters: filters,
        });
      });
    }
  }, [filterData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_FILTER,
      currentFilter: id,
    });
  };

  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img src={sampleImage} alt="Sample" className='hero' style={{ width: '100%', borderBottom:'solid 1px black' }} />
      <h2 style={{ position: 'inherit', bottom: '0px', color: 'var(--light)' , marginLeft:'20px' }}>
        <span className='state' style={{ backgroundColor: 'darkgreen' , borderRadius:'10px', boxShadow: '10px 10px 15px rgba(2, 0, 0, 0.47) ', padding:
        '5px'}}>Filter by State:</span>
      </h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        {filters.map((item) => (
          <button
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.name}
          </button>
        ))}
        <button
          onClick={() => {
            handleClick('');
          }}
        >
          All
        </button>
      </div>
    </div>
  );
}

export default FilterMenu;
