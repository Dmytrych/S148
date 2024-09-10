import {locale} from "@/locale/ua";
import {matchIsValidTel} from "mui-tel-input";
export interface CartValidationErrors {
    name?: string;
    middleName?: string;
    surname?: string;
    email?: string;
    phoneNumber?: string;
    description?: string;
}

export interface IOrderFormFields {
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
    description: string;
}

export function useOrderForm() {
  const getInitialValues = (): IOrderFormFields => {
    return {
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
      description: '',
    };
  }

  const validateForm = (values: IOrderFormFields): CartValidationErrors => {
    const errors: CartValidationErrors = {};
    if (!values.name || values.name.length > 20) {
      errors.name = locale.field_should_not_be_empty_or_bigger_than_20;
    }
    if (!values.surname || values.surname.length > 20) {
      errors.surname = locale.field_should_not_be_empty_or_bigger_than_20;
    }
    const emailRegexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!values.email || !emailRegexp.test(values.email)) {
      errors.email = locale.field_should_contain_valid_email;
    }
    if (!values.phoneNumber || !matchIsValidTel(values.phoneNumber, { onlyCountries: ["UA"] })) {
      errors.phoneNumber = locale.field_should_contain_valid_phone_number;
    }
    if (!values.description || values.description.length > 100) {
      errors.description = locale.field_should_not_be_empty_or_bigger_than_100;
    }
    return errors;
  };

  return { validateForm, getInitialValues }
}