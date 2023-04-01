import Link from 'next/link';

const HomeLayout = ({children}) => {
    return (
        <section >
        <div  className='headTitle'>
          <h1>Redux CRUD APP</h1>
        </div>
        <div className='crud-app'>
          <div className='leftpart'>
            <nav>
              <Link href="/" className='active'>Home</Link>
              <Link href="/show-all-book">Show All Book</Link>
              <Link href="/add-book">Add Book</Link>
            </nav>
          </div>
          <div className='rightpart'>
            {children}

            <footer style={{position: "absolute",top: "95%",left: "50%",transform: "translate(-50%,-50%)"}}><small> &#169;copyright all rights reserved-2023</small></footer>
          </div>
        </div>
      </section>
    );
};

export default HomeLayout;