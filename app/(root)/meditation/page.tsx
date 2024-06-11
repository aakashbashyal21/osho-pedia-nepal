import { getAllMeditationList, getRecentMeditationList } from '@/data/action';
import React, { useState } from 'react';

const Page = async () => {
    const blogs = await getAllMeditationList();


    return (
        <div>
            <h1>List of Meditation Blogs</h1>
            <ul>
                {blogs.map((blog, index) => (
                    <li key={index}>
                        <a href={`/article/${blog.urlSlug}`}>{blog.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
