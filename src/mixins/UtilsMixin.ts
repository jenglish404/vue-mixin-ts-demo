import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class UtilsMixin extends Vue {
  /** Get current date and time as yyyymmdd-hhmmss. */
  public getTimestamp(): string {
    const ts = new Date();
    const year = ts.getFullYear();
    const month = this.pad(ts.getMonth() + 1);
    const day = this.pad(ts.getDate());
    const hour = this.pad(ts.getHours());
    const min = this.pad(ts.getMinutes());
    const sec = this.pad(ts.getSeconds());
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
  }

  /**
   * Pad numeric date value.
   * @param val
   */
  private pad(val: number): string {
    return val < 10 ? `0${val}` : `${val}`;
  }
}
