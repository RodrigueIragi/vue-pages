<template>
  <div class="container">
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field is-two-thirds">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Name" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field is-two-thirds">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input
              class="input is-success"
              type="email"
              placeholder="Email"
              value="alex@smith.com"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Subject" />
      </div>
    </div>

    <!-- <div class="field is-horizontal">
      <div class="field-label"></div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="tel" placeholder="Subject" />
            </p>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea
              class="textarea"
             
            ></textarea>
          </div>
        </div>
      </div>
    </div> -->

    <div class="field">
      <div class="control">
        <textarea
          name=""
          class="textarea"
          placeholder="Explain how we can help you"
          id=""
        ></textarea>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label">
        <!-- Left empty for spacing -->
      </div>
      <div class="field-body is-centered">
        <div class="field">
          <div class="control is-half">
            <button class="button is-danger is-rounded">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>