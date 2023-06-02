/* eslint-disable react/prop-types */
import FileCard from '../../FileCard/FileCard';
import Divider from './../../Divider/Divider';
import MessageCard from './../MessageCard/MessageCard';
import styles from "./MessageDetail.module.scss";
import {CiMenuKebab} from 'react-icons/ci';

const dataTeam = [
    {
      id: 1,
      fullName: "Florencio Dorrance",
      content: "Market Development Manager",
    },
    {
      id: 2,
      fullName: "Benny Spanbauer",
      content: "Area Sales Manager",
    },
    {
      id: 3,
      fullName: "Jamel Eusebio",
      content: "Administrator",
    },
    {
      id: 4,
      fullName: "Lavern Laboy",
      content: "Account Executive",
    },
    {
      id: 5,
      fullName: "Alfonzo Schuessler",
      content: "Proposal Writer",
    },
    {
      id: 6,
      fullName: "Daryl Nehls",
      content: "Nursing Assistant",
    },
  ];

const dataFile = [
    {
      id: 1,
      extension: "PDF",
      name: "i9.pdf",
      size: "9mb",
    },
    {
      id: 2,
      extension: "PNG",
      name: "Screenshot-387.png",
      size: "4mb",
    },
    {
      id: 3,
      extension: "DOC",
      name: "sharefile.docx",
      size: "555kb",
    },
    {
      id: 4,
      extension: "XXL",
      name: "Jerry-2020_I-9_Form.xxl",
      size: "24mb",
    },
  ];


const Listcontainer = ({title, count, children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>{title}</h4>
        <h5>{count}</h5>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

const MessageDetail = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>Directory</h3>
        <button>
          <CiMenuKebab /> 
        </button>
      </div>
      <Divider />
      <Listcontainer title='Team Members' count={dataTeam.length}>
        {dataTeam.map((member) => (
          <MessageCard key={member.id} {...member}  />
        ))}
      </Listcontainer>
      <Divider />
      <Listcontainer title="Files" count="300">
          {dataFile.map((file) => (
            <FileCard key={file.id} {...file} />
          ))}
      </Listcontainer>
    </div>
  )
}

export default MessageDetail;