import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
    return (
        <>
            <div className="App">
                <header>
                    <Header />
                </header>
                <main>
                    <Main />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

export default App;
