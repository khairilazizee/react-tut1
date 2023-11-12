import React from 'react'
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        // throw new Error('Failed to fetch data')
        return notFound();
    }

    return res.json();
}

export async function generateMetadata({ params }) {

    const posts = await getData(params.id)

    return {
        title: posts.title
    }
}

const BlogPost = async ({ params }) => {

    const data = await getData(params.id)
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.short_description}</p>
            <p>{data.content}</p>
            <br />
            <Link href="/blog">Back</Link>
        </div>
    )
}

export default BlogPost