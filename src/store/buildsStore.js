import { defineStore } from "pinia";

export const useBuildsStore = defineStore("builds", {
  state: () => ({
    builds: [{ id: 0, count: 1 }],
  }),

  actions: {
    addElement(id) {
      let has = this.builds.some((el) => el.id === id);

      this.builds = has ? this.builds : [...this.builds, { id, count: 1 }];
    },

    deleteElement(id) {
      this.builds = this.builds.filter((el) => el.id !== id);
    },

    incrementCount(id) {
      this.builds.find((build) => build.id === id).count++;
    },

    decrementCount(id) {
      const item = this.builds.find((build) => build.id === id);
      item.count === 0 ? this.deleteElement(id) : item.count--;
    },
  },
});
