import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/18413376/pexels-photo-18413376/free-photo-of-pink-roses-sticking-in-water-at-a-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image
                        src="/noavatar.png"
                        alt=""
                        className={styles.avatar}
                        width={50}
                        height={50}
                    />
                    <div className={styles.detailtext}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Sean Chen</span>
                    </div>
                    <div className={styles.detailtext}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>

                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati placeat eos maxime mollitia ut minima eveniet
                    consequatur. Ad beatae esse ex minima tempore magnam minus
                    quas optio magni perspiciatis? Iusto.
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;
