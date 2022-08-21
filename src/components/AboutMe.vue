<template>
  <section id="about">
    <h2>About Me</h2>
    <div id="about-content">
      <div id="about-text">
        <p>
          After graduating college in 2016, I worked various odd jobs while
          freelancing as a sound engineer and audio programmer on the side. My
          experience designing audio systems for games motivated me to go back
          to school and learn what it takes to be a full stack developer. During
          school I built several web applications, including:
        </p>
        <br />
        <ul>
          <li>
            A photo reviewing application that allows photographers to create
            clients and upload photos for their clients' approval.
          </li>
          <li>
            A desktop and mobile music player built using web technologies and
            Electron.
          </li>
          <li>
            A mental health check in application that allows you to keep tabs on
            your mental health.
          </li>
        </ul>
        <br />
        <p>
          The skills picked up on my development journey have enabled me to take
          on some pretty exciting projects, and I'm looking forward to diving
          into my next!
        </p>
        <br />
        <a
          id="resume-link"
          href="/static/media/DMisasiResume_Web.bf28c080d218ed8afd3a.pdf"
          download=""
        >
          <h4>Download my Resume</h4>
        </a>
      </div>
      <img
        id="about-img"
        src="../assets/12059273_1040202482657600_5685703_o.jpg"
        alt="profile of Dominic Misasi dimly lit, looking off dramatically"
      />
    </div>
  </section>
</template>

<style scoped>
section h2 {
  text-align: center;
  font-size: 42px;
  font-weight: 200;
  color: white;
}
#about-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 2.5;
}

#about-text {
  flex: 1 50%;
  color: white;
  padding: 5%;
  display: block;
  font-size: 16px;
}

#about-text a {
  color: #00aeef;
  text-decoration: none;
  font-size: 20px;
}

#about-img {
  flex: 1 50%;
  max-width: 50%;
  box-shadow: -1px 1px 25px black;
}
</style>
