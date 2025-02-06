import {Metadata} from "next";

export const metadata: Metadata = {
title: "AboutLayayout metadata",
description: 'about layout description'
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