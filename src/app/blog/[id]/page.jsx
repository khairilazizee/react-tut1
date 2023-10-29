import React from 'react'
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        // throw new Error('Failed to fetch data')
        return notFound();
    }

    return res.json();
}

const BlogPost = async ({ params }) => {

    const data = await getData(params.id)
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <Link href="/blog" >Back</Link>
        </div>
    )
}

export default BlogPost