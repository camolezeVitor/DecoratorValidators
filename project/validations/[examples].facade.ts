function notNull({constructor}: any, key: string) {
    console.log(constructor.name, key);
}

export { notNull as NotNull };

