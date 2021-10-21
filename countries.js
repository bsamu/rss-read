function loadCountry() {
    fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(showCountry);
}

function loadImage() {
    fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(insertImage);
}

function loadAltSp() {
    fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(insertAltSp);
}

function loadBorders() {
    fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(showBorders);
}

function loadArea() {
    fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(showArea);
}

// function loadTranslations() {
//     fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(showTranslations);
// }

function loadTranslations2() {
    fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(showTranslations2);
}

function loadWhich() {
    fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(showWhich);
}

// function loadTrans() {
    // fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(showTrans);
// }

// function loadNoTr() {
//     fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(showNoTr);
// }

function showCountry(country) {
    console.log(country);
    const name = country[0].name.official;
    document.getElementById("name").textContent = name;
}

function insertImage(country) {
    const imge = country[0].flags.png;
    console.log(imge);
    document.getElementById("imge").innerHTML = `<img width="100" src="${imge}" alt="Flag of Peru"></img>`
}

function insertAltSp(country) {
    const AltSp = country[0].altSpellings[2];
    console.log(AltSp);
    document.getElementById("AltSp").textContent = `(${AltSp})`;
}

function showBorders(country) {
    const bordersLength = country[0].borders.length;
    let bordersByName = country[0].borders;
    console.log(bordersLength);
    console.log(bordersByName);
    for (let i = 0; i < bordersLength; i++) {
        let li = document.createElement("li");
        let border = document.createTextNode(bordersByName[i]);
        li.appendChild(border);
        document.getElementById("bordersOf").appendChild(li);
    }
}

// function showTrans(country) {
//     let transObj = country[0].translations;
//     console.log(transObj);
//     let keyses = transObj.prototype.toString();
//     console.log(keyses);
//     let transLength = Object.getOwnPropertyNames(transObj).length;
//     console.log(transLength);
//     let transKeys = Object.keys(transObj);
//     console.log(transKeys);
//     let transValues = Object.values(transObj);
//     console.log(transValues);
//     // let translation = Object.values(country[0].translations.official);
//     // console.log(bordersLength);
//     // console.log(bordersByName);
//     // for (let i = 0; i < transLength; i++) {
//     //     let li = document.createElement("li");
//     //     let transCountry = document.createTextNode(bordersByName[i]);
//     //     li.appendChild(transCountry);
//     //     document.getElementById("translate").appendChild(li);
//     // }
// }

function showArea(country) {
    const area = country[0].area;
    document.getElementById("area").textContent = `${area} 	\u33A2`;
}

// var translationsNames = 0;

// function showNoTr(country) {
//     translationsNames = Object.getOwnPropertyNames(country[0].translations);
//     console.log(translationsNames);
// }

// console.log(translationsNames);

// function showTranslations(country) {
//     const translationsNames = Object.getOwnPropertyNames(country[0].translations);
//     const translationsLength = translationsNames.length;
//     let translation = country[0].translations.official;
//     console.log(translationsNames);
//     console.log(translationsLength);
//     console.log(translation);
//     for (let i = 0; i < translationsLength; i++) {
//         let li = document.createElement("li");
//         let translate = document.createTextNode(translation[i]);
//         li.appendChild(translate);
//         document.getElementById("translate").appendChild(li);
//     }
// }

function showTranslations2(country) {
    const translation = country[0].translations.zho.official;
    console.log(translation);
    document.getElementById("translation").textContent = translation;
}

function showWhich(country) {
    const which = Object.keys(country[0].translations)[21];
    console.log(which);
    document.getElementById("which").textContent = `Translation in ${which}:`;
}

function loadUltra() {
    
    fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(showUltra);
}

window.addEventListener("load", loadCountry);
window.addEventListener("load", loadImage);
window.addEventListener("load", loadAltSp);
window.addEventListener("load", loadBorders);
window.addEventListener("load", loadArea);
// window.addEventListener("load", loadTranslations);
window.addEventListener("load", loadTranslations2);
window.addEventListener("load", loadWhich);
// window.addEventListener("load", loadNoTr);
// window.addEventListener("load", loadUltra);
// window.addEventListener("load", loadTrans);