    import React from "react";
    import './Contact.css';
    import Swal from 'sweetalert2';

    export default function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "e3eaf002-3c14-4f58-a61f-519e9534ec9c");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        });

        const data = await response.json();

        if (data.success) {
        Swal.fire({
            title: "Message sent!",
            text: "Your message has been successfully sent.",
            icon: "success",
            confirmButtonText: "OK",
        });
        event.target.reset(); // reset du formulaire
        } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.message || "Something went wrong!",
        });
        }
    };

    return (
        <section className="Contact">
        <form onSubmit={onSubmit}>
            <h2>Contact Us</h2>
            <div className="input-box">
            <label>Name</label>
            <input
                type="text"
                name="name"
                required
                className="field"
                placeholder="Enter your name"
            />
            </div>
            <div className="input-box">
            <label>Email</label>
            <input
                type="email"
                name="email"
                required
                className="field"
                placeholder="Enter your email"
            />
            </div>
            <div className="input-box">
            <label>Message</label>
            <textarea
                name="message"
                required
                className="field mess"
                placeholder="Enter your  message of suggestion"
            ></textarea>
            </div>
            <div className="input-box">
            <input type="submit" value="Send" className="btn" />
            </div>
        </form>
        </section>
    );
    }
