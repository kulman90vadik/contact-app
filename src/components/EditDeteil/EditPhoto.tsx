import { useEffect, useRef, useState } from 'react';
import { usersType } from '../../type/usersType';
import styles from './photo.module.scss'

type Props = {
  newPerson: usersType;
  setNewPerson: (n: usersType) => void
}

const EditPhoto = ({newPerson, setNewPerson}: Props) => {
  const [image, setImage] = useState<string | any>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPerson({...newPerson, avatar: reader.result})
      };
      reader.readAsDataURL(image);
    } else {
      setNewPerson({...newPerson, avatar: null})
    }
  }, [image]);


  return (
    <div className={styles.photo}>
      <div className={styles.image}>
        <img className={styles.avatar} src={newPerson.avatar} alt={newPerson.name} />
        <label className={styles.label}  htmlFor="file" 
            style={{ backgroundImage: `url("images/decor.svg")` }}  
            onClick={(event: React.MouseEvent<HTMLLabelElement>) => {
            event.preventDefault();
            fileInputRef.current?.click();
          }}>
        </label>
          <input className={styles.fileInput} type="file"               
            id="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(event) => {
              const e = event.target as HTMLInputElement;
              const file: File = (e.files as FileList)[0];
              if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
              } else {
                setImage('');
              }
            }} />
      </div>
    </div>
  );
}
 
export default EditPhoto;