import {TfiTrash} from 'react-icons/tfi'

const CardItem = () => {
  return (
    <div className='flex justify-between items-center bg-amber-50 p-10 mb-5 text-xl rounded-lg'>
      <img className='w-16 h-16 rounded-full' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="item" />
      <div>Lorem, ipsum dolor.</div>
      <div className='flex items-center '>
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
      <div>$437.22</div>
      <button>
        <TfiTrash />
      </button>
    </div>
  )
}

export default CardItem