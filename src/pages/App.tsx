import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
// import { Credentials, StringTranslations } from '@crowdin/crowdin-api-client'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import { RedirectDuplicateTokenIds, RedirectOldAddLiquidityPathStructure } from './AddLiquidity/redirects'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import AddLiquidity from './AddLiquidity'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import Swap from './Swap'
import { RedirectPathToSwapOnly } from './Swap/redirects'
import { EN, allLanguages } from '../constants/localisation/languageCodes'
import { LanguageContext } from '../hooks/LanguageContext'
import { TranslationsContext } from '../hooks/TranslationsContext'

import Menu from '../components/Menu'
import useGetDocumentTitlePrice from '../hooks/useGetDocumentTitlePrice'


function getZoom() {
  const stdWidth = 1200
  const stdHeight = 1000

  const width = window.innerWidth
  const height = window.innerHeight

  return Math.min(height / stdHeight, width / stdWidth)
}

function autoSize() {
  if (!window || !window.document) return
  if (window.innerWidth >= 968) {
    const zoomFactor = getZoom()

    window.document.querySelector('html')!.style.setProperty('zoom', `${zoomFactor}`)

    const sliders = document.getElementsByClassName('slider')
    for (let i = 0; i < sliders.length; i++) {
      // @ts-ignore
      sliders[i].style.setProperty('zoom', 1 / zoomFactor)
    }
  } else {
    window.document.querySelector('html')!.style.setProperty('zoom', '1')
  }
}

autoSize()


const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 16px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.xs} {
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    min-height: 90vh;
  }
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [translations, setTranslations] = useState<Array<any>>([])
  // const apiKey = `${process.env.REACT_APP_CROWDIN_APIKEY}`
  // const projectId = parseInt(`${process.env.REACT_APP_CROWDIN_PROJECTID}`)
  // const fileId = 6

  // const credentials: Credentials = {
  //   token: apiKey,
  // }

  // const stringTranslationsApi = new StringTranslations(credentials)

  useEffect(() => {
    setInterval(autoSize, 300)

    window.addEventListener('resize', autoSize, true)

    document.addEventListener('dragover', (event) => {
      event.preventDefault()
      return false
    })

    document.addEventListener('drop', (event) => {
      event.preventDefault()
      return false
    })
  }, [])

  const getStoredLang = (storedLangCode: string) => {
    return allLanguages.filter((language) => {
      return language.code === storedLangCode
    })[0]
  }

  useEffect(() => {
    const storedLangCode = localStorage.getItem('pancakeSwapLanguage')
    if (storedLangCode) {
      const storedLang = getStoredLang(storedLangCode)
      setSelectedLanguage(storedLang)
    } else {
      setSelectedLanguage(EN)
    }
  }, [])

  // const fetchTranslationsForSelectedLanguage = async () => {
  //   stringTranslationsApi
  //     .listLanguageTranslations(projectId, selectedLanguage.code, undefined, fileId, 200)
  //     .then((translationApiResponse) => {
  //       if (translationApiResponse.data.length < 1) {
  //         setTranslations(['error'])
  //       } else {
  //         setTranslations(translationApiResponse.data)
  //       }
  //     })
  //     .then(() => setTranslatedLanguage(selectedLanguage))
  //     .catch((error) => {
  //       setTranslations(['error'])
  //       console.error(error)
  //     })
  // }

  useEffect(() => {
    // if (selectedLanguage) {
    //   fetchTranslationsForSelectedLanguage()
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage])

  useGetDocumentTitlePrice()

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper>
          <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage, translatedLanguage, setTranslatedLanguage }}
          >
            <TranslationsContext.Provider value={{ translations, setTranslations }}>
              <Menu>
                <BodyWrapper>
                  <Popups />
                  <Web3ReactManager>
                    <Switch>
                      <Route exact strict path="/swap" component={Swap} />
                      <Route exact strict path="/find" component={PoolFinder} />
                      <Route exact strict path="/pool" component={Pool} />
                      <Route exact path="/add" component={AddLiquidity} />
                      <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />

                      {/* Redirection: These old routes are still used in the code base */}
                      <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                      <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                      <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />

                      <Route component={RedirectPathToSwapOnly} />
                    </Switch>
                  </Web3ReactManager>
                  <Marginer />
                </BodyWrapper>
              </Menu>
            </TranslationsContext.Provider>
          </LanguageContext.Provider>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
