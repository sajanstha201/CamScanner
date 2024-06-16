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
<div class="bg-100 flex lg:flex-row flex-col  items-center justify-center lg:gap-40  md:gap-2 overflow-hidden">
    <div class="bg-white flex  flex-col  rounded-lg  ">
        <h2 class="text-7xl font-bold mb-4 tracking-wide">Contact</h2>
        <p class="pt-4 tracking-normal text-xl font-semibold">Contact us to report a problem, <br></br> clarify any doubts about us, <br></br>or  just find out more.</p>
        </div>
        <div class=" border-grey border rounded-lg p-8  mt-16 shadow" id="box">
                    <form id="contactForm" class="space-y-4 flex flex-col " onSubmit='submitContactUsForm '>
                        <div>
                            <label for="name" class="block text-sm font-medium mt-8">Your Name</label>
                            <input type="text" id="name" name="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 border-gray-950" placeholder="Your Name" required ></input>
                            <p id="nameError" class="error hidden">Please enter your name.</p>
                        </div>
                        <div class="flex justify-center items-center gap-2">
                                <div>

                                    <label for="email" class="block text-sm font-medium">Your Email</label>
                                    <input type="email" id="email" name="email" class="mt-1 block w-48 border border-gray-300 rounded-md shadow-sm p-2 border-gray-950" placeholder="Your Email" required ></input>
                                    <p id="emailError" class="error hidden">Please enter a valid email address.</p>
                                </div>
                                
                                <div>

                                    <label for="subject" class="block text-sm font-medium">Subject</label>
                                    <select id="subject" name="subject" class="mt-1 block w-48 border border-gray-300 rounded-md shadow-sm p-2 border-gray-950 " required>
                                            <option value="">Choose a subject</option>
                                            <option value="report">Report a problem</option>
                                            <option value="clarify">Clarify a doubt</option>
                                            <option value="findout">Find out more</option>
                                    </select>
                                    <p id="subjectError" class="error hidden">Please choose a subject.</p>
                                </div>
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium">Message</label>
                            <textarea id="message" name="message" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 border-gray-950" rows="4" placeholder="Write a message" required></textarea>
                            <p id="messageError" class="error hidden">Please write a message.</p>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="terms" name="terms" class="mr-2" required></input>
                            <label for="terms" class="text-sm">I accept <a href="#" class="text-blue-500 underline">Terms and Conditions</a> and <a href="#" class="text-blue-500 underline">Legal & Privacy</a></label>
                            <p id="termsError" class="error hidden">You must accept the terms.</p>
                        </div>
                        <button type='submit' class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:shadow-red-500/50">Send message</button>
                    </form>
        </div>
    </div>
  );
};

