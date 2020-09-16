<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Cats available as of {{ getTimestamp() }}</h3>
    <table class="cats">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Available?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in animals" :key="a.id">
          <td>{{a.name}}</td>
          <td>{{a.age}}</td>
          <td>{{a.isAvailable ? 'Yes' : 'No'}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Vue } from "vue-property-decorator";
import Cat from "@/models/Cat";
import AnimalMixin from "@/mixins/AnimalMixin";
import UtilsMixin from "@/mixins/UtilsMixin";

@Component
export default class HelloWorld extends Mixins<AnimalMixin<Cat>>(
  AnimalMixin,
  UtilsMixin
) {
  @Prop() private msg!: string;

  public created(): void {
    // Add some cats.
    this.animals.push(new Cat(1, "Sylvester", 5, true));
    this.animals.push(new Cat(2, "Catty McCatface", 2, false));
    this.animals.push(new Cat(3, "Old Paw Paw", 12, true));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}

table {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  border-collapse: collapse;
}

table th,
table td {
  padding: 1rem 0.5rem;
  border: 1px solid black;
}
</style>
