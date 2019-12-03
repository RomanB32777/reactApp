export function createControl(config, validation) {
  return {
    ...config, // развернем объект
    validation,
    valid: !validation, // изначально невалидно
    touched: false,
    value: ''
  }
}

export function validate(value, validation = null) { // validation - набор правил валидации

}
