import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider(props) {
  // useState() / useEffect()
  const [language, setLanguage] = useState("es-CL")

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}

// otro custom hook
export function useLanguage() {
  const language = useContext(LanguageContext)
  return language
}

// <LanguageProvider>
//      <Header />
// </LanguageProvider>
