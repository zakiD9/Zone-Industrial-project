import NotFoundImg from "../assets/0d0428c295485ec1d2d688830db1db30d617a9eb (1).png";
import { Button } from "@mui/material";
import {  HomeFilled } from "@mui/icons-material";

export default function NotFound(){
    return(
        <>
        <div className="flex flex-col gap-4 mx-64 items-center my-10 justify-center">
            <img src={NotFoundImg} alt="Error 404" className="w-[500px] h-[415px] grayscale"/>
            <span className="font-semibold text-xl">Page not found !</span>
            <span className="text-sm text-center text-gray-600">Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.</span>
            <div className="flex items-center">
                <Button href="/" variant="contained" startIcon={<HomeFilled />}>Go to Home Page</Button>
            </div>
        </div>
        </>
);
}