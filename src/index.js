

import countryHbs from './template/country.hbs';
import countriesHbs from './template/countrys.hbs';

import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './js/fetchCountries.js';


const debounce = require('lodash.debounce');

const div = document.querySelector('div');
const input = document.querySelector('input');
let names = null;


input.addEventListener('input', debounce((e) => {
    names = e.target.value;
    fetchCountries(names)
        .then(condition);  
  }, 500));


function condition(value) {
    if (value.length >= 2 && value.length <= 10) {
        fetchCountries(names).then(addCountriesMarcup);
    } else if (value.length === 1) {
        fetchCountries(names).then(addCountryMarcup);
    } else if (value.length > 10) {
        fetchCountries(names).then(addNotificationWindow);
    }
}

function addCountryMarcup(value) {
    div.innerHTML = '';
    const countryMarcup = countryHbs(value);
    div.insertAdjacentHTML('beforeend', countryMarcup);
}

function addCountriesMarcup(value) {
    div.innerHTML = '';
    const countriesMarcup = countriesHbs(value);
    div.insertAdjacentHTML('beforeend', countriesMarcup);
}

function addNotificationWindow() {
    div.innerHTML = '';
    defaultModules.set(PNotifyMobile, {});
        alert({
            text: 'Many countrys'
    });
}