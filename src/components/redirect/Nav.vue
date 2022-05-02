<template>
  <!-- Header -->
  <header id="header" class="header">
    <div class="header-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-xl-5">
            <div class="text-container">
              <h1>Managing your projects has never been easier</h1>
              <p class="p-large">
                The Revolutionary App That Helps To Control Your Own Products
              </p>
              <a class="btn-solid-lg page-scroll" href="sign-up.html"
                >SIGN UP</a
              >
            </div>
            <!-- end of text-container -->
          </div>
          <!-- end of col -->
          <div class="col-lg-6 col-xl-7">
            <div class="image-container">
              <div class="img-wrapper">
                <img
                  class="img-fluid"
                  src="../../assets/images/header-software-app.png"
                  alt="alternative"
                />
              </div>
              <!-- end of img-wrapper -->
            </div>
            <!-- end of image-container -->
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row -->
      </div>
      <!-- end of container -->
    </div>
    <!-- end of header-content -->
  </header>
  <!-- end of header -->
</template>

<style lang="scss" scoped>
.header {
  background: url("../../assets/orange.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center, 50%, 50%;

  .header-content {
    padding-top: 8rem;
    padding-bottom: 4rem;
    text-align: center;
  }
  .text-container {
    margin-bottom: 3rem;
  }
  h1 {
    margin-bottom: 1rem;
    color: #fff;
    font-size: 2.5rem;
    line-height: 3rem;
  }
  .p-large {
    margin-bottom: 2rem;
    color: #f3f7fd;
  }
  .btn-solid-lg {
    margin-right: 0.5rem;
    margin-bottom: 1.125rem;
    margin-left: 0.5rem;
    border-color: #f3f7fd;
    background-color: orange;
    color: #fff;

    &:hover {
      background: transparent;
      color: #f3f7fd;
    }
  }
  .btn-solid-lg,.btn-outline-lg{
      border-color: #f3f7fd;
      color: #f3f7fd;
  }
  .btn-outline-lg{
      &:hover{
          background-color: #f3f7fd;
          color: orange; 
      }
  }
}
.header-frame {
  margin-top: -1px; /* To remove white margin in FF */
  width: 100%;
  height: 2.25rem;
}
</style>