import { IPost } from "@/lib/interfaces";

export const formMandatory = (obj: IPost) => {
    const nullProperties = Object.entries(obj)
      .filter(([key, value]) => value === null || value === '')
      .map(([key, _]) => key);

      return nullProperties
}