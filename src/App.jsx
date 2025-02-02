import Random from './components/Random'
import Tag from './components/Tag'


export default function App() {
  return (
  <div className='flex flex-col items-center background overflow-x-hidden w-full h-screen'>
      <h1 className='text-4xl font-bold bg-white rounded-2xl mt-10 py-4 px-2 w-11/12 text-center'>RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]" >
        <Random />
        <Tag/>
      </div>
  </div>);
}
