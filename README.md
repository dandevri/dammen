# dammen
> 🔘 Dammen implementation for Bit Academy tech assessment

## Opdrachtomschrijving

_Maak een implementatie van het bordspel dammen. De bedoeling is dat je de regels van het dammen verwerkt in jouw implementatie._

## Requirements

1. De gebruiker moet kunnen aangeven welke steen hij waarnaartoe verplaatst.
2. Het is verplicht om te slaan wanneer dit mogelijk is.
3. Een steen kan niet naar achteren verplaatst worden.
4. Het systeem moet enige feedback kunnen geven over de staat
van het spel. Bijvoorbeeld door het bord als een simpel grid te tonen.

Geavanceerde features zoals de ‘Dam’ en meerdere keren achter elkaar kunnen slaan zijn optioneel.

## Onderbouwing Tech Stack

* Dammen heeft wat mij **betreft een interface nodig**, daarom niet besloten om de output via de CLI te doen maar netjes als UI.
* De logica is niet complex genoeg **om het gebruik van een (SPA) framework te verantwoorden**. Vandaar gekozen voor vanilla JavaScript, eventuele complexere state management daar kan ik **de DOM** voor gebruiken.
* _Waarom gebruik je dan Astro?_ Puur voor het feit als ik toch besluit om iets meer interactieve componenten te hebben ik _partial hydration_ kan gebruiken. En Astro stond nog op m'n lijstje om ooit een keer te gebruiken 🤷‍♀️
