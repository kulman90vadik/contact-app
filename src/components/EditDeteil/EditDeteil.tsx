import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersType } from "../../type/usersType";
import styles from './editDeteil.module.scss';
import { patchId } from "../../servises/patchId";
import EditPhoto from "./EditPhoto";

type Props = {
  newPerson: usersType;
  setNewPerson: (n: usersType) => void
}

const EditnewPerson = ({newPerson, setNewPerson}:Props) => {

  const queryClient = useQueryClient();
  const {mutate} = useMutation({ // useMutation - для всего кроме GET!
    mutationKey: ['patch contact'],
    mutationFn: () => patchId(newPerson.id, newPerson),
    onSuccess() { // если всё хорощо прошло то очищаем
      queryClient.refetchQueries({queryKey: ['list']}) // для автоматического обновления данных.
    }
  })

  const changeForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    mutate()
  }


  return (
    <aside className={styles.newPerson}>
    <form className={styles.form} onSubmit={changeForm}>

     <EditPhoto newPerson={newPerson} setNewPerson={setNewPerson}/>

      <ul className={styles.info}>
        <li className={styles.item}>
          <input className={styles.input} type="text" placeholder={newPerson.name} 
          onChange={(e) => setNewPerson({...newPerson, name: e.target.value})}
          value={newPerson.name ? newPerson.name : 'Name'}
          />
        </li>
        <li className={styles.item}>
          <input className={styles.input} type="text" placeholder={newPerson.email}
            onChange={(e) => setNewPerson({...newPerson, email: e.target.value})}
            value={newPerson.email ? newPerson.email : 'Email'}
            />
        </li>
        <li className={styles.item}>
          <input className={styles.input} type="text" placeholder={newPerson.phone}
           onChange={(e) => setNewPerson({...newPerson, phone: e.target.value})}
           value={newPerson.phone ? newPerson.phone : 'Phone'}
            />
        </li>
        <li className={styles.item}>
          <button className={styles.btn} type='submit'>
            Edit Contact
          </button>
        </li>
      </ul>

    </form>
  </aside>
  )
}
 
export default EditnewPerson;