# blockchain-pratybos3

Decentralizuotos aplikacijos aprašas:

1. Decentralizuota aplikacija leidžia atlikti nesudėtingą transakciją tarp pirkėjo, pardavėjo ir kurjerio
2. Naudota solidty programavimo kalba sukurti smart kontraktui
3. Aplikacijos Front-end dalis padaryta naudojant react
4. Lokaliam blockchain naudotas truffle

Decentralizuotos aplikacijos funkcijų aprašas:

Pardavėjas:

1. Add product - leidžia pardavėjui prideda produktą prie galimų produktų įvedant naujo produkto pavadinimą
2. Set price - leidžia pardavėjui nustatyti nurodyto užsakymo kainą įvedant užsakymo indeksą ir kainą
3. Set Courier - leidžia pardavėjui nustatyti kurjerį
4. Set delivery price - leidžia pardavėjui nustatyti pristatymo kainą įvedant užsakymo indeksą ir kainą

Pirkėjas:

1. Create order - leidžia pirkėjui sudaryti naują užsakymą įvedant produkto indeksą ir jo kiekį
2. Buy - leidžia pirkėjui atlikti ethereum pervedimą, kad sumokėtų už viso užsakymo kainą

Kurjeris:

1. Confirm delivery -  kurjeriui leidžia patvirtinti, kad pristatymas įvykdytas sėkmingai. Perveda už užsakymą mokestį pardavėjui ir kurjeriui

Bendros:
1. Buyer address - parodo pirkėjo adresą
2. Seller address - parodo pardavėjo adresą
3. Products - parodo galimus produktus
4. Order info - parodo kurjerio adresą, produktą, kiekį, kainą, siuntimo kainą, kiek sumokėta, sumokejimo statusas, pristatymo statusas
