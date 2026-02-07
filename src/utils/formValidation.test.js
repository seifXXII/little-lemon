import {
  validateDate,
  validateTime,
  validateGuests,
  validateBookingForm,
} from "./formValidation";

describe("Form Validation", () => {
  describe("validateDate", () => {
    test("returns error when date is empty", () => {
      const result = validateDate("");
      expect(result.isValid).toBe(false);
      expect(result.error).toBe("Please select a date");
    });

    test("returns error for past date", () => {
      const pastDate = "2020-01-01";
      const result = validateDate(pastDate);
      expect(result.isValid).toBe(false);
      expect(result.error).toBe("Please select a date in the future");
    });

    test("returns valid for today", () => {
      const today = new Date().toISOString().split("T")[0];
      const result = validateDate(today);
      expect(result.isValid).toBe(true);
      expect(result.error).toBeNull();
    });

    test("returns valid for future date", () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);
      const result = validateDate(futureDate.toISOString().split("T")[0]);
      expect(result.isValid).toBe(true);
      expect(result.error).toBeNull();
    });
  });

  describe("validateTime", () => {
    test("returns error when time is empty", () => {
      const result = validateTime("");
      expect(result.isValid).toBe(false);
      expect(result.error).toBe("Please select a time");
    });

    test("returns valid for selected time", () => {
      const result = validateTime("19:00");
      expect(result.isValid).toBe(true);
      expect(result.error).toBeNull();
    });
  });

  describe("validateGuests", () => {
    test("returns error for zero adults", () => {
      const result = validateGuests(0, 2);
      expect(result.isValid).toBe(false);
      expect(result.error).toBe("At least 1 adult is required");
    });

    test("returns error for more than 10 total guests", () => {
      const result = validateGuests(6, 5);
      expect(result.isValid).toBe(false);
      expect(result.error).toBe("Maximum 10 guests allowed per reservation");
    });

    test("returns valid for 1 adult, 0 children", () => {
      const result = validateGuests(1, 0);
      expect(result.isValid).toBe(true);
      expect(result.error).toBeNull();
    });

    test("returns valid for 4 adults, 2 children", () => {
      const result = validateGuests(4, 2);
      expect(result.isValid).toBe(true);
      expect(result.error).toBeNull();
    });
  });

  describe("validateBookingForm", () => {
    const futureDate = (() => {
      const date = new Date();
      date.setDate(date.getDate() + 1);
      return date.toISOString().split("T")[0];
    })();

    test("returns errors for empty form", () => {
      const formData = {
        date: "",
        time: "",
        adults: 1,
        children: 0,
      };
      const result = validateBookingForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.date).toBeDefined();
      expect(result.errors.time).toBeDefined();
    });

    test("returns valid for complete form", () => {
      const formData = {
        date: futureDate,
        time: "19:00",
        adults: 2,
        children: 1,
      };
      const result = validateBookingForm(formData);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors).length).toBe(0);
    });

    test("returns only date error when time is valid", () => {
      const formData = {
        date: "",
        time: "19:00",
        adults: 2,
        children: 0,
      };
      const result = validateBookingForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.date).toBeDefined();
      expect(result.errors.time).toBeUndefined();
    });
  });
});
