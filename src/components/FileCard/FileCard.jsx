import styles from "./FileCard.module.scss";
import {
    AiOutlineFilePdf,
    AiOutlineFileImage,
    AiOutlineFileWord,
    AiOutlineFileExcel,
    AiOutlineDownload,
  } from "react-icons/ai";
  const Icon = {
    PDF: <AiOutlineFilePdf />,
    PNG: <AiOutlineFileImage />,
    DOC: <AiOutlineFileWord />,
    XXL: <AiOutlineFileExcel />,
  };

// eslint-disable-next-line react/prop-types
const FileCard = ({ extension, name, size}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
            <div className={`${styles.icon} ${styles[`icon-${extension}`] ?? ""}`}
            >
                 {Icon[extension]}
            </div>
                <div className={styles.detail}>
                    <h4>{name}</h4>
                    <div className={styles.properties}>
                        <h5>{extension}</h5>
                        <h5>{size}</h5>
                    </div>
                </div>
            </div>
            <button>
                <AiOutlineDownload />
            </button>
        </div>
    )
}

export default FileCard;