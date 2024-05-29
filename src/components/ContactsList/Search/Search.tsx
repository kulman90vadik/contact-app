import { useContext } from 'react';
import styles from './search.module.scss';
import { X } from 'lucide-react';
import { Context } from '../../../context';

type Props = {
  setSearch: (str: string) => void;
  search: string
}

const Search = ({setSearch, search}:Props) => {
  const {isAuth} = useContext(Context);

  return (
    <div className={styles.search}>
      <svg className={styles.icon} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
        <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <input className={`${styles.input} ${isAuth ? styles.inputDark : ''}`} type="text"
       placeholder='Search Name...' value={search} 
       onChange={(e) => setSearch(e.target.value)} />

       {search &&
        <button className={styles.close} onClick={() => setSearch('')}>
          <X />
        </button>
       }
    </div>
  );

}
 
export default Search;