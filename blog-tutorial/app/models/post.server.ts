import { prisma } from "~/db.server";

// import type { Post } from "@prisma/client";

type Post = {
  slug: string;
  title: string;
};

export async function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(post: any) {
  return prisma.post.create({ data: post });
}
