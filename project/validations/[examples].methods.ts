const notNull = (value: any): boolean | Array<boolean> => {
    return value == null ? false : true;
}

export { notNull };
