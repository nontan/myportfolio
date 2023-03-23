import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub,faDribbble,faTwitter,faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons'; // Import the 'key' icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(farEnvelope);
library.add(faKey);
library.add(faEnvelope);
library.add(faGithub,faDribbble,faTwitter,faInstagram);



Vue.component('font-awesome-icon', FontAwesomeIcon);
