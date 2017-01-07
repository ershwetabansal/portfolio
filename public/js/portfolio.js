/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Vue.component('portfolio-header', {
	    props: [],
	    template: '\n<div class="navbar navbar-fixed" id="header">\n      <div class="navbar-inner">\n        <ul class="nav nav-pills">\n          <li class="pull-left">\n              <a href="#app">\n                <h1 style="margin-top: 0;" class="text-left">\n                    <span>Shweta Bansal</span>\n                    <span class="job-title">Full stack developer</span>\n                </h1>\n              </a>\n\n          </li>\n          <li id="about-tab">\n            <a href="#about-me">About</a>\n          </li>\n          <li id="skills-tab">\n              <a href="#skills">Skills</a>\n          </li>\n          <li id="portfolio-tab">\n              <a href="#portfolio">Portfolio</a>\n          </li>\n          <li id="contact-tab">\n              <a href="#contact-me">Contact</a>\n          </li>\n          <li id="resume-tab">\n              <a href="/resume.html">Resume</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n'
	});

	Vue.component('portfolio-footer', {
	    template: '\n<div class="row">\n    <div class="col-sm-4">\n        <p class=" clearfix" style="margin-top: 14px;">\n        <img src="/images/shweta_profile.jpg" alt="" width="70" class="profile pull-left">\n        Full stack developer with wide experience in front end and back end technologies. I am looking forward to developing and exercising years of knowledge on challenging projects and applications.\n        </p>\n    </div>\n    <div class="col-sm-4">\n        <ul class="list-unstyled list-footer-items">\n        <li>\n            <a href="https://twitter.com/shweta_bansal" target="_blank">\n            <i class="fa fa-twitter"></i>\n            </a>\n            <small>Follow me</small>\n        </li>\n        <li>\n            <a href="https://github.com/ershwetabansal" target="_blank">\n                <i class="fa fa-github"></i>\n            </a>\n            <small>View on GitHub</small>\n        </li>\n        <li>\n            <a href="https://www.linkedin.com/in/shweta-bansal-26a91216" target="_blank">\n                <i class="fa fa-linkedin"></i>\n            </a>\n            View my Linkedin profile\n        </li>\n        <li>\n            <a href="mailto:ershwetabansal@gmail.com">\n             <i class="fa fa-envelope-o"></i>\n            </a>\n            E-mail me\n        </li>\n        </ul>\n    </div>\n    <div class="col-sm-4">\n        <ul class="list-unstyled list-footer-items">\n        <li>\n            <a href="#about-me">About</a>\n            <div>\n                <small>Learn about me</small>\n            </div>\n        </li>\n        <li>\n            <a href="#skills">Skills</a>\n            <div>\n                <small>Learn about my skills and capabilities</small>\n            </div>\n        </li>\n        <li>\n            <a href="#portfolio">Portfolio</a>\n            <div>\n                <small>View my work</small>\n            </div>\n        </li>\n        <li>\n            <a href="/resume.html">Resume</a>\n            <div>\n                <small>Download my resume</small>\n            </div>\n        </li>\n        </ul>\n    </div>\n</div>\n'
	});

	var app = new Vue({
	    el: '#app'
	});

/***/ }
/******/ ]);