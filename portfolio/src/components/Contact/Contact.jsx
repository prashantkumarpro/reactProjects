import React from 'react'

const Contact = () => {
  return (
<>
{/* <!-- contact page start from here  --> */}
    <form id="contact" class="form-container">
        <div class="my-img">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""/>
        </div>
        <div class="form-box">
            <h2>Contact me</h2>
            <label for="name"><input type="text" id="name" placeholder="your name"/></label>
            <label for="name"><input type="email" placeholder=" your email" required/></label>
            <label for="name"><input type="phone" placeholder=" your phone" required/></label>
            <div class="btn-gurup">
                <button type="submit" class="btn">Send Message</button>
            </div>
        </div>

    </form>
</>
  )
}

export default Contact