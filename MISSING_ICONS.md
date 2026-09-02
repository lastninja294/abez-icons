# Icons to export from Figma

Only 1 non-brand icon left: `battery-2-3full` (Essential category). Not urgent — grab it whenever, same workflow as before (export the component as SVG, `pnpm ingest`, `pnpm build`).

## Excluded: brand/crypto logos (99)

Trademarked company and cryptocurrency logos from `company.zip`. Deliberately excluded from `@abez/icons` — public npm package, trademark risk, not in the spirit of a generic Lucide-style icon set. Not ingested.

`frame` and `triangle` from that same zip were generic shapes (not logos) and were kept. All 6 icons in `crypto.zip` (`bitcoin-card`, `bitcoin-convert`, `bitcoin-refresh`, `buy-crypto`, `card-coin`, `trade`) were generic crypto/finance concepts, not coin logos, so they were kept too.

Full excluded list (source filenames from `company.zip`, before slugifying):

```
aave-(aave), android, ankr-(ankr), apple, augur-(rep), autonio-(niox),
avalanche-(avax), be, binance-coin-(bnb), binance-usd-(busd), bitcoin-(btc),
blogger, bootsrap, cardano-(ada), celo-(celo), celsius-(cel)-, chainlink-(link),
civic-(cvc), dai-(dai), dash-(dash), decred-(dcr), dent-(dent), dribbble,
dropbox, educare-(ekt), emercoin-(emc), enjin-coin-(enj), eos-(eos),
ethereum-(eth), ethereum-classic-(etc), facebook, figma, figma-1, frame-1,
framer, ftx-token-(ftt), google, google-1, google-play, harmony-(one),
hedera-hashgraph-(hbar), hex-(hex), html-3, html-5, huobi-token-(ht),
icon-(icx), illustrator, iost-(iost), java-script, js, kyber-network-(knc),
litecoin(ltc), maker-(mkr), messenger, monero-(xmr), nebulas-(nas), nem-(xem),
nexo-(nexo), ocean-protocol-(ocean), okb-(okb), ontology-(ont), paypal,
photoshop, polkadot-(dot), polygon-(matic), polyswarm-(nct), python,
quant-(qnt), siacoin-(sc), slack, snapchat, solana-(sol), spotify,
stacks-(stx), stellar-(xlm), tenx-(pay), tether-(usdt), the-graph-(grt),
theta-(theta), thorchain-(rune), trello, trontron-(trx), twitch, ui8,
usd-coin-(usdc), velas-(vlx), vibe-(vibe), vuesax, wanchain-(wan),
wanchain-(wan)-1, whatsapp, windows, wing-(wing), xd, xiaomi, xrp-(xrp),
youtube, zel-(zel), zoom
```
