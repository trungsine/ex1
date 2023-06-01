// import icon
import { BsChevronDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./MessageNav.module.scss";
import MessageCard from "../MessageCard/MessageCard"
import Divider from './../../Divider/Divider';

const dataMessageCard = [
    {
      id: 1,
      avatarSrc:
        "https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1685923200&Signature=aYkvvJaADCnSSpAvXYDBzPZMmZ2HqaylxLq0uULoR7mWMh5AHmWPpWsc375lbfdODBxYiO1CFUq7WTicQDrbUGMpJ8q-~4Zq64UuZJ1UfGKL~AVHMirceFY46unrB1UTCyFeRrbXR3qsQBaD2sYn~l5kDJm2Xf5MIBspByIw7WH2F19FEKBEFLS1cKlW2VAnfNRn3PGBaUxgtsh09zLU0hQ~k7bR0wzTkDtRBgIevrr0CQ909s6uOkQpz0aqyPdvhDFNLULy4d3gdEZ0rYONf9jlEVetvEjBV7y~HBONtExoyu2Rl9VrP9SnOzTnHC2aSSzV3ZsQoym8jX5-uS-eSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      fullName: "Elmer Laverty",
      content: "Haha oh man 🔥",
      online: "12m",
      badges: [
        {
          id: 1,
          content: "Question",
          mode: "danger",
        },
        {
          id: 2,
          content: "Help wanted",
          mode: "success",
        },
        {
          id: 3,
          content: "Help wanted",
          mode: "success",
        },
      ],
    },
    {
      id: 2,
      active: true,
      fullName: "Florencio Dorrance",
      content: "woohoooo",
      online: "24m",
      badges: [
        {
          id: 1,
          content: "Some content",
        },
      ],
    },
    {
      id: 3,
      fullName: "Lavern Laboy",
      content: "Haha that's terrifying 😂",
      online: "1h",
      badges: [
        {
          id: 1,
          content: "Bug",
          mode: "danger",
        },
        {
          id: 2,
          content: "Hacktoberfest",
          mode: "success",
        },
      ],
    },
    {
      id: 4,
      fullName: "Titus Kitamura",
      content: "omg, this is amazing",
      online: "5h",
      badges: [
        {
          id: 1,
          content: "Question",
          mode: "danger",
        },
        {
          id: 2,
          content: "Some content",
        },
      ],
    },
    {
      id: 5,
      fullName: "Geoffrey Mott",
      content: "aww 😍",
      online: "2d",
      badges: [
        {
          id: 1,
          content: "Request",
          mode: "success",
        },
      ],
    },
    {
      id: 6,
      fullName: "Alfonzo Schuessler",
      content: "perfect!",
      online: "1m",
      badges: [
        {
          id: 1,
          content: "Follow up",
        },
      ],
    },
  ];

  const MessageNav = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h3>Messages
                        <BsChevronDown />
                    </h3>
                    <h5>12</h5>
                </div>
                <button>
                    <AiOutlinePlus size='24'/>
                </button>
            </div>
            <Divider />
            <div className={styles.body}>
                <div className={styles.search__input}>
                    <AiOutlineSearch />
                    <input type="text"  placeholder="Search messages"/>
                </div>
                <div className={styles.message__list}>
                    {dataMessageCard?.map((data) => (
                        <MessageCard key={data.id} {...data} />
                    ))}
                </div>
            </div>
        </div>
    )
  }

  export default MessageNav;