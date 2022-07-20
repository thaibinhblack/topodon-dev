import { User } from "./user";
export declare type Acct = {
    username: String;
    host: String | null;
};
export declare function parse(acct: String): Acct;
export declare function toString(acct: Acct): String;
export { User };
//# sourceMappingURL=index.d.ts.map