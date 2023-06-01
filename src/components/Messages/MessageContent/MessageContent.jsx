/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  Divider from './../../Divider/Divider';
import styles from "./MessageContent.module.scss"
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";

const dataChat = [
    {
      avatarSrc:
        "https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1685923200&Signature=aYkvvJaADCnSSpAvXYDBzPZMmZ2HqaylxLq0uULoR7mWMh5AHmWPpWsc375lbfdODBxYiO1CFUq7WTicQDrbUGMpJ8q-~4Zq64UuZJ1UfGKL~AVHMirceFY46unrB1UTCyFeRrbXR3qsQBaD2sYn~l5kDJm2Xf5MIBspByIw7WH2F19FEKBEFLS1cKlW2VAnfNRn3PGBaUxgtsh09zLU0hQ~k7bR0wzTkDtRBgIevrr0CQ909s6uOkQpz0aqyPdvhDFNLULy4d3gdEZ0rYONf9jlEVetvEjBV7y~HBONtExoyu2Rl9VrP9SnOzTnHC2aSSzV3ZsQoym8jX5-uS-eSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      mySelf: false,
      contents: [
        "omg, this is amazing",
        "perfect! ✅",
        "Wow, this is really epic",
      ],
    },
    {
      avatarSrc:
        "https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1685923200&Signature=aYkvvJaADCnSSpAvXYDBzPZMmZ2HqaylxLq0uULoR7mWMh5AHmWPpWsc375lbfdODBxYiO1CFUq7WTicQDrbUGMpJ8q-~4Zq64UuZJ1UfGKL~AVHMirceFY46unrB1UTCyFeRrbXR3qsQBaD2sYn~l5kDJm2Xf5MIBspByIw7WH2F19FEKBEFLS1cKlW2VAnfNRn3PGBaUxgtsh09zLU0hQ~k7bR0wzTkDtRBgIevrr0CQ909s6uOkQpz0aqyPdvhDFNLULy4d3gdEZ0rYONf9jlEVetvEjBV7y~HBONtExoyu2Rl9VrP9SnOzTnHC2aSSzV3ZsQoym8jX5-uS-eSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      mySelf: true,
      contents: ["How are you?"],
    },
    {
      avatarSrc:
        "https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1685923200&Signature=aYkvvJaADCnSSpAvXYDBzPZMmZ2HqaylxLq0uULoR7mWMh5AHmWPpWsc375lbfdODBxYiO1CFUq7WTicQDrbUGMpJ8q-~4Zq64UuZJ1UfGKL~AVHMirceFY46unrB1UTCyFeRrbXR3qsQBaD2sYn~l5kDJm2Xf5MIBspByIw7WH2F19FEKBEFLS1cKlW2VAnfNRn3PGBaUxgtsh09zLU0hQ~k7bR0wzTkDtRBgIevrr0CQ909s6uOkQpz0aqyPdvhDFNLULy4d3gdEZ0rYONf9jlEVetvEjBV7y~HBONtExoyu2Rl9VrP9SnOzTnHC2aSSzV3ZsQoym8jX5-uS-eSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      mySelf: false,
      contents: ["just ideas for next time", "I'll be there in 2 mins ⏰"],
    },
    {
      avatarSrc:
        "https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1685923200&Signature=aYkvvJaADCnSSpAvXYDBzPZMmZ2HqaylxLq0uULoR7mWMh5AHmWPpWsc375lbfdODBxYiO1CFUq7WTicQDrbUGMpJ8q-~4Zq64UuZJ1UfGKL~AVHMirceFY46unrB1UTCyFeRrbXR3qsQBaD2sYn~l5kDJm2Xf5MIBspByIw7WH2F19FEKBEFLS1cKlW2VAnfNRn3PGBaUxgtsh09zLU0hQ~k7bR0wzTkDtRBgIevrr0CQ909s6uOkQpz0aqyPdvhDFNLULy4d3gdEZ0rYONf9jlEVetvEjBV7y~HBONtExoyu2Rl9VrP9SnOzTnHC2aSSzV3ZsQoym8jX5-uS-eSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      mySelf: true,
      contents: ["woohoooo", "Haha oh man", "Haha that's terrifying 😂"],
    },
    {
      avatarSrc:
        "https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1685923200&Signature=aYkvvJaADCnSSpAvXYDBzPZMmZ2HqaylxLq0uULoR7mWMh5AHmWPpWsc375lbfdODBxYiO1CFUq7WTicQDrbUGMpJ8q-~4Zq64UuZJ1UfGKL~AVHMirceFY46unrB1UTCyFeRrbXR3qsQBaD2sYn~l5kDJm2Xf5MIBspByIw7WH2F19FEKBEFLS1cKlW2VAnfNRn3PGBaUxgtsh09zLU0hQ~k7bR0wzTkDtRBgIevrr0CQ909s6uOkQpz0aqyPdvhDFNLULy4d3gdEZ0rYONf9jlEVetvEjBV7y~HBONtExoyu2Rl9VrP9SnOzTnHC2aSSzV3ZsQoym8jX5-uS-eSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      mySelf: false,
      contents: ["aww", "omg, this is amazing", "woohoooo 🔥"],
    },
  ];


  const ChatBlock = ({ avatarSrc, mySelf, contents}) => {
    return (
        <div className={`${styles.chat__block} ${
            mySelf ? styles["chat__block--self"] : ""
          }`}>
            <img src={avatarSrc} alt='' />
            <div className={styles.chat__contents}>
                {contents.map((content, idx) => (
                    <div key={idx} className={styles.chat__contents__text}> 
                    <p>{content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
  }

  const MessageContent = () => {
    return (
      <div className={styles["wrapper"]}>
        <div className={styles["top-content"]}>
          <div className={styles["header"]}>
            <div className={styles["user"]}>
              <img
                className={styles["avatar"]}
                src="https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1685923200&Signature=aYkvvJaADCnSSpAvXYDBzPZMmZ2HqaylxLq0uULoR7mWMh5AHmWPpWsc375lbfdODBxYiO1CFUq7WTicQDrbUGMpJ8q-~4Zq64UuZJ1UfGKL~AVHMirceFY46unrB1UTCyFeRrbXR3qsQBaD2sYn~l5kDJm2Xf5MIBspByIw7WH2F19FEKBEFLS1cKlW2VAnfNRn3PGBaUxgtsh09zLU0hQ~k7bR0wzTkDtRBgIevrr0CQ909s6uOkQpz0aqyPdvhDFNLULy4d3gdEZ0rYONf9jlEVetvEjBV7y~HBONtExoyu2Rl9VrP9SnOzTnHC2aSSzV3ZsQoym8jX5-uS-eSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                srcSet=""
              />
              <div className={styles["info"]}>
                <div className={styles["full-name"]}>Elmer Laverty</div>
                <div className={styles["status"]}>
                  <div className={styles["circle"]} />
                  <label>Online</label>
                </div>
              </div>
            </div>
            <button>
              <BsFillTelephoneFill />
              Call
            </button>
          </div>
          <Divider />
          <div className={styles["chat__list"]}>
            {dataChat.map((chat, idx) => (
              <ChatBlock key={idx} {...chat} />
            ))}
          </div>
        </div>
        <div className={styles["footer"]}>
          <GrAttachment size={24} opacity="0.4" />
          <div className={styles["box"]}>
            <input type="text" placeholder="Type a message" />
            <FaPaperPlane className={styles["send"]} />
          </div>
        </div>
      </div>
    );
  };

  export default MessageContent;
