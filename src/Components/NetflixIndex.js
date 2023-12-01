import './NetflixIndex.css';
import Header from './Header';
import Main from './Main';
import NetflixRegisterComponents from './netflixRegisterComponents';
import Footer from './Footer';
function NetflixIndex(){
    return(
        <div className="container-fluid">
            <div className="box">
                <header>
                    <Header />
                </header>
                <section className='d-flex justify-content-center align-items-center'>
                    <main>
                        <Main />
                        <NetflixRegisterComponents />
                    </main>
                </section>
                <footer className="m-2 p-2">
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default NetflixIndex;