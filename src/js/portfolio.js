Vue.component('portfolio-header', {
    props: [],
    template: `
<div class="navbar navbar-fixed" id="header">
      <div class="navbar-inner">
        <ul class="nav nav-pills">
          <li class="pull-left">
              <a href="#app">
                <h1 style="margin-top: 0;" class="text-left">
                    <span>Shweta Bansal</span>
                    <span class="job-title">Full stack developer</span>
                </h1>
              </a>

          </li>
          <li id="about-tab">
            <a href="#about-me">About</a>
          </li>
          <li id="skills-tab">
              <a href="#skills">Skills</a>
          </li>
          <li id="portfolio-tab">
              <a href="#portfolio">Portfolio</a>
          </li>
          <li id="contact-tab">
              <a href="#contact-me">Contact</a>
          </li>
          <li id="resume-tab">
              <a href="/resume.html">Resume</a>
          </li>
        </ul>
      </div>
    </div>
`
});

Vue.component('portfolio-footer', {
    template:`
<div class="row">
    <div class="col-sm-4">
        <p class=" clearfix" style="margin-top: 14px;">
        <img src="/images/shweta_profile.jpg" alt="" width="70" class="profile pull-left">
        Full stack developer with wide experience in front end and back end technologies. I am looking forward to developing and exercising years of knowledge on challenging projects and applications.
        </p>
    </div>
    <div class="col-sm-4">
        <ul class="list-unstyled list-footer-items">
        <li>
            <a href="https://twitter.com/shweta_bansal" target="_blank">
            <i class="fa fa-twitter"></i>
            </a>
            <small>Follow me</small>
        </li>
        <li>
            <a href="https://github.com/ershwetabansal" target="_blank">
                <i class="fa fa-github"></i>
            </a>
            <small>View on GitHub</small>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/shweta-bansal-26a91216" target="_blank">
                <i class="fa fa-linkedin"></i>
            </a>
            View my Linkedin profile
        </li>
        <li>
            <a href="mailto:ershwetabansal@gmail.com">
             <i class="fa fa-envelope-o"></i>
            </a>
            E-mail me
        </li>
        </ul>
    </div>
    <div class="col-sm-4">
        <ul class="list-unstyled list-footer-items">
        <li>
            <a href="#about-me">About</a>
            <div>
                <small>Learn about me</small>
            </div>
        </li>
        <li>
            <a href="#skills">Skills</a>
            <div>
                <small>Learn about my skills and capabilities</small>
            </div>
        </li>
        <li>
            <a href="#portfolio">Portfolio</a>
            <div>
                <small>View my work</small>
            </div>
        </li>
        <li>
            <a href="/resume.html">Resume</a>
            <div>
                <small>Download my resume</small>
            </div>
        </li>
        </ul>
    </div>
</div>
`
});

const app = new Vue({
    el: '#app'
});