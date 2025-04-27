function validateDate(date) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
    return regex.test(date);
}

// Примеры использования
console.log(validateDate("29.02.2020")); // true (високосный год)
console.log(validateDate("31.12.2023")); // true
console.log(validateDate("31.02.2023")); // false (не существующая дата 31 февраля)
console.log(validateDate("15.04.1899")); // false (не существующий год)
console.log(validateDate("01-01-2020")); // false (неправильный формат)
