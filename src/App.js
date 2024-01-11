import 'tailwindcss/tailwind.css';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <>
      <header className='fixed top-0 w-full bg-white shadow'>
        <div className='flex justify-between items-center py-[8px] px-[16px]'>
          <Search />
        </div>
      </header>
      <section className='py-[8px] px-[16px] mt-[60px]'>
        <Home />
      </section>
    </>
  );
}

export default App;
