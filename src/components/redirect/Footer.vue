<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="footer-col first">
            <h4>About YETUDaily</h4>
            <p class="p-small">
              We're passionate about designing and developing one of the best
              marketing apps in the market
            </p>
          </div>
        </div>
        <!-- end of col -->
        <div class="col-md-4">
          <div class="footer-col middle">
            <h4>Important Links</h4>
            <ul class="list-unstyled li-space-lg p-small">
              <li class="media">
                <i class="fas fa-square"></i>
                <div class="media-body">
                  Our business partners
                  <a class="white" href="#your-link">startupguide.com</a>
                </div>
              </li>
              <li class="media">
                <i class="fas fa-square"></i>
                <div class="media-body">
                  Read our
                  <a class="white" href="terms-conditions.html"
                    >Terms & Conditions</a
                  >,
                  <a class="white" href="privacy-policy.html">Privacy Policy</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- end of col -->
        <div class="col-md-4">
          <div class="footer-col last">
            <h4>Contact</h4>
            <ul class="list-unstyled li-space-lg p-small">
              <li class="media">
                <i class="fas fa-map-marker-alt"></i>
                <div class="media-body">
                  22 Innovative, San Francisco, CA 94043, US
                </div>
              </li>
              <li class="media">
                <i class="fas fa-envelope"></i>
                <div class="media-body">
                  <a class="white" href="mailto:contact@yetu.com"
                    >contact@yetu.com</a
                  >
                  <i class="fas fa-globe"></i
                  ><a class="white" href="#your-link">www.yetu.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- end of col -->
      </div>
      <!-- end of row -->
    </div>
    <!-- end of container -->
  </div>
  <!-- end of footer -->
  <!-- end of footer -->

  <!-- Copyright -->
  <div class="copyright">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p class="p-small">
            Copyright © 2020 <a href="#">Rodrigue@gmail.com</a>
          </p>
        </div>
        <!-- end of col -->
      </div>
      <!-- enf of row -->
    </div>
    <!-- end of container -->
  </div>
  <!-- end of copyright -->
  <!-- end of copyright -->

  <!-- section footer ends -->
</template>

<style lang="scss" scoped>
/*     14. Footer     */
/**********************/
.footer-frame {
  width: 100%;
  height: 1.5rem;

}

.footer {
  padding-top: 3rem;
  padding-bottom: 0.5rem;
   background: url("../../assets/botom.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center, 50%, 50%;
}

.footer .footer-col {
  margin-bottom: 2.25rem;
}

.footer h4 {
  margin-bottom: 0.625rem;
  color: #fff;
}

.footer .list-unstyled,
.footer p {
  color: #f3f7fd;
}

.footer .footer-col.middle .list-unstyled .fas {
  color: #fff;
  font-size: 0.5rem;
  line-height: 1.5rem;
}

.footer .footer-col.middle .list-unstyled .media-body {
  margin-left: 0.5rem;
}

.footer .footer-col.last .list-unstyled .fas {
  color: #fff;
  font-size: 0.875rem;
  line-height: 1.5rem;
}

.footer .footer-col.last .list-unstyled .media-body {
  margin-left: 0.625rem;
}

.footer .footer-col.last .list-unstyled .fas.fa-globe {
  margin-left: 1rem;
  margin-right: 0.625rem;
}

/*************************/
/*     15. Copyright     */
/*************************/
.copyright {
  padding-top: 1rem;
  padding-bottom: 0.375rem;
  background-color: rgb(174, 117, 13);
  text-align: center;
}

.copyright .p-small {
  padding-top: 1.375rem;
  border-top: 1px solid rgb(139, 95, 12);
  color: #f3f7fd;
}

.copyright a {
  color: #f3f7fd;
  text-decoration: none;
}
</style>