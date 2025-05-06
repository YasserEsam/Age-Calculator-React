// store/useStore.ts
import { create } from "zustand";

const useStore = create((set, get) => ({
  // Initial state
  birthDay: 0,
  birthMonth: 0,
  birthYear: 0,

  ageDay: 0,
  ageMonth: 0,
  ageYear: 0,

  setDay: (birthDay) => set({ birthDay }),
  setMonth: (birthMonth) => set({ birthMonth }),
  setYear: (birthYear) => set({ birthYear }),

  calculateAge: () => {
    const { birthDay, birthMonth, birthYear } = get();

    // Validate if any input is empty or 0
    if (!birthDay || !birthMonth || !birthYear) {
      set({ ageYear: 0, ageMonth: 0, ageDay: 0 });
      return;
    }

    // Validate date ranges
    if (
      birthDay < 1 ||
      birthDay > 31 ||
      birthMonth < 1 ||
      birthMonth > 12 ||
      birthYear < 1900 ||
      birthYear > new Date().getFullYear()
    ) {
      set({ ageYear: 0, ageMonth: 0, ageDay: 0 });
      return;
    }

    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    // Check if birth date is valid
    if (
      birthDate > today ||
      isNaN(birthDate.getTime()) ||
      birthDate.getDate() !== birthDay
    ) {
      set({ ageYear: 0, ageMonth: 0, ageDay: 0 });
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // If the birth date's day is greater than today's day,
    // we need to borrow from the months
    if (days < 0) {
      months--;
      // Get the last day of the previous month
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // If the birth date's month is greater than today's month,
    // we need to borrow from the years
    if (months < 0) {
      years--;
      months += 12;
    }

    // Validate the final result
    if (years < 0 || months < 0 || days < 0) {
      set({ ageYear: 0, ageMonth: 0, ageDay: 0 });
      return;
    }

    set({ ageYear: years, ageMonth: months, ageDay: days });
  },
}));

export default useStore;
