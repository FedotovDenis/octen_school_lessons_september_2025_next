import {FC} from "react";

type Props = {
    param: {id: string };
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    console.log(newVar.params.id);
    return {
        title: "User page title" + id,
    }
}
const UsersPage:FC<Props> = async ({param}) => {
    return (
        <div>
            users page content
        </div>
    );
};

export default UsersPage;