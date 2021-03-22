<template>
  <div>
    <header>
      <nav>
        <a href="./">Madreyas</a>
        <ul>
          <li><a href="#privacy&security">Privacy Policy</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a @click="logIn">Login</a></li>
        </ul>
      </nav>
      <h1>
        Simple web app to mange your <b><mark>Dairy Farm.</mark></b>
      </h1>
      <h2>We just want to make your dairy <mark>more profitable.</mark></h2>
      <br />
      <a @click="logIn">
        <b>Login Now</b>
      </a>
    </header>

    <main>
      <hr />
      <section id="privacy&security">
        <div>
          <h2 style="text-align: center">Our Privacy Philosophy</h2>

          <blockquote>
            We take your privacy very seriously. We operate on a stict
            <b>need-to-know basis</b> policy.
          </blockquote>
        </div>
      </section>
      <br />
      <br />
      <section>
        <header id="features">
          <h2>
            We created the following features to help you to mange your dairy,
            Suggestions for new features are always requested.
          </h2>
        </header>
        <br />
        <aside>
          <h2>Track Heat Cycles of cows.</h2>
          <p>
            This gives us a clear idea for the milking & feeding of the cow.
            based on their pregnancy state. A single loss of proper heat costs
            around rupees 5400. Survival of your dairy depends on catching heat
            dates and proper drying of cows.
          </p>
        </aside>
        <aside>
          <h2>Track calves and genetics in farm.</h2>
          <p>
            We are creating a database for all the semen available for
            artificial insemination which helps you to know the productivity &
            lineage of the
            <a
              href="https://www.nddb.coop/services/animalbreeding/geneticimprovement/sireproofs"
            >
              donor bull</a
            >, Effective rate of succesfull insemination of the semen is
            collected anonymously.
          </p>
        </aside>
        <aside>
          <h2>Centralised Resource Planning<sup>WIP</sup>.</h2>
          <p>
            Comprehensive and pluggable resource planning systems to manage
            <a
              href="https://www.nddb.coop/services/animalnutrition/rationbalance"
              >animals, feeds</a
            >, equipments, machinery and others. which helps in your procurement
            planning & optimal utilization of resources.
          </p>
        </aside>
      </section>
      <section id="pricing">
        <hr />
        <header>
          <h2>
            This app is completely
            <a href="https://github.com/vvsubash/projectSaveechi"
              >Open Source
            </a>
            and is free to use until the foreseable future and all the basic
            features are free forever.
          </h2>
        </header>
      </section>
      <section id="faq">
        <header>
          <h2>
            We don't have any freaquently asked questions as of now. ask us
            questions we will update it along the way.
          </h2>
        </header>
        <form name="faq" method="POST" data-netlify="true" style="margin: auto">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label
              >Question Please: <textarea name="question"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </section>
    </main>
    <footer>
      <hr />
      <header>
        <p>
          Made with ❤️ by <a href="https://twitter.com/vvsubash">vvsubash</a>
        </p>
      </header>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    logIn() {
      this.$router.push({ path: 'app' })
    },
  },
  head() {
    return {
      title: 'Madreyas',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
      link: [{ rel: 'stylesheet', href: 'https://unpkg.com/mvp.css' }],
    }
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
</style>
