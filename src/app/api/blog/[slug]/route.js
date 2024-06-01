const { Post } = require("@/lib/models");
const { connectToDb } = require("@/lib/utils");
const { NextResponse } = require("next/server");

export const GET = async (request, { params }) => {
    const { slug } = params;
    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return NextResponse.json(post);
    } catch (err) {
        console.log(err);
        throw new Error("Fail to fetch post!");
    }
};

export const DELETE = async (request, { params }) => {
    const { slug } = params;
    try {
        connectToDb();
        await Post.deleteOneOne({ slug });
        return NextResponse.json("post deleted!");
    } catch (err) {
        console.log(err);
        throw new Error("Fail to delete post!");
    }
};
