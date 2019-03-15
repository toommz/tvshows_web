import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import TheShowSearch from "@/components/TheShowSearch.vue";

describe("TheShowSearch.vue", () => {
  it("renders a form", () => {
    const wrapper = shallowMount(TheShowSearch, {
      mocks: {
        $store: {
          state: { isLoading: false, searchTerm: "", searchResults: [] }
        }
      }
    });

    expect(wrapper.contains("form")).to.eq(true);
  });
});
