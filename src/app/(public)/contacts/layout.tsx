import {Metadata} from "next";

export const metadata: Metadata = {
    title: "ContactsLayout metadata"
}

type Props = { children: React.ReactNode }
const ContactsLayout = ({children}: Props) => {
    return (
        <div>
            <hr/>
            about layout content
            {children}
            <hr/>
        </div>
    );
};

export default ContactsLayout;