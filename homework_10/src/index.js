'use strict';
import menu from '../src/menu.json';

import './styles.css';
import menuItemTemplate from './templates/menu_item.hbs';

const refs = {
  menuList: document.querySelector('.js-menu'),
  themeSwitch: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const mainMarkup = menu.map(item => menuItemTemplate(item)).join('');
refs.menuList.insertAdjacentHTML('beforeend', mainMarkup);

refs.themeSwitch.addEventListener('click', changeTheme);

const currentTheme = localStorage.getItem('theme');
refs.body.classList.add(currentTheme);

if (currentTheme === 'dark-theme') {
  refs.themeSwitch.setAttribute('checked', 'checked');
}

function changeTheme(event) {
  if (refs.body.classList.contains(Theme.LIGHT)) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
