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
          </div>
        </div>
      </section>
    );
};

export default HomeLayout;