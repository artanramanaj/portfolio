import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage,
  defineRule,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `This field ${context.field} is required.`,
          min: `This field ${context.field} is too short.`,
          max: `This field ${context.field} is too long.`,
          alpha_spaces: `This field ${context.field} can only contain letters and spaces.`,
          email: `This field ${context.field} is not a valid email.`,
        };
        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is invalid`;
        return message;
      },
    });
  },
};
