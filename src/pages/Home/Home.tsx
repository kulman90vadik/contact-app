import styles from "./home.module.scss";
import "../../scss/global.scss";
import Deteil from "../../components/Deteil/Deteil";
import ContactsList from "../../components/ContactsList/ContactsList";
import { useState } from "react";
import { usersType } from "../../type/usersType";
import { getId } from "../../servises/getId";
import EditDeteil from "../../components/EditDeteil/EditDeteil";

const Home = () => {
  const[newPerson, setNewPerson] = useState<usersType | null>(null); 
  const[plusContact, setPlusContact] = useState(false);

  async function deteilCard (id: number) {
    setNewPerson({"id": 0,   "star": false, "email":"", "name": "", "phone": '', "avatar": ""})
    let data = await getId(id)
    setNewPerson(data)
    setPlusContact(true)
  }

  function emptyCard (id: number) {
    if(newPerson?.id === id) setNewPerson(null)
  }
  
  
  return (
    // <SetProvider>
      <section className={styles.home}>
        <div className="container">
        
          <div className={styles.inner}>

            <div className={styles.left}>
              
          
                <Deteil setPlusContact={setPlusContact} plusContact={plusContact}/>
           

              {newPerson && 
              <EditDeteil newPerson={newPerson} setNewPerson={setNewPerson}/> 
              }

            </div>

            <ContactsList deteilCard={deteilCard} emptyCard={emptyCard}/>
            
          </div>

        </div>
      </section>
    // </SetProvider>
  );
};

export default Home;
