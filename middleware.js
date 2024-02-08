import { NextResponse } from "next/server";
export default function middleware(req){

    const authToken = req.cookies.authToken;
    console.log(authToken,"authToken");
    let url = req.url;
    
    if (!authToken && url.includes('/signin')) {
        return NextResponse.redirect("/");
      }
    
      if (authToken && url === "/") {
        return NextResponse.redirect("/profile");
      }

}