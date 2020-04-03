module.exports = ({
    title = '',
    description = '',
    environment = '',
    contaminationType = '',
    level = '',
    value = 0.0,
    unit = '',
}) => {
    this.title = title;
    this.description = description;
    this.environment = environment;
    this.contaminationType = contaminationType;
    this.level = level;
    this.value = value;
    this.unit = unit;

    return this;
};
