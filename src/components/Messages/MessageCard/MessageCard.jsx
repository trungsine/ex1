/* eslint-disable react/prop-types */
import styles from "./MessageCard.module.scss" ;

const Badge = ({ content, mode }) => (
    <h5 className={`${styles.badge} ${styles[`badge--${mode}`] ?? ""}`}>
      {content}
    </h5>
  );
const MessageCard = ({
    avatarSrc = "https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1685923200&Signature=aYkvvJaADCnSSpAvXYDBzPZMmZ2HqaylxLq0uULoR7mWMh5AHmWPpWsc375lbfdODBxYiO1CFUq7WTicQDrbUGMpJ8q-~4Zq64UuZJ1UfGKL~AVHMirceFY46unrB1UTCyFeRrbXR3qsQBaD2sYn~l5kDJm2Xf5MIBspByIw7WH2F19FEKBEFLS1cKlW2VAnfNRn3PGBaUxgtsh09zLU0hQ~k7bR0wzTkDtRBgIevrr0CQ909s6uOkQpz0aqyPdvhDFNLULy4d3gdEZ0rYONf9jlEVetvEjBV7y~HBONtExoyu2Rl9VrP9SnOzTnHC2aSSzV3ZsQoym8jX5-uS-eSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    // eslint-disable-next-line react/prop-types
    fullName,
    online,
    content,
    badges,
    active,
  }) => {
    // console.log(content)
    return (
        <div className={`${styles.wrapper} ${
            active ? styles.wrapper__active : ""
          }`}>
            <img className={styles.avatar} src={avatarSrc}></img>
            <div className={styles.card}>
                <div className={styles.body}>
                    <div className={styles.person}>
                        <h4>{fullName}</h4>
                        <div className={styles.online}>{online}</div>
                    </div>
                    <div className={styles.content}>{content}</div>
                </div>
                <div className={styles.badge__list}>
                    {badges?.map((data) => (
                        <Badge key={data.id} {...data} />
                    ))}
                </div>
            </div>
        </div>
    )
   }

   export default MessageCard;