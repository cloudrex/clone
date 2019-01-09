import {UniqueId} from "../types/types";

export default abstract class Utils {
    public static generateId(): UniqueId {
        // TODO: Use real generator
        return Math.random().toString().replace(".", "");
    }
}