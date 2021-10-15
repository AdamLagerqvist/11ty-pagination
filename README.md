# 11ty-pagination

Lektionsexempel

## Instruktioner för att klona

Öppna terminalen

```bash
cd
cd code
git clone https://github.com/jensnti/11ty-pagination
cd 11ty-pagination
npm install
code .
npm start
```

## Uppgift

Klona detta repo, läs igenom instruktionerna. Kolla på koden.

Planera din egen sida. Skapa ett nytt repo och börja arbeta.
Skriv ned dina tankar och planer i repots README.md.
För att skapa nytt repo och komma igång.

```bash
cd
cd code
mkdir nyttrepo
cd nyttrepo
npm init -y
npm install @11ty/eleventy
```

Skapa ett galleri av någonting:

- Spelkaraktärer
- Spel
- Filmer
- Musik
- Fåglar
- Katter
- Ondingar
- Maträtter
- Godis

Utöka:

- JSON informationen, fler fält
- Skapa en OM sida, kan vara bra för ©
- Bilder
- Styling

Ja och det kan bli en webbshop 🎊

Självklart använder ni er av allt vi har övat på.

- Komponenter
- SASS
- API (kanske)

[Lista med gratis API](https://github.com/public-apis/public-apis)


# Skapa ett date filter

```bash
npm install moment
```

.eleventy.js
```js
const moment = require('moment');
    eleventyConfig.addFilter('dateFilter', (value) => {
        moment.locale('sv'); 
        return moment(value).format('LLLL');
    })
```

Nu kan vi använda datumfiltret i våra sidor.

```njk
---
date: 2021-01-01
---

{{ date | dateFilter }}
```

# Posts

Vi kan skapa en mapp i src för innehåll.
📁 src/posts

I denna mapp kan vi sedan skapa en posts.json för gemensam front matter och sedan varje fil för innehållet.
Där kan vi även koppla vilken layout alla filerna ska använda.

```json
{
    "layout": "post.njk",
    "tags": ["posts", "possums"]
}
```

Vi skapar posts.njk i _includes.
```njk
---
layout: base.njk
permalink: "posts/{{ title | slug }}/index.html"
---

{{ content | safe }}
```

Sedan kan vi skapa innehåll i posts mappen.

```
---
title: Fluffy is back
date: 2021-01-01
---

# He's back

Fluffy is back, although he kinda smells.
```
