import { addBook } from "@/features/booksSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid';


const Index = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const dispatch = useDispatch();
    const router = useRouter()
    // const numberOfbook = useSelector((state)=> state.booksReducer.books.length)

    const handleSubmit = (e) =>{
        e.preventDefault();
        // const book = {id:numberOfbook + 1, title, author};
        const book = {id:uuidv4(), title, author};
        dispatch(addBook(book));
        router.push("/show-all-book");
    }
    return (
        <div style={{ marginTop: "80px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Books</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <br />
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default Index;