import {Metadata} from "next";

export const metadata: Metadata = {
title: "AboutLayayout metadata"
}

type Props = { children: React.ReactNode }
const AboutLayout = ({children}: Props) => {
    return (
        <div>
            <hr/>
            about layout content
            {children}
            <hr/>
        </div>
    );
};

export default AboutLayout;