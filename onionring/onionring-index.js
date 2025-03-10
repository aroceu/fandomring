// onionring.js is made up of four files - onionring-widget.js, onionring-index.js (this one!), onionring-variables.js, and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (è’œ) house, last updated 2020-11-24

// === ONIONRING-INDEX ===
//this file builds the list of sites in the ring for displaying on your index page

var tag = document.getElementById('index');
regex = /^https:\/\/|\/$/g; //strips the https:// and trailing slash off the urls for aesthetic purposes

list = "";
for (i = 0; i < websitesWithNames.length; i++) {
  var website = websitesWithNames[i];
  if (typeof website === 'object' && website.name && website.url) {
    list += `<li><a href='${website.url}'>${website.name}</a></li>`;
  } else { 
    list += `<li><a href='${sites[i]}'>${sites[i].replace(regex, "")}</a></li>`;
  }
}

tag.insertAdjacentHTML('afterbegin', `
<ul>
${list}
</ul>
`);
