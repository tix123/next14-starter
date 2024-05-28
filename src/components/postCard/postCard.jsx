import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/18413376/pexels-photo-18413376/free-photo-of-pink-roses-sticking-in-water-at-a-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        fill
                        className={styles.img}
                    />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita ex cum facere quam sint sequi repellendus. Suscipit
                    quidem mollitia iure dolor, voluptatem vel asperiores
                    voluptatibus commodi itaque debitis praesentium tenetur.
                </p>
                <Link className={styles.link} href="/blog/post">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
