import { FullScrollPage } from './components/full-scroll-page'
import { Page1 } from './components/page1'
import { Page2 } from './components/page2'
import { Page3 } from './components/page3'
import { Page4 } from './components/page4'

const Home = () => {
  return (
    <FullScrollPage>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </FullScrollPage>
  )
}

export default Home
