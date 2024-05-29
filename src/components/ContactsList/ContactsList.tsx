import styles from "./contactsList.module.scss";
import { usersType } from "../../type/usersType";
import Loader from "../Loader/Loader";
import { getAll } from "../../servises/getAll";
import { useQuery } from "@tanstack/react-query";
import Search from "./Search/Search";
import { useState } from "react";
import ContactItem from "./ContactItem/ContactItem";

type Props = {
  deteilCard: (n: number) => void;
  emptyCard: (n: number) => void;
};

const ContactsList = ({ deteilCard, emptyCard }: Props) => {
  // const[preiwe, setPreiwe] = useState(false);
  const [search, setSearch] = useState("");

  const { data, isPending, error } = useQuery({
    queryKey: ["list"],
    queryFn: () => getAll(),
  });

  // if (error) return 'An error has occurred: ' + error.message

  return (
    <section className={styles.contactsList}>
      <Search setSearch={setSearch} search={search} />

      <ul className={styles.list}>
        {isPending ? (
          [...Array(10)].map((_, i) => <Loader key={i} />)
        ) : error ? (
          <li className={styles.error}>
            <span>There was an error receiving goods.</span>
            <p>Please try again later</p>
            <div>&#128554;</div>
          </li>
        ) : (
          data
            .filter((contact: usersType) => {
              if (contact.name.toLowerCase().includes(search.toLowerCase())) {
                return contact;
              }
            })
            .map((contact: usersType) => {
              return (
                <ContactItem
                  key={contact.id}
                  contact={contact}
                  deteilCard={deteilCard}
                  emptyCard={emptyCard}
                />
              );
            })
        )}
      </ul>
    </section>
  );
};

export default ContactsList;
