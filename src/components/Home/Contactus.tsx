import { Button, TextField } from "@mui/material";

export default function Contact() {
  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="flex flex-col">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <TextField variant="outlined" size="small"/>
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className="flex flex-col">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <TextField variant="outlined" size="small"/>
              </div>
            </div>

           <div className="p-2 w-full">
              <div className="flex flex-col">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <TextField
                  id="message"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="p-2 w-full justify-center flex">
              <Button size="large" variant="contained">Submit</Button>
            </div>

            {/* Contact Info */}
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a href="mailto:example@email.com" className="text-indigo-500">
                example@email.com
              </a>
              <p className="leading-normal my-5">
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
