import Vue from "vue";
import { Component, Prop, Mixins } from "vue-property-decorator";

@Component
export default class AnimalMixin<TAnimal> extends Vue {
  protected animals: TAnimal[] = [];
}
