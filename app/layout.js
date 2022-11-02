import React from "react";
import "./globals.css"

export default function RootLayout({children}) {
    return(
        <html>
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}