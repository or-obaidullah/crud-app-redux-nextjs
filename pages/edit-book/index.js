import { updateBook } from "@/features/booksSlice";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Index = () => {
    const {query} = useRouter();
    const [id,setId] = useState(query.id);
    const [title,setTitle] = useState(query.title);
    const [author,setAuthor] = useState(query.author);
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateBook({id, title, author}))
        router.push("/show-all-book", {replace: true});

    }
    return (
        <div style={{ marginTop: "80px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Edit Books</h2>
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
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default Index;