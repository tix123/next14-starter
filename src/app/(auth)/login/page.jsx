import { handleGithubLogin } from "@/lib/action";

const LoginPage = async () => {
    return (
        <div>
            <form action={handleGithubLogin}>
                <button>login with GitHub</button>
            </form>
        </div>
    );
};

export default LoginPage;
