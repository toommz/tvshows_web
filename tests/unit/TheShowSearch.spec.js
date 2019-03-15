import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import TheShowSearch from "@/components/TheShowSearch.vue";

describe("TheShowSearch.vue", () => {
  it("renders a form", () => {
    const wrapper = shallowMount(TheShowSearch);
    expect(wrapper.contains("form")).to.eq(true);
  });
});
