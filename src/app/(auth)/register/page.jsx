import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";

const RegisterPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.warpper}>
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;
