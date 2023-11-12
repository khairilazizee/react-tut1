import Link from 'next/link';
import React from 'react'



export const metadata = {
    title: 'Blog',
    description: 'Blog page',
}

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

const Blog = async () => {

    const data = await getData();
    return (
        <div>
            {data.map(item => (
                <div key={item._id}>
                    <Link href={`/blog/${item._id}`}>
                        {item.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Blog