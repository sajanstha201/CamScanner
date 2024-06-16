import React from 'react';
import { saveAs } from 'file-saver';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { showAlert } from '../components/AlertLoader';
export const ContactUs = () => {
  const submitContactUsForm=(event)=>{
    event.preventDefault();
    clearErrors();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;
    let isValid = true;
    if (isValid) {
        alert('Message sent successfully!');
        // Form is valid, you can now send the data to the server or handle it as required
    }
};
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.classList.add('hidden');
    });
}
  return (
<div className="bg-100 flex lg:flex-row flex-col  items-center justify-center lg:gap-40  md:gap-2 overflow-hidden">
    <div className="bg-white flex  flex-col  rounded-lg  ">
        <h2 className="text-7xl font-bold mb-4 tracking-wide">Contact</h2>
        <p className="pt-4 tracking-normal text-xl font-semibold">
            Contact us to report a problem, <br></br> 
            clarify any doubts about us, <br></br>
            or  just find out more.
            </p>
        </div>
        <div className=" border-grey border rounded-lg p-8  mt-16 shadow" id="box">
            <form id="contactForm" className="space-y-4 flex flex-col " onSubmit={submitContactUsForm}>
                <div>
                    <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 border-gray-950" placeholder="Your Name" required ></input>
                    <p id="nameError" className="error hidden">Please enter your name.</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                        <div>
                            <input type="email" id="email" name="email" className="mt-1 block w-48 border border-gray-300 rounded-md shadow-sm p-2 border-gray-950" placeholder="Your Email" required ></input>
                            <p id="emailError" className="error hidden">Please enter a valid email address.</p>
                        </div>
                        <div>
                            <select id="subject" name="subject" className="mt-1 block w-48 border border-gray-300 rounded-md shadow-sm p-2 border-gray-950 " required>
                                    <option value="">Choose a subject</option>
                                    <option value="report">Report a problem</option>
                                    <option value="clarify">Clarify a doubt</option>
                                    <option value="findout">Find out more</option>
                            </select>
                            <p id="subjectError" className="error hidden">Please choose a subject.</p>
                        </div>
                </div>
                <div>
                    <textarea id="message" name="message" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 border-gray-950" rows="10" placeholder="Write a message" required></textarea>
                    <p id="messageError" className="error hidden">Please write a message.</p>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="terms" name="terms" className="mr-2" required></input>
                    <label htmlFor="terms" className="text-sm">I accept <a href="#" className="text-blue-500 underline">Terms and Conditions</a> and <a href="#" className="text-blue-500 underline">Legal & Privacy</a></label>
                    <p id="termsError" className="error hidden">You must accept the terms.</p>
                </div>
                <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:shadow-red-500/50">Send message</button>
            </form>
        </div>
    </div>
  );
};

