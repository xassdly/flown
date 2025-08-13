import styles from './UploadFile.module.css';

import cursor_icon from './../../assets/addnewpost_icons/cursor.svg';
import pngfile_icon from './../../assets/addnewpost_icons/pngfile.svg';
import upload_icon from './../../assets/addnewpost_icons/uploadfile.svg';

import { useRef, useState } from 'react';

type UploadFileProps = {
    setFile: (file: string) => void;
}

const UploadFile = ( {setFile}: UploadFileProps ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [active, setActive] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);

    const openFilePicker = () => inputRef.current?.click();

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            validateAndSetFile(e.target.files[0]);
        }
    }

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateAndSetFile(e.dataTransfer.files[0]);
        }
    }

    const validateAndSetFile = (file: File) => {
        const MAX_FILE_SIZE_MB: number = 10;
        const MAX_FILE_SIZE_BYTES: number = MAX_FILE_SIZE_MB * 1024 * 1024;
        const acceptedTypes: string[] = ['image/jpeg', 'image/png', 'image/svg+xml'];

        if (!acceptedTypes.includes(file.type)) {
            alert("Invalid file format");
            return;
        }

        if (file.size > MAX_FILE_SIZE_BYTES) {
            alert("File size is too big");
            return;
        }

        const fileURL = URL.createObjectURL(file);

        setFile(fileURL);
        setPreview(fileURL);
    }

    const preventDefaults = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }

    // drag enter/leave events
    const dragCounter = useRef(0);
    const handleDragEnter = (e: React.DragEvent) => {
        preventDefaults(e);
        dragCounter.current++;
        if (dragCounter.current === 1) {
            setActive(true);
        }
    };

    const handleDragLeave = (e: React.DragEvent) => {
        preventDefaults(e); 
        dragCounter.current--;

        if (dragCounter.current === 0) {
            setActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        preventDefaults(e);
        dragCounter.current = 0;
        setActive(false);
        onDrop(e);
    }


    return (
        <div 
            className={`${styles.upload} ${active ? styles.active : ''}`}
            onDragOver={preventDefaults}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}>
            
            {preview ? (
                <div className={styles.preview}>
                    <img src={preview} alt="preview" />
                </div>
            ) : (
                <>
                    <input type="file" ref={inputRef} accept='image/*' hidden onChange={onFileChange} />
                    <div className={styles.center}>
                        <div className={styles.uploadIcon}>
                            <img src={upload_icon} alt="upload image" />
                        </div>
                        <div className={styles.text}>
                            Drag & drop an image here to upload
                        </div>
                        <button onClick={openFilePicker} className={styles.button}>
                            Or click here
                        </button>
                    </div>
                    <footer className={styles.footer}>
                        Supported Format: SVG, JPG, PNG (10mb each)
                    </footer>
                    <div className={styles.hint}>
                        <img src={cursor_icon} alt="cursor" className={styles.iconCursor}/>
                        <img src={pngfile_icon} alt="pngfile" className={styles.iconFile}/>
                    </div>
                </>
            )}
        </div>
    )
}

export default UploadFile;