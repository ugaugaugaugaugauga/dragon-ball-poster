import { FullScrollPage } from '../../components/full-scroll-page'
import { CharacterInfoPage } from './_pages/character-info/_page'
import { LandingPage } from './_pages/landing/_page'
import { StoryPage } from './_pages/story/_page'

const Home = () => {
  return (
    <FullScrollPage>
      <LandingPage />
      <CharacterInfoPage />
      <StoryPage />
    </FullScrollPage>
  )
}

export default Home
