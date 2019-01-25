type UnionKeys<T> = T extends any ? keyof T : never;
type StrictUnionHelper<T, TAll> = T extends any ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>> : never;
export type StrictUnion<T> = StrictUnionHelper<T, T>

// background:
// - https://stackoverflow.com/questions/52132696/typescript-require-one-parameter-or-the-other-but-not-neither/52140738?noredirect=1#comment95531806_52140738
//
// playground:
// - http://www.typescriptlang.org/play/#src=type%20UnionKeys%3CT%3E%20%3D%20T%20extends%20any%20%3F%20keyof%20T%20%3A%20never%3B%0Atype%20StrictUnionHelper%3CT%2C%20TAll%3E%20%3D%20T%20extends%20any%20%3F%20T%20%26%20Partial%3CRecord%3CExclude%3CUnionKeys%3CTAll%3E%2C%20keyof%20T%3E%2C%20never%3E%3E%20%3A%20never%3B%0Atype%20StrictUnion%3CT%3E%20%3D%20StrictUnionHelper%3CT%2C%20T%3E%0A%0Ainterface%20XYZ%20%7B%0A%20%20%20%20x%3A%20number%0A%20%20%20%20y%3A%20number%0A%20%20%20%20z%3A%20number%0A%7D%0A%0Ainterface%20LLA%20%7B%0A%20%20%20%20lon%3A%20number%0A%20%20%20%20lat%3A%20number%0A%20%20%20%20alt%3A%20number%0A%7D%0A%0Atype%20OneOrTheOther%20%3D%20StrictUnion%3CXYZ%20%7C%20LLA%3E%0A%0Adeclare%20function%20test(arg%3A%20OneOrTheOther)%0A%0Atest(%7B%20lat%3A%203%2C%20lon%3A%203%2C%20alt%3A%203%20%7D)%20%2F%2F%20good%0Atest(%7B%20x%3A%203%2C%20y%3A%203%2C%20z%3A%203%20%7D)%20%2F%2F%20good%0A%0Atest(%7B%20x%3A%203%2C%20y%3A%203%2C%20z%3A%203%2C%20lat%3A%204%20%7D)%20%2F%2F%20bad%0Atest(%7B%20lat%3A%203%2C%20lon%3A%203%2C%20alt%3A%203%2C%20z%3A%204%20%7D)%20%2F%2F%20bad%0Atest(%7B%20x%3A%203%2C%20y%3A%203%2C%20z%3A%203%2C%20lat%3A%203%2C%20lon%3A%203%2C%20alt%3A%203%20%7D)%20%2F%2F%20bad
