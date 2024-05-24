import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersType } from "../../../type/usersType";
import styles from '../contactsList.module.scss';
import { patchStar } from "../../../servises/patchStar";

type Props = {
  contact: usersType
}


const Star = ({contact}: Props) => {

  const queryClient = useQueryClient();
  const {mutate} = useMutation({ // useMutation - для всего кроме GET!
    mutationKey: ['patch star contact'],
    mutationFn: () => patchStar(contact.id, {...contact, star: !contact.star}),
    onSuccess() { // если всё хорощо прошло то очищаем
      queryClient.refetchQueries({queryKey: ['list']}) // для автоматического обновления данных.
    }
  })

  const changeStar = (e: React.MouseEvent<HTMLButtonElement>, id: number, contact: usersType) => {
    e.stopPropagation();
    console.log(id);
    console.log(contact);
    mutate();
  }
  return (
    <button className={styles.star} type="button" onClick={(e) => changeStar(e, contact.id, contact)}>
        <svg className={`${styles.icon} ${contact.star ? styles.iconActive : ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.03954 7.77203C3.57986 8.32856 2.35002 8.60682 2.05742 9.54773C1.76482 10.4886 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19043 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62118 22.3417 7.77268 21.8115 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0248 12 20.0248C12.3469 20.0248 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8115 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544M19.7199 13.4299C21.3968 11.4691 22.2352 10.4886 21.9426 9.54773C21.65 8.60682 20.4201 8.32856 17.9605 7.77203L17.3241 7.62805C16.6251 7.4699 16.2757 7.39083 15.9951 7.17781C15.7144 6.96479 15.5345 6.64193 15.1745 5.99623L14.8468 5.40837C13.5802 3.13612 12.9469 2 12 2C11.0531 2 10.4198 3.13613 9.15316 5.40838"  strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </button>
  );
}
 
export default Star;