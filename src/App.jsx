import { useState } from 'react'
import './App.css'
import CollegeSection from './components/CollegeSection'
import EmployerSection from './components/EmployerSection'
import HeaderHero from './components/HeaderHero'
import InteractionDialog from './components/InteractionDialog'
import OpportunitySection from './components/OpportunitySection'
import ResumeMatchingSection from './components/ResumeMatchingSection'
import SiteFooter from './components/SiteFooter'

function App() {
  const [dialogType, setDialogType] = useState(null)
  const openDialog = (type) => setDialogType(type)
  const closeDialog = () => setDialogType(null)

  return (
    <main className="home">
      <HeaderHero openDialog={openDialog} />
      <OpportunitySection />
      <ResumeMatchingSection />
      <CollegeSection onListCollege={() => openDialog('college')} />
      <EmployerSection onPostJob={() => openDialog('employer')} />
      <SiteFooter
        onListCollege={() => openDialog('college')}
        onPostJob={() => openDialog('employer')}
      />
      {dialogType && <InteractionDialog type={dialogType} onClose={closeDialog} />}
    </main>
  )
}

export default App
