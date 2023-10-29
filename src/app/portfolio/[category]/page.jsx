import React from 'react'
import { items } from './data.js'
import { notFound } from 'next/navigation'

const getData = (cat) => {
    const data = items[cat]

    if (data) {
        return data
    }

    return notFound();
}

const Category = ({ params }) => {
    const data = getData(params.category)
    return (
        <div>
            {data.map(items => (
                <div>
                    <h2>{items.title}</h2>
                    <p>{items.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Category