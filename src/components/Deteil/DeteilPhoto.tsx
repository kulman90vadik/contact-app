import { useEffect, useRef, useState } from 'react';
import { usersType } from '../../type/usersType';
import styles from './photo.module.scss'

type Props = {
  newDeteil: usersType
  setPreview: (n: any) => void
  preview: string
}

const DeteilPhoto = ({setPreview, preview, newDeteil}: Props) => {
  const [image, setImage] = useState<string | any>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview('/images/person.png');
    }
  }, [image]);


  return (
    <div className={styles.photo}>

    <div className={styles.image}>

      <img src={preview ? preview : newDeteil.avatar} alt="photography of clothes" className={styles.avatar} />

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
 
export default DeteilPhoto;