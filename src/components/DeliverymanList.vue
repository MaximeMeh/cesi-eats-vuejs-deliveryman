<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Order List</h4>
      <tr v-for="deliverymandata in Deliveryman">
        <td>{{ deliverymandata.first_name }}</td>
        <br />
        <td>{{ deliverymandata.last_name }}</td>
        <br />
        <td>{{ deliverymandata.email }}</td>
      </tr>

      <!-- <ul class="list-group">
        <li class="list-group-item" v-for="deliveryman in deliverymen">
          {{ deliveryman.first_name }}
        </li>
      </ul> -->

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
            Remove All
        </button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "deliveryman",
  data() {
    return {
      Deliveryman: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/deliveryman")
      .then((response) => {
        console.log(response.data);
        this.Deliveryman = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
