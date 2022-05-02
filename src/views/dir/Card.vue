<template>
  <!-- Description -->
  <div class="cards-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="above-heading">DESCRIPTION</div>
          <h2 class="h2-heading">
            Marketing Automation Will Bring More Qualified Leads
          </h2>
        </div>
        <!-- end of col -->
      </div>
      <!-- end of row -->
      <div class="row">
        <div class="col-lg-12">
          <!-- Card -->
          <div class="card">
            <div class="card-image">
              <img
                class="img-fluid"
                src="../../assets/images/description-1.png"
                alt="alternative"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">Lists Builder</h4>
              <p>
                It's very easy to start creating email lists for your marketing
                actions. Just create your Yetu account
              </p>
            </div>
          </div>
          <!-- end of card -->

          <!-- Card -->
          <div class="card">
            <div class="card-image">
              <img
                class="img-fluid"
                src="../../assets/images/description-2.png"
                alt="alternative"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">Campaign Tracker</h4>
              <p>
                Campaigns is a feature we've developed since the beginning
                because it's at the core of Yetu's functionalities
              </p>
            </div>
          </div>
          <!-- end of card -->

          <!-- Card -->
          <div class="card">
            <div class="card-image">
              <img
                class="img-fluid"
                src="../../assets/images/description-3.png"
                alt="alternative"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">Analytics Tool</h4>
              <p>
                Yetu collects customer data in order to help you analyse
                different situations and take required action
              </p>
            </div>
          </div>
          <!-- end of card -->
        </div>
        <!-- end of col -->
      </div>
      <!-- end of row -->
    </div>
    <!-- end of container -->
  </div>
  <!-- end of cards-1 -->
  <!-- end of description -->
</template>

<script>
export default {
  name: "Card",
};
</script>

<style lang="scss" scoped>
.cards-1 {
  padding-top: 3.25rem;
  padding-bottom: 3rem;
  text-align: center;

  .h2-heading {
    margin-bottom: 3.5rem;
  }

  .card {
    max-width: 21rem;
    margin-right: auto;
    margin-bottom: 3.5rem;
    margin-left: auto;
    padding: 0;
    border: none;
  }
  .card-image {
    max-width: 16rem;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-left: auto;
  }
  .card-title {
    margin-bottom: 0.5rem;
  }
  .card-body {
    padding: 0;
  }
}
</style>