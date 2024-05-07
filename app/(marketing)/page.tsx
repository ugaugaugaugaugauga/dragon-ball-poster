import { FullScrollPage } from '../../components/full-scroll-page'
import { LandingPage } from './_components/landing-page'
import { CharacterInfoPage } from './_components/character-info-page'
import { Page3 } from './_components/page3'
import { Page4 } from './_components/page4'

const Home = () => {
  return (
    <FullScrollPage>
      <LandingPage />
      <CharacterInfoPage />
      <Page3 />
      <Page4 />
    </FullScrollPage>
  )
}

export default Home
