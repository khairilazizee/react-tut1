import Link from 'next/link';
import React from 'react'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
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
                <div key={item.id}>
                    <Link href={`/blog/${item.id}`}>
                        {item.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Blog