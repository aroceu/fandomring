// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (è’œ) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the edited onion.js ability to add Titles to the websites!
var websitesWithNames = [
{url: 'https://fandomr.ing', name: "The Fandom Webring"},
{url: 'https://amkitakk.com', name: "amki's treasure trove"},
{url: 'https://aroceu.com', name: "aroceu"},
{url: 'https://avawtsn.neocities.org/', name: "avawtsn's fangirl repository"},
{url: 'https://basophie.neocities.org/', name: "Basophie"},
{url: 'https://blight.neocities.org/', name: "Blight"},
{url: 'https://cloverso.me', name: "cloverso.me"},
{url: 'https://cookieface678.neocities.org/', name: "Cookie's Internet Corner"},
{url: 'https://cthrsis.nukawinter.art/', name: "CTHRSIS"},
{url: 'https://falldownmode.neocities.org/', name: "FALLDOWN MODE"},
{url: 'https://overmore.neocities.org', name: "Garden of eden"},
{url: 'https://www.gekidasa.net', name: "Gekidasa.net"},
{url: 'https://www.hellomei.dev/', name: "hello, mei!"},
{url: 'https://inkcaps.neocities.org/', name: "Inkcaps"},
{url: 'https://jayviknation.neocities.org/', name: "Jayvik Nation"},
{url: 'https://lawrencedane.com/', name: "The Lawrence Dane Fansite"},
{url: 'https://linkyblog.neocities.org/', name: "Linkyblog"},
{url: 'https://lockheartlove.neocities.org', name: "Lockheart Love"},
{url: 'https://lost-boy.org', name: "lost-boy.org"},
{url: 'https://lysianth.us', name: "Lysianthus"},
{url: 'https://mappapapa.neocities.org/', name: "MAPPAPAPA"},
{url: 'https://marinehaddock.gay/', name: "MarineHaddock"},
{url: 'https://mayonmnnaise.nekoweb.org', name: "mayonmnnaise"},
{url: 'https://hako-aiko.haliya.net/', name: "Miniature Garden"},
{url: 'https://rainydaydeer.neocities.org/', name: "Mo's Fortune Telling Tent"},
{url: 'https://muttthecowcat.neocities.org/', name: "muttthecowcat"},
{url: 'https://nightmarefish.neocities.org/', name: "nightmarefish"},
{url: 'https://petrapixel.neocities.org/', name: "petrapixel"},
{url: 'https://tre.praze.net', name: "praze"},
{url: 'https://qnnna.site', name: "QNNNA"},
{url: 'https://scumsuck.com/', name: "SCUMSUCK art"},
{url: 'https://smokoswebzone.gay/home', name: "Smoko's Webzone"},
{url: 'https://spettri.neocities.org/', name: "Spettri.org"},
{url: 'https://wheelersfanfic.neocities.org/', name: "wheelersfanfic"},
{url: 'https://yatagarasu.nekoweb.org/', name: "Yatagarasu"},
{url: 'https://yoylecake420.neocities.org/', name: "Yoylecake420's Epic Website"},
];

// The rest of onionring.js expects a sites array with only strings so this is used for that.
var sites = websitesWithNames.map(website => typeof website === 'object' ? website.url : website); 

//the name of the ring
var ringName = 'fandom';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'fandomring';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://fandomr.ing';

//should the widget include a random button?
var useRandom = true;
