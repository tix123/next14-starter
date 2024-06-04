"use server";

import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, fromData) => {
    // const title = fromData.get("title");
    // const desc = fromData.get("desc");
    // const slug = fromData.get("slug");

    const { title, desc, slug, userId } = Object.fromEntries(fromData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });
        await newPost.save();
        console.log("save to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "something went wrong!" };
    }
};

export const deletePost = async (fromData) => {
    const { id } = Object.fromEntries(fromData);

    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("delete from db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "something went wrong!" };
    }
};

export const addUser = async (prevState, fromData) => {
    const { username, email, password, img } = Object.fromEntries(fromData);

    try {
        connectToDb();
        const newUser = new User({
            username,
            email,
            password,
            img,
        });
        await newUser.save();
        console.log("save to db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "something went wrong!" };
    }
};

export const deleteUser = async (fromData) => {
    const { id } = Object.fromEntries(fromData);

    try {
        connectToDb();
        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("delete from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "something went wrong!" };
    }
};

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
};

export const handleLogout = async () => {
    "use server";
    await signOut();
};

export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } =
        Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        // return "Password do not match!";
        // throw new Error("Password do not match!");
        return { error: "Password do not match!" };
    }

    try {
        connectToDb();

        const user = await User.findOne({ username });

        if (user) {
            return { error: "Username already exist" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });
        await newUser.save();
        console.log("save to db");
        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const login = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err);
        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username and/or password" };
        }
        // return { error: "Something went wrong!" };
        throw err;
    }
};
