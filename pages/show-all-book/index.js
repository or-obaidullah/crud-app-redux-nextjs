import { deleteBook } from '@/features/booksSlice';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";

const Index = () => {
    const books = useSelector((state) => state.booksReducer.books)
    const dispatch = useDispatch()
    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))
    }
    const router = useRouter();
    // const handleEditBook = () => {
    //     router.push("/edit-book");
    // }
    return (
        <div style={{ marginTop: "80px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>List of Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books && books.map((book) => {
                            const { id, title, author } = book;
                            return <tr Key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>
                                    <button
                                        onClick={() => router.push({
                                            pathname: "/edit-book",
                                            query: {
                                                id: id,
                                                title: title,
                                                author: author
                                            },
                                        }
                                        )}
                                    >Edit</button>
                                    <button onClick={() => { handleDeleteBook(id) }} style={{ marginLeft: "10px" }}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div >
    );
};

export default Index;