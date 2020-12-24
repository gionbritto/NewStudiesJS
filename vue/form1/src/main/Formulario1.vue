<template>
  <div>
    <div class="form-group">
      <label for="email">Your Email Adress: </label>
      <input type="text" class="form-control" id="email" v-model="userData.email" />
    </div>
    <div class="form-group">
      <label for="password">Enter Password: </label>
      <input type="password" class="form-control" id="password" v-model.lazy="userData.password" />
    </div>
    <div class="form-group">
      <label for="satisfaction">Satisfaction (10 for best, i for worst): </label>
      <input
        type="number"
        min="1"
        max="10"
        id="satisfaction"
        class="form-control"
        v-model.number="userData.satisfaction"
      />
    </div>
    <div class="form-group">
      <label for="message">Your Message: </label>
      <textarea id="message" rows="5" class="form-control" v-model="message"></textarea>
    </div>
    <div class="form-group">
      <label for="sendspecial">
        <input type="checkbox" id="sendspecial" value="sendSpecial" v-model="checkboxOptions" />I Want Today's Special
      </label>
      <br />
      <label for="sendcoupons">
        <input type="checkbox" id="sendcoupons" value="sendCoupons" v-model="checkboxOptions" />Send me Monthly Coupons
      </label>
    </div>
    <div class="form-group">
      <label for="male">
        <input type="radio" id="male" value="Male" v-model="radioBoxOption" /> Male
      </label>
      <label for="female">
        <input type="radio" id="female" value="Female" v-model="radioBoxOption" /> Female
      </label>
    </div>
    <div class="form-group">
      <label for="priority">Priority: </label>
      <select id="priority" class="form-control" v-model="selectedPriority">
        <option v-for="priority in priorities" v-bind:key="priority">{{ priority }}</option>
      </select>
    </div>
    <div class="form-group">
      <custom-switch v-model="customSwitch"></custom-switch>
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
    </div>
    <hr />
    <div class="card" v-if="isSubmitted">
      <div class="card-body">
        <h4 class="card-title">Form Data</h4>
        <p>
          Mail:
          <b>{{ userData.email }}</b>
        </p>
        <p>
          Password:
          <b>{{ userData.password }}</b>
        </p>
        <p>
          Satisfaction:
          <b>{{ userData.satisfaction }}</b>
        </p>
        <p style="white-space: pre">
          Message:
          <b>{{ message }}</b>
        </p>
        <p>Checkbox Options 
            <ul><li v-for="item in checkboxOptions" v-bind:key="item"><b>{{item}}</b></li></ul>
        </p>
        <p>Gender: <b>{{radioBoxOption}}</b></p>
        <p>Priority: <b>{{selectedPriority}}</b></p>
        <p>Switched: <b>{{customSwitch}}</b></p>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "../components/Switch";

export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        satisfaction: ""
      },
      message: "Describe your review...",
      checkboxOptions: [],
      radioBoxOption: "Male",
      selectedPriority: "High",
      priorities: ["High", "Medium", "Low"],
      customSwitch: true,
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    customSwitch: Switch
  }
};
</script>

<style>
</style>