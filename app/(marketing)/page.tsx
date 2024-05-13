import { FullScrollPage } from '../../components/full-scroll-page'
import { CharacterInfoPage } from './pages/character-info/_page'
import { LandingPage } from './pages/landing/_page'

const Home = () => {
  return (
    <FullScrollPage>
      <LandingPage />
      <CharacterInfoPage />
    </FullScrollPage>
  )
}

export default Home
