import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector'

let ns = ['home']

var loadResources = function(i18nModules){
    for(let i18nModule of i18nModules){
        let languages = require(`./${i18nModule}/${i18nModule}`).default;
        for(let lang in languages){
            let resource = require(`./${i18nModule}/${i18nModule}_${lang}`).default;
            if(!resources[lang]){
                resources[lang] = {};
            }
    
            resources[lang][i18nModule] = {
                ...resource
            }
        }
    }
};

i18n.use(languageDetector)
    .use(initReactI18next)
  .init({
      fallbackLng :'en',
      debug : true,
      keySeparator : false,
      resources : loadResources(ns),
      defaultNS : 'common',
      ns : i18nModules,
      detection : {
          caches : []
      },
      interpolation : {
          escapeValue : false
      }
  })




export default i18n;