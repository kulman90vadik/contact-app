import styles from "./contactsList.module.scss";
import { usersType } from "../../type/usersType";
import Loader from "../Loader/Loader";
import { getAll } from "../../servises/getAll";
import {useQuery } from "@tanstack/react-query";
import Search from "./Search/Search";
import { useState } from "react";
import ContactItem from "./ContactItem/ContactItem";

type Props = {
  deteilCard: (n: number) => void;
  emptyCard: (n: number) => void;
}

const ContactsList = ({deteilCard, emptyCard}: Props) => {
  // const[preiwe, setPreiwe] = useState(false);
  const[search, setSearch] = useState('');

	const {data, isPending} = useQuery({
		queryKey: ['list'],
		queryFn: () => getAll()
	})

  return (
    <section className={styles.contactsList}>

      <Search setSearch={setSearch} search={search}/>

      <ul className={styles.list}>
        {isPending ? 
          [...Array(10)].map((_, i) => <Loader key={i} />)
        :
        data
        .filter((contact:usersType) => {
          if(contact.name.toLowerCase().includes(search.toLowerCase())) {
            return contact
          }
        })
        .map((contact:usersType) => {
          return (
            <ContactItem key={contact.id} contact={contact} deteilCard={deteilCard} emptyCard={emptyCard}/>
          );
        })
        }
        
      </ul>

     


    </section>
  );
};

export default ContactsList;
