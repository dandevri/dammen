# dammen

![Dammen GitHub Banner](/docs/gh-banner.jpg)

> 🔘 Dammen implementatie voor Bit Academy technische test

## Opdrachtomschrijving

_Maak een implementatie van het bordspel dammen. De bedoeling is dat je de regels van het dammen verwerkt in jouw implementatie._

Uiteindelijk een tablet variant geworden waar je 'tegenover' elkaar kunt spelen door op het bord te spelen. Beetje als [Clubhouse games][clubhouse] op de Nintendo Switch.

## ✨ Features

✅ De gebruiker moet kunnen aangeven welke steen hij waarnaartoe verplaatst.  
❌ Het is verplicht om te slaan wanneer dit mogelijk is.  
✅ Een steen kan niet naar achteren verplaatst worden.  
✅ Het systeem moet enige feedback kunnen geven over de staat van het spel.   
✅ Reset van het spel, speeltijd timer

## 🗾 Roadmap (to-do)
* Abstraheren van duplicaat elementen in componenten met props (bijv. speler card)
* Edge cases afvangen (abstraheren / dupliceren voor tweede speler)
* Functionaliteiten voor de 'dam' en meerdere keren slaan
* Fatsoenlijke CSS schrijven 

## ⚙️ Tech Stack

* [Astro][astro] met [PostCSS][postcss] voor CSS imports en scss achtige functionaliteiten
* Linters en configs (stylelint, eslint, editorconfig) met run scripts
* Dammen heeft wat mij **betreft een interface nodig**, daarom niet besloten om de output via de CLI te doen maar netjes als UI. De logica is dan niet complex genoeg **om het gebruik van een (SPA) framework te verantwoorden**. Vandaar gekozen voor plain 'ol JavaScript, eventuele wat complexere state management daar kan ik **de DOM** voor gebruiken.
* _Waarom gebruik je dan Astro?_ Puur vanwege het feit als ik toch besluit om iets meer interactieve componenten te gebruiken ik _partial hydration_ kan gebruiken. En modulariteit van componenten. En Astro stond nog op m'n lijstje om ooit een keer te gebruiken 🤷‍♀️
* Is dit het beste werk wat je ooit gemaakt hebt? _Nee_. Kwam je tijd tekort? _Ja_. Eet je een tosti met ketchup of curry? _Ketchup_

## Install

1. Installeer node (NPM krijg je er gratis bij of gebruik yarn) met de [installer][installer] of [NVM][]

```
node -v && npm -v
```

2. Git clone het project naar je lokale machine

```
git clone https://github.com/dandevri/dammen.git && cd dammen
```

3. Installeer de dependencies 
```
npm install
```

4. Run de [development (of build) commands][cmds]
```
npm run dev
```

## License

[MIT][license] © [Danny de Vries][author]

[clubhouse]: https://www.nintendo.com/games/detail/clubhouse-games-51-worldwide-classics-switch/
[license]: /license
[author]: https://www.dandevri.es
[installer]: https://nodejs.org/en/
[nvm]: https://github.com/nvm-sh/nvm
[astro]: https://astro.build/
[postcss]: https://postcss.org/
[cmds]: https://docs.astro.build/quick-start