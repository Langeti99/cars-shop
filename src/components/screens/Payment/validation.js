export const numberValidation = {
  required: "Обовязково до заповнення",
  validate: (value) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Поле не може буди з букв";
    }

    if (value.match(/[a-zA-Z]/)) {
      return "Поле не може буди з англійських букв";
    }

    if (!value.match(/^\d{1,15}$/)) {
      return "Можна ввести не більше 16 цифр";
    }
    return true;
  },
};

export const dateValidation = {
  required: "Обовязково до заповнення",
  validate: (value) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Поле не може буди з букв";
    }

    if (value.match(/[a-zA-Z]/)) {
      return "Поле не може буди з англійських букв";
    }

    if (!value.match(/^\d{1,4}$/)) {
      return "Можна ввести не більше 4 цифр";
    }
    return true;
  },
};

export const CVValidation = {
  required: "Обовязково до заповнення",
  validate: (value) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Поле не може буди з букв";
    }

    if (value.match(/[a-zA-Z]/)) {
      return "Поле не може буди з англійських букв";
    }

    if (!value.match(/^\d{1,3}$/)) {
      return "Можна ввести не більше 3 цифр";
    }
    return true;
  },
};
