

import { useEffect, useRef } from 'react'
import styles from './modal.module.scss'
import { X } from 'lucide-react'
// import { ArrowDownToLine, X } from 'lucide-react'


export default function ModalPhoto({openModal, setModal, children}: {
  children: React.ReactNode
  openModal: boolean
  // urlImage: string
  setModal: (b: boolean) => void
}) {
	const ref = useRef<HTMLDialogElement>(null)
	useEffect(() => {
		if (openModal) {
			ref.current?.showModal()
		} else {
			ref.current?.close()
		}
	}, [openModal])

	let active = `${styles.active} ${styles.modal}`

	return (
		<dialog className={`${styles.modal} ${openModal ? active : ''}`} ref={ref}  onClick={() => setModal(false)}>
			<div className={styles.photo} onClick={(e) => e.stopPropagation()}>
				{children}

        {/* <button className={`${styles.btn} ${styles.download}`} type='button' >
				   <a href={urlImage} download>
					   <ArrowDownToLine />
					 </a>
        </button> */}
        <button className={styles.btn} type='button' onClick={() => setModal(false)}>
          <X />
        </button>
			</div>
		</dialog>
	)
}


