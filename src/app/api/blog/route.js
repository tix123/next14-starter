const { Post } = require("@/lib/models");
const { connectToDb } = require("@/lib/utils");
const { NextResponse } = require("next/server");

export const GET = async (request) => {
    try {
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (err) {
        console.log(err);
        throw new Error("Fail to fetch posts!");
    }
};
