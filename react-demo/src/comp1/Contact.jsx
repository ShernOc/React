

function Contact() {
    return (
        <>
            <div>
                <h2>Contact Me</h2>
                <form action="" id="forminput">
                    <h3 className="lableinput">Leave a Message</h3>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" />
                    <br />
                    <label htmlFor="email">Email Address</label>
                    <input type="text" required />
                    <br />
                    <label htmlFor="message">Leave a Comment</label>
                    <textarea name="message" id="message"></textarea>
                    <br />
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}

export default Contact;