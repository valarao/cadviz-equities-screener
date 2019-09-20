<h1 align="center">🍁 Cadviz Equities Screener 🍁</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

## About Cadviz

Cadviz is a web app to screen Canadian equities for investment analysis.

We use Python for JSON file parsing and React for the user interface. Every so often, our MongoDB database updates valuation and performance metrics on 791 TSX-listed Canadian equities for further screening.

### Our Story

Having used Finviz for narrowing down companies to look at for personal investments, Miguel didn’t like the fact that he was limited to looking at US companies with the free version -- especially since he prefers to look at Canadian companies. He also wasn’t willing to pay $300/year for a premium Finviz account.

<b>The Solution:</b> We built our own version that allowed us to screen for Canadian companies.

### How It Works

Our MongoDB server stores and updates all relevant valuation/performance metrics every 30 minutes, which our front-facing React client queries so you can filter for the company criteria that you care about!

![preview](https://user-images.githubusercontent.com/25139382/65360521-163a6500-dbb5-11e9-81a2-d0478d14ca62.PNG)

## Install and Run

To use Cadviz, clone the repo and run these commands in both the (1) ```server``` and (2) ```client``` subdirectories:

```sh
npm install
```

```sh
npm run start
```

## What We Learned

This project was a great experience for both Miguel and Alan. Neither of us had any prior experience using React and MongoDB, so we're glad we got to develop proficiencies with these two technologies. <b> Our top 3 Takeaways:</b>

1. <b>Component-based design is elegant.</b> Having built websites in vanilla HTML/CSS, we dreaded having to copy-pasting of whole sections. After learning about React's component system, this project gave us a reason to dabble in it. Our thoughts? We were mind-blown. In fact, when we had to build entry boxes for listing in the display table, we didn't have dreaded duplicate code. 

2. <b>Querying changing data sources necessitates good error-handling.</b> As a basis for companies to screen, we went to the TSX listing page and downloaded the tickers from the sectors we could find. When we first ran the script to get the data, it worked perfectly. When we tried to run it again, it broke. Why? Turns out a few companies disappeared from our dataset after being delisted from the TSX due to bankruptcy or acquisition. We learned we needed to safeguard against this and added the necessary error handlers.

3. <b>Multi-language integration works.</b> When first designing the project structure, we wanted to have access to the data-scraping tools that Python had and the powerful front-end frameworks that were built on JavaScript. At first, we thought that we had to pick one or the other. When we figured out how to get them work in tandem, we felt a lot of our constraints had been lifted. 


## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/valarao/"><img src="https://avatars1.githubusercontent.com/u/25139382?s=460&v=4/" width="75px;" alt="Miguel Valarao"/><br /><sub><b>Miguel Valarao</b></sub></a><br /><a href="https://github.com/valarao/cadviz-equities-screener/graphs/contributors" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/AlanJohnM/"><img src="https://avatars2.githubusercontent.com/u/41241403?s=400&v=4/" width="75px;" alt="Alan Milligan"/><br /><sub><b>Alan Milligan</b></sub></a><br /><a href="https://github.com/valarao/cadviz-equities-screener/graphs/contributors" title="Code">💻</a></td>
  </tr>
</table>

## Show your support

Give a ⭐️ if this project helped you!
