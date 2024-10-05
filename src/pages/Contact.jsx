export const  Contact =()=>{

    const handleFormSubmit = (formData) =>{
        const formInputData = Object.fromEntries(formData.entries());
        // console.log(formInputData);
    }
    return(
        <section className="section-content">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container"> 
            <form action={handleFormSubmit}>
                <input 
                type="text"
                className="form-control"
                name="username"
                 required
                 autoComplete="false"
                 placeholder="enter you name"
                 />
                  <input 
                type="email"
                className="form-control"
                name="email"
                 required
                 autoComplete="false"
                 placeholder="enter you email"
                 />
                <textarea 
                name="message"  className="form-control"
                 placeholder="enter your message"
                 autoComplete="false"
                 rows="10">
                </textarea> 

                <button type="submit" value="send">Send</button>
            </form>
            </div>
        </section>
        
    )
}