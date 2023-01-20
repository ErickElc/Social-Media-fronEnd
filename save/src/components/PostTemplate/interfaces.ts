import { IPost } from "../../interface/Interface";

export interface IPostTemplate {
    postData: IPost[];
    deletePost: (id: String) => Promise<void>;
    toggleMode: (id: string) => void;
}
