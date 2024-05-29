import { useContext, useEffect, useRef, useState } from "react";
import { usersType } from "../../../type/usersType";
import styles from "../contactsList.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteId } from "../../../servises/deleteId";
import ModalPhoto from "../../ModalPhoto/ModalPhoto";
import Star from "./Star";
import { Context } from "../../../context";
type Props = {
  deteilCard: (n: number) => void;
  emptyCard: (n: number) => void;
  contact: usersType
}

const ContactItem = ({contact, deteilCard, emptyCard}:Props) => {  
  const [modal, setModal] = useState(false)
  const [urlImage, setUrlImage] = useState('')
  const[delId, setDelId] = useState(0);
  const [open, setOpen] = useState(false);
  const refDiv = useRef<HTMLDivElement>(null);

  const {isAuth} = useContext(Context);

  const showDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(!open)
  }



  useEffect(() => {
    const clickSortHandler = (event: MouseEvent) => {
      event.stopPropagation();
      const e = event as MouseEvent;
      if (refDiv.current && !e.composedPath().includes(refDiv.current)) {
        setOpen(false)
      }
    };
    document.body.addEventListener("click", clickSortHandler);
    return () => {
      document.body.removeEventListener("click", clickSortHandler);
    };
  }, []);


  

  const queryClient = useQueryClient();

  const {mutate} = useMutation({ // useMutation - для всего кроме GET!
		mutationKey: ['delete email'],
		mutationFn: () => deleteId(delId),
		onSuccess() { // если всё хорощо прошло то очищаем
			queryClient.refetchQueries({queryKey: ['list']}) // для автоматического обновления данных.
		}
	})

const deleteItem = (e: React.MouseEvent<HTMLLIElement>, id: number) => {
  e.stopPropagation();
  setOpen(!open);
  setDelId(id);
  mutate();
  emptyCard(id)
}

const modalHandler = (e: React.MouseEvent<HTMLImageElement>, url: string) => {
  e.stopPropagation();
  setModal(true)
  setUrlImage(url)
}

  return (
    <>
      <li className={`${styles.item} ${isAuth ? styles.itemDark : ''}`} onClick={() => deteilCard(contact.id)}>
        <div className={styles.left}>
          <img className={styles.image} src={contact.avatar} alt={contact.name} 
          onClick={(e) => modalHandler(e, contact.avatar)}
          />
          <div className={styles.info}>
              <span className={styles.name}>{contact.name}</span>
              <span className={styles.email}>{contact.email}</span>
              <span className={styles.tel}>{contact.phone}</span>
          </div>
        </div>
        <div className={styles.right}>

          <Star contact={contact} />

          <div ref={refDiv} >
            <button className={styles.show} type="button" onClick={(e) => showDelete(e)}>
              <span></span><span></span><span></span>
              <ul className={styles.actions} style={{ maxHeight: open ? "500px" : "0px" }}>
                <li onClick={(e) => deleteItem(e, contact.id)}>Delete Contact</li>
                {/* <li >Chtoto Contact</li> */}
              </ul>
            </button>
          </div>
        </div>
      </li>

      <ModalPhoto openModal={modal} setModal={setModal} >
        <img src={urlImage} alt="Pho" />
      </ModalPhoto>

    </>
  );
}
 
export default ContactItem;