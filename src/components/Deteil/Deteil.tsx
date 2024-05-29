import { FormEvent, useContext, useState } from 'react';
import styles from './deteil.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import DeteilPhoto from './DeteilPhoto';
import { postId } from '../../servises/postId';
import { UserPlus } from 'lucide-react';
import { Context } from '../../context';


const newDeteil = {
  "id": 1,
  "email":"Email",
  "name":"Name",
  "phone": '0175 44 55668 12',
  "star": false,
  "avatar":"/images/person.png"
}

type Props = {
  setPlusContact: (n: boolean) => void;
  plusContact: boolean
}

const Deteil = ({setPlusContact, plusContact}: Props) => {
  const {isAuth} = useContext(Context);
  const [preview, setPreview] = useState<any>();
  const queryClient = useQueryClient();
  const[newPerson, setNewPerson] = useState({"name": '', "phone": '', "email": '', "avatar": ''})
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[phone, setPhone] = useState('')


  const {mutate} = useMutation({ // useMutation - для всего кроме GET!
    mutationKey: ['send contact'],
    mutationFn: () => postId(newPerson),
    onSuccess() { // если всё хорощо прошло то очищаем
      queryClient.refetchQueries({queryKey: ['list']}) // для автоматического обновления данных.
    }
  })

  const changeForm = (event: FormEvent) => {
    event.preventDefault();
    if(name != '' || email != '' || phone != '') {
      // if(preview === '') setPreview("/images/person.png")
      setNewPerson( {'name': name, 'email': email, 'phone': phone, 'avatar': preview} )
      mutate()
  
      setName('')
      setEmail('')
      setPhone('')
      setPreview('')
    }
    
  }

  return (
    <>
      {plusContact &&
        <button 
        className={`${styles.btn} ${isAuth ? styles.btnDark : ''}`}
        style={{ maxHeight: plusContact ? "200px" : "0px" }}
         type="button" onClick={() => setPlusContact(false)}>
          <UserPlus />
        </button>
      }
    <aside className={`${styles.deteil} ${isAuth ? styles.deteilDark : ''}`} style={{ maxHeight: !plusContact ? "1500px" : "0px" }}>
      <form className={styles.form} onSubmit={changeForm}>

       <DeteilPhoto newDeteil={newDeteil} setPreview={setPreview} preview={preview}/>

        <ul className={styles.info}>
          <li className={styles.item}>
            <input className={styles.input} type="text" placeholder={newDeteil.name} 
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
          </li>
          <li className={styles.item}>
            <input className={styles.input} type="text" placeholder={newDeteil.email}
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
          </li>
          <li className={styles.item}>
            <input className={styles.input} type="text" placeholder={newDeteil.phone}
             onChange={(e) => setPhone(e.target.value)}
             value={phone} />
          </li>
          <li className={styles.item}>
            <button className={styles.submit} type='submit'>
              Add New Contact
            </button>
          </li>
        </ul>

      </form>
    </aside>
    </>
  );
}
 
export default Deteil;