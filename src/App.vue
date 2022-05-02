<template>
  <Swiper v-if="this.$store.state.preloader" />
  <!-- Navigation -->
  <nav
    style="background: orange"
    class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"
  >
    <div class="container">
      <!-- Text Logo - Use this if you don't have a graphic logo -->
      <!-- <a class="navbar-brand logo-text page-scroll" href="index.html">yetu</a> -->

      <!-- Image Logo -->
      <a class="navbar-brand logo-image" href="index.html">YETU</a>

      <!-- Mobile Menu Toggle Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-awesome fas fa-bars"></span>
        <span class="navbar-toggler-awesome fas fa-times"></span>
      </button>
      <!-- end of mobile menu toggle button -->

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#header"
              >HOME <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#features">FEATURES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#details">DETAILS</a>
          </li>

          <!-- Dropdown Menu -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle page-scroll"
              href="#video"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >VIDEO</a
            >
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/article-details"
                ><span class="item-text">ARTICLE DETAILS</span></router-link
              >
              <div class="dropdown-items-divide-hr"></div>
              <router-link class="dropdown-item" to="/terms"
                ><span class="item-text">TERMS CONDITIONS</span></router-link
              >
              <div class="dropdown-items-divide-hr"></div>
              <router-link class="dropdown-item" to="/privecy"
                ><span class="item-text">PRIVACY POLICY</span></router-link
              >
            </div>
          </li>
          <!-- end of dropdown menu -->

          <li class="nav-item">
            <a class="nav-link page-scroll" href="#pricing">PRICING</a>
          </li>
        </ul>
        <span class="nav-item">
          <router-link class="btn-outline-sm" to="/log-in">LOG IN</router-link>
        </span>
      </div>
    </div>
    <!-- end of container -->
  </nav>
  <router-view />
  <!-- end of navbar -->
  <!-- end of navigation -->
  <div class="header" id="header">
    <Nav />
  </div>

  <Home />

  <div id="features" class="tabs">
    <Function />
  </div>

  <div id="details" class="basic-1">
    <Details />
  </div>

  <div id="pricing">
    <Pricing />
  </div>
  <!-- <section class="hero is-white is-fullheight-with-navbar block">
      <Nav />
 <router-view/>
      <Home class="home" />

      <AboutView class="about" />

    <Function />

    <Pricing />

    <Testimoney />

    <Contact />

    <Footer />
    </section>
  -->

  <Footer />

   <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-lg-square back-to-top pt-2"><i class="bi bi-arrow-up text-white"></i></a>
</template>


<script>
import Nav from "@/components/redirect/Nav.vue";
import Home from "../src/views/Home.vue";
import AboutView from "../src/views/AboutView.vue";
import Function from "../src/views/Function.vue";
import Testimoney from "@/components/Testimoney.vue";
import Contact from "../src/views/Contact.vue";
import Details from "../src/views/dir/Details.vue";
import Pricing from "../src/views/dir/Pricing.vue";
import Footer from "@/components/redirect/Footer.vue";
import Swiper from "@/components/redirect/Swiper.vue";
export default {
  name: "App",
  components: {
    Nav,
    Home,
    AboutView,
    Function,
    Pricing,
    Testimoney,
    Contact,
    Footer,
    Details,
    Swiper,
  },
};
</script>
<style lang="scss" scoped>
.navbar-custom {
  background-color: orange;
  box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
  font: 700 0.875rem/0.875rem "Open Sans", sans-serif;
  transition: all 0.2s;

  .container {
    max-width: 87.5rem;
  }

  .navbar-brand {
    .logo-image {
      img {
        width: 4.4375rem;
        height: 1.75rem;
      }
    }

    .logo-text {
      font: 700 2rem/1.5rem "Open Sans", sans-serif;
      color: #fff;
      text-decoration: none;
    }
  }

  .navbar-nav {
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .nav-item {
    .nav-link {
      padding: 0.625rem 0.75rem 0.625rem 0.75rem;
      color: #f7f5f5;
      opacity: 0.8;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .btn-outline-sm {
      margin-top: 0.25rem;
      margin-bottom: 1.375rem;
      margin-left: 0.5rem;
      border: 0.125rem solid #fff;
      color: #fff;

      &:hover {
        background-color: #fff;
        color: orange;
      }
    }

    .nav-link {
      &:hover,
      .active {
        color: #fff;
        opacity: 1;
      }
    }
  }
  .dropdown {
    &:hover > .dropdown-menu {
      display: block; /* this makes the dropdown menu stay open while hovering it */
      min-width: auto;
      animation: fadeDropdown 0.2s; /* required for the fade animation */
    }
  }

  .dropdown-toggle {
    &:focus {
      /* removes dropdown outline on focus */
      outline: 0;
    }
  }

  .dropdown-menu {
    margin-top: 0;
    border: none;
    border-radius: 0.25rem;
    background-color: orange;
  }

  .dropdown-item {
    color: #f7f5f5;
    opacity: 0.8;
    font: 700 0.875rem/0.875rem "Open Sans", sans-serif;
    text-decoration: none;

    &:hover {
      background-color: orange;
      color: #fff;
      opacity: 1;
    }
  }
  .dropdown-items-divide-hr {
    width: 100%;
    height: 1px;
    margin: 0.75rem auto 0.725rem auto;
    border: none;
    background-color: #c4d8dc;
    opacity: 0.2;
  }

  .navbar-toggler {
  padding: 0;
  border: none;
  color: #fff;
  font-size: 2rem;
}
}

@keyframes fadeDropdown {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.navbar-custom


.navbar-custom
  button[aria-expanded="false"]
  .navbar-toggler-awesome.fas.fa-bars {
  display: inline-block;
}

.navbar-custom
  button[aria-expanded="true"]
  .navbar-toggler-awesome.fas.fa-bars {
  display: none;
}

.navbar-custom
  button[aria-expanded="true"]
  .navbar-toggler-awesome.fas.fa-times {
  display: inline-block;
  margin-right: 0.125rem;
}

/*     16. Back To Top Button     */
/**********************************/
a.back-to-top {
	position: fixed;
	z-index: 999;
	right: 0.75rem;
	bottom: 0.75rem;
	display: none;
	width: 2.625rem;
	height: 2.625rem;
	border-radius: 1.875rem;
	background: orange url("./assets/images/up-arrow.png") no-repeat center 47%;
	background-size: 1.125rem 1.125rem;
	text-indent: -9999px;
}

a:hover.back-to-top {
	background-color: orange; 
}
</style>
