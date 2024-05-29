import styles from "./home.module.scss";
import "../../scss/global.scss";
import Deteil from "../../components/Deteil/Deteil";
import ContactsList from "../../components/ContactsList/ContactsList";
import { useContext, useEffect, useState } from "react";
import { usersType } from "../../type/usersType";
import { getId } from "../../servises/getId";
import EditDeteil from "../../components/EditDeteil/EditDeteil";
import { Context } from "../../context";

const Home = () => {
  const [newPerson, setNewPerson] = useState<usersType | null>(null);
  const [plusContact, setPlusContact] = useState(false);
  const { setIsAuth } = useContext(Context);


  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      document.body.classList.add("dark");
    }
  }, []);

  async function deteilCard(id: number) {
    setNewPerson({
      id: 0,
      star: false,
      email: "",
      name: "",
      phone: "",
      avatar: "",
    });
    let data = await getId(id);
    setNewPerson(data);
    setPlusContact(true);

    window.scrollTo(0, 0);
  }

  function emptyCard(id: number) {
    if (newPerson?.id === id) setNewPerson(null);
  }

  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <Deteil setPlusContact={setPlusContact} plusContact={plusContact} />

            {newPerson && (
              <EditDeteil newPerson={newPerson} setNewPerson={setNewPerson} />
            )}
          </div>
          <ContactsList deteilCard={deteilCard} emptyCard={emptyCard} />
        </div>
      </div>
    </section>
  );
};

export default Home;
