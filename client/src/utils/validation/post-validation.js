class Specification {
    constructor(fieldName, errorMessage, validateFn) {
        this.fieldName = fieldName;
        this.errorMessage = errorMessage;
        this.validateFn = validateFn;
    }

    isSatisfiedBy(formData) {
        return this.validateFn(formData[this.fieldName]);
    }
}

const specifications = [
    new Specification("price", "Az ár kötelező", value => !!value),
    new Specification("adType", "Válasszon egy hirdetéstípust", value => !!value),
    new Specification("propertyType", "Válassza ki az ingatlan típusát", value => !!value),
    new Specification("description", "Leírás nincs megadva", value => !!value),
    new Specification("settlement", "Település nincs megadva", value => !!value),
    new Specification("street", "Utca nincs megadva", value => !!value),
];

export const validateForm = (formData) => {
    for (const specification of specifications) {
        if (!specification.isSatisfiedBy(formData)) {
            return specification.errorMessage;
        }
    }

    return null;
};
