const bool = {
  value: false,

  notificationMessage() {
    console.log("VALUE IS TRUE");
  },

  setValue(newValue) {
    this.value = newValue;
    if (newValue === true) {
      this.notifications();
    }
  },

  notifications() {
    if (this.value) {
      return this.notificationMessage();
    }
  },
};

bool.setValue(true);
