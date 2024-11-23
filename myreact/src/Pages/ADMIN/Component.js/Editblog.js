
import React, { useState } from 'react';
import axios from 'axios';

export default function EditBlog() {
    const [dataNewBlog, setDataNewBlog] = useState({
        title: '',
        content: '',
        author: ''
    });
    const [deleteData, setDeleteData] = useState('');
    const [updateBlog, setUpdateBlog] = useState({
        id: '',
        title: '',
        content: '',
        author: ''
    });

    const handleNewBlog = (e) => {
        const value = e.target.value;
        setDataNewBlog({
            ...dataNewBlog,
            [e.target.name]: value
        });
    };

    const blogInput = {
        title: dataNewBlog.title,
        content: dataNewBlog.content,
        author: dataNewBlog.author
    };

    function handleSubmitNewBlog(e) {
        e.preventDefault();

        axios.post('http://localhost:3001/api/blogs', blogInput)
            .then(response => {
                console.log('Added new blog', response.status);
                alert("Added new blog");
                setDataNewBlog({ title: '', content: '', author: '' });
            })
            .catch(error => {
                console.log('Error:', error.response ? error.response.data : error.message);
            });
    }

    function handleChangeDelete(e) {
        setDeleteData(e.target.value);
    }

    function handleDelete(e) {
        e.preventDefault();
        axios.delete(`http://localhost:3001/api/blogs/${deleteData}`)
            .then(res => {
                console.log(`Deleted successfully`, res.status);
                alert("Deleted Blog");
                setDeleteData('');
            })
            .catch(error => {
                console.log('Error Deleting:', error.response ? error.response.data : error.message);
            });
    }

    function handleChangeUpdate(e) {
        const value = e.target.value;
        setUpdateBlog({
            ...updateBlog,
            [e.target.name]: value
        });
    }

    function handleSubmitUpdateBlog(e) {
        e.preventDefault();

        const { id, title, content, author } = updateBlog;

        axios.put(`http://localhost:3001/api/blogs/${id}`, {
            title,
            content,
            author
        })
            .then((response) => {
                console.log('Updated successfully', response.data);
                alert('Updated Successfully');
                setUpdateBlog({ id: '', title: '', content: '', author: '' });
            })
            .catch((error) => {
                console.log('Error Updating:', error.response ? error.response.data : error.message);
            });
    }

    return (
        <div className="edit-blog-container">
            <h1 className="edit-blog-header">Edit Blog:</h1>

            {/* Add New Blog */}
            <h2 className='addNew'>Add New Blog:</h2>
            <form className="edit-blog-form" onSubmit={handleSubmitNewBlog}>
                <input
                    onChange={handleNewBlog}
                    name='title'
                    type="text"
                    value={dataNewBlog.title}
                    placeholder="Enter the title"
                />
                <textarea
                    onChange={handleNewBlog}
                    name='content'
                    value={dataNewBlog.content}
                    placeholder="Description"
                />
                <input
                    onChange={handleNewBlog}
                    name='author'
                    type="text"
                    value={dataNewBlog.author}
                    placeholder="Author"
                />
                <button className="submit-button">Add Blog</button>
            </form>

            {/* Remove Blog */}
            <h2 className='addNew'>Remove Blog:</h2>
            <form className="edit-blog-form" onSubmit={handleDelete}>
                <input
                    onChange={handleChangeDelete}
                    name='id'
                    value={deleteData}
                    type="text"
                    placeholder="Enter the Blog ID"
                />
                <button className="submit-button">Remove Blog</button>
            </form>

            {/* Update Blog */}
            <h2 className='addNew'>Edit Blog:</h2>
            <form className="edit-blog-form" onSubmit={handleSubmitUpdateBlog}>
                <input
                    name='id'
                    value={updateBlog.id}
                    onChange={handleChangeUpdate}
                    type="text"
                    placeholder="Enter the ID"
                />
                <input
                    name='title'
                    value={updateBlog.title}
                    onChange={handleChangeUpdate}
                    type="text"
                    placeholder="Enter the new title"
                />
                <textarea
                    name='content'
                    value={updateBlog.content}
                    onChange={handleChangeUpdate}
                    placeholder="New content"
                />
                <input
                    name='author'
                    value={updateBlog.author}
                    onChange={handleChangeUpdate}
                    type="text"
                    placeholder="New Author"
                />
                <button className="submit-button">Confirm</button>
            </form>
        </div>
    );
}
