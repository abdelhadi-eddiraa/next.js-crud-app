import Navbar from '@/components/Navbar'
import TopicList from '@/components/TopicList'

export default function Home() {
  return (
    <div className='max-w-2xl mx-auto'>
         <Navbar/>
        <TopicList/>
    </div>
  )
}
