import BrandName from '@/assets/brandName.svg'
import LOGO from '@/assets/Logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import SearchInput from '@/components/SearchInput'
import { useContext } from 'react'
import { SearchContext } from '@/context/searchContext'

function App() {
  const { searchValue, setSearchValue } = useContext(SearchContext)

  return (
    <>
      <Navbar />
      <div className="container mx-auto w-1/2">
        <div className="flex flex-col items-center justify-center mt-36">
          <div className="flex flex-none gap-x-6 mb-20">
            <img className='w-full' src={LOGO} alt="Logo" />
            <img className='w-full' src={BrandName} alt="Brand name" />
          </div>
          <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>
    </>
  )
}

export default App
