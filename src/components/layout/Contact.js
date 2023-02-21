import React,{useState,useEffect,useRef} from 'react'
import Slider from '../Slider/Slider'
import emailjs from '@emailjs/browser';
import {useNavigate} from 'react-router-dom'
//import emailjs from 'emailjs.com';
import axios from 'axios';
import styles from '../layout/Contact.module.css'
export const Contact = () => {
  const navigate= useNavigate()
  const form=useRef();
  const [contact,setContact]=useState({
   
    fullname:"",
    email:"",
    
    contactNo:"",
    message:"",
    
    city:""

    
  })
  const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value});
  }
  // useEffect(()=>{
  //   setUser({...user,name:null,email:null});
  // },[])
  
const HandleSubmit=(e)=>{
  e.preventDefault()
  console.log("contac is submitted")
  
    
    //console.log(num)
    console.log("add is pressed")
    // console.log(user.email)
    // console.log(user.file.name)

    const formData = new FormData();
    
    formData.append('name', contact.fullname)
    
    formData.append('email', contact.email);
    formData.append('city', contact.city);
    formData.append('cell', contact.contactNo);
    formData.append('message', contact.message);
    // let url = "http://localhost/Server.php"
    let url = "http://localhost/ReactApps/food-web/AddContact.php"
    axios.post(url, formData, {
    })
      .then(res => {
        console.log(res.data);
      })
alert("contact save successfully")
    //window.location.reload(false);
    
   //navigate('/welcome',{state:{name:user.name1,email:user.email}});
   emailjs.sendForm('service_45un1qa', 'template_v1zll3j', form.current, 'dkkdslkjhin_wG7bh')
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  

}

  return (
    <div>
      <div className={styles.sliderContainer}>
        {/* <div className={styles.textContact}>
          <h1>
          contact us plz
          </h1>

        </div> */}
        {/* <div className={styles.headerText}>
          <h1 className={styles.h1}>About Us</h1>
          <p className={styles.aboutBriefing}>
            We are manufacturing and prodiding healthy and delicious foods at economical rates to our valuable
            customers. with in Pakistan. Since 1990. in about 9 cities. Our detail will be given
            later on.
          </p>
         
        </div> */}
        <Slider />
      </div>

      <div className={styles.contactNote}>
        <div className={styles.item}>
          <div className="card" style={{
            width: "18rem", height: "634px", textAlign: "left", border: "none",
            fontFamily: "sans-serif", fontStyle: "italic", marginTop: "100px"
          }}>

            <div className="card-body" style={{ backgroundColor: "#FBF7F4" }}>
              <h3 className="card-title">Get In Touch With Food Web.</h3>
              <p className="card-text">We area technology plateform as a service enabling business to
                setup e-commerce web and app system. We'd love to hear from you</p>

            </div>
          </div>
        </div>
        <div className={styles.item}>

          <img src="../images/contactBanner.svg" class="card-img-top" alt="..." />


        </div>
      </div>

      <div className={styles.row1}>
        <div className="row mt-5">
          <div class={`col-md-5  ${styles.col1}` } >
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src="../images/96701-Ceo.svg" class="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title"><h1>Talk to us
                </h1></h5>

                <p className="card-text">
                  <span style={{ fontSize: "20px", fontWeight: "bold", fontStyle: "-moz-initial" }}> Contact us directly,: </span>
                  we are happy to serve you
                  anytime.</p>
                  

              </div>
             
            </div> 
            <div className='row mt-5 ' >
                    <div className={`col-md-5 ${styles.col2}`} >
<h4>Lahore</h4>

<pre>
        <img src="../images/cellImg.svg " alt="ll"/>  +92 (42) 37581807
</pre>
                    </div>
                    <div className='col-md-5' >
<h4>Karachi</h4>

<pre>
<img src="../images/cellImg.svg " alt="ll"/>  +92 (21) 2366771
</pre>
                    </div>
                  </div>
                  <div className='row mt-5 ' >
                    <div className={`col-md-6 ${styles.col2}`} >
<h4 style={{textAlign:"left"}}>Follow Us</h4>
<pre style={{textAlign:"left"}}>
<img src="../images/facebookImg.svg " alt="ll"/> Food Web
</pre>
<pre style={{textAlign:"left"}}>

<img src="../images/twitter.svg " alt="ll"/>  @FoodWebpk
</pre>
<pre style={{textAlign:"left"}}>
<img src="../images/info.svg " alt="ll"/>  inof@foodweb.com
</pre>

                    </div>
                   
                  </div>
            </div>
          <div class={`col-md-5  ${styles.col1}` }>

           <div>
            <form onSubmit={HandleSubmit} ref={form}>
              <label >FullName</label>
              <input type="text" style={{width:"100%",height:"50px",backgroundColor:"#F5F8FA",borderRadius:"20px",border:"2px solid grey"}}
              value={contact.fullname} 
              id="fullname" placeholder='Please enter Your Name' required="true" 
              name="fullname" onChange={handleChange} 
              />
              <label >Email</label>
              <input type="email" style={{width:"100%",height:"50px",marginLeft:"0px",backgroundColor:"#F5F8FA",borderRadius:"20px",border:"2px solid grey"}}
              value={contact.email} 
              id="email" placeholder='Please enter email' required="true" 
              name="email" onChange={handleChange} 
              />
             
              <label >Contact No</label><br/>
              <select  id="city" style={{width:"20%",height:"50px",backgroundColor:"#F5F8FA",borderRadius:"20px",border:"2px solid grey"}}
              value={contact.city} 
               placeholder='Please seect city' required="true" 
              name="city" onChange={handleChange} 
              >
  <option value="Lahore">Lahore</option>
  <option value="Karachi">Karachi</option>
  <option value="Islamabad">Islamabad</option>
  <option value="Faisalabad">Faisalabad</option>
  <option value="Multan">Multan</option>
  <option value="Bawalpur">Bawalpur</option>
  <option value="Sargodha">Sargodha</option>
  <option value="Gujranwala">Gujranwala</option>
  <option value="Rahim Yar Khan">Rahim Yar Khan</option>
</select>
              <input type="text" style={{width:"80%",height:"50px",backgroundColor:"#F5F8FA",borderRadius:"20px",border:"2px solid grey"}}
               id="contactNo" value={contact.contactNo} 
               placeholder='Please enter cell no' required="true" 
              name="contactNo" onChange={handleChange}/>
              <label >Message</label><br/>
              <textarea style={{width:"100%",backgroundColor:"#F5F8FA",borderRadius:"20px",border:"2px solid grey"}}
              value={contact.message} 
              id="message" placeholder='Please enter message' required="true" 
              name="message" onChange={handleChange} 
              />
           
              <input type="submit" value="submit" 
              className='btn btn-md btn-primary'
              
              style={{position:"relative",top:"30px", borderRadius:"20px"
            
           }}/>
            </form>
           </div>
          </div>






        </div>
      </div>

<div className={styles.wrapper}>

  <div className={styles.item1}>
    <h3>Lahore</h3>
    <p><span><h6>Address:</h6> 155-A H Block D.H.A.</span></p>
    <p>
      <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        {/* <img src="../images/cellImg.svg " alt="ll"
    style={{backgroundColor:"blue"}}
    />  */}
    
       +92 (042) 35766771</span></p>
     <p><span><h6>Branch:2:</h6> 244-B1  A Block Modal Town</span></p>
    <p>
      
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
     +92 (042) 35177665</span></p>
     <p><span><h6>Timing:</h6> 02:00 PM - 02:00 AM</span></p>
   
  </div>
  <div className={styles.item1}>
  <h3>Karachi</h3>
    <p><span><h6>Address:</h6> 177 I.I.Chandrigar Road Karachi</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}> 
     +92 (021) 25766771</span></p>
     <p><span><h6>Branch:2:</h6> 33-A Tariq Road Karchi</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
      +92 (021) 2277665</span></p>
     <p><span><h6>Timing:</h6> 02:00 PM - 02:00 AM</span></p>
  </div> 
  <div className={styles.item1}>
  <h3>Islamabad</h3>
    <p><span><h6>Address:</h6> 77-A Blue Area Islamabad.</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
      +92 (051) 35766771</span></p>
     <p><span><h6>Branch:2:</h6> 244-B1  F10 Commercial Area</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (051) 35177665</span></p>
     <p><span><h6>Timing:</h6> 02:00 PM - 02:00 AM</span></p>
  </div>
  <div className={styles.item1}>
  <h3>Rahim Yar Khan</h3>
    <p><span><h6>Address:</h6> 101-B Shahbaz Pur Road Rahim Yar Khan.</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (068) 35766771</span></p>
     <p><span><h6>Branch:2:</h6> Abu Dhabi Rd, Rahim Yar Khan, Punjab</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (068) 35177665</span></p>
     <p><span><h6>Timing:</h6> 02:00 PM - 02:00 AM</span></p>
  </div>
  <div className={styles.item1}>
  <h3>Multan</h3>
    <p><span><h6>Address:</h6> Sher Shah Road. Multan Cantt. 787 B Block Commercial arae</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
       +92 (061) 37066771</span></p>
     <p><span><h6>Branch:2:</h6> University Road Taj Center </span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (061) 35177665</span></p>
     <p><span><h6>Timing:</h6> 02:00 PM - 02:00 AM</span></p>
     
  </div>
  <div className={styles.item1}>
  <h3>Sargodha</h3>
    <p><span><h6>Address:</h6> 132 A University Road Sargodha.</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (048) 9766771</span></p>
     <p><span><h6>Branch:2:</h6> 99 C Block Satellite Town </span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (048) 35177665</span></p>
     <p><span><h6>Timing:</h6> 02:00 PM - 02:00 AM</span></p>
  </div>
  <div className={styles.item1}>
  <h3>Bahawalpur</h3>
    <p><span><h6>Address:</h6> Ahmed Puri Gate Bahawalpur..</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (062) 5766771</span></p>
     <p><span><h6>Branch:2:</h6> 122-A Noor mahal Road</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (062) 5177665</span></p>
     <p><span><h6>Timing:</h6> 02:00 PM - 02:00 AM</span></p>
  </div>
  <div className={styles.item1}>
  <h3>Gujranwala</h3>
    <p><span><h6>Address:</h6> 66-B Commercial Arae Satellite town.

</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (055) 35766771</span></p>
     <p><span><h6>Branch:2:</h6> 61 Sialkot Road Gujranwala</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (055) 35177665</span></p>
     <p><span><h6>Timing:</h6> 02:00 PM - 02:00 AM</span></p>
  </div>
  <div className={styles.item1}>
  <h3>Faisalabad</h3>
    <p><span><h6>Address:</h6> 44-B Commercial Arae Madina town.</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (041) 4766771</span></p>
     <p><span><h6>Branch:2:</h6> 27 D Chowk Commercial arae Peoples colony faisalbabd</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (041) 5177665</span></p>
     <p><span><h6>Timing:</h6> 02:00 PM - 02:00 AM</span></p>
  </div>
  <div className={styles.item1}>
  <h3>New In Rawalpindi</h3>
    <p><span><h6>Address:</h6> 200 A Raja Bazar Rawalpindi.</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (051) 35766771</span></p>
     <p><span><h6>Branch:2:</h6> 61 Sadar Cantt. Opp. Pearl Continental Hotels</span></p>
    <p>
    <span >
      <i class="fa fa-phone" ></i>
      </span>
      <span style={{position:"relative",left:"10px"}}>
        +92 (051) 35177665</span></p>
     <p><span><h6>Timing:</h6> 02:00 PM - 02:00 AM</span></p>
  </div>
</div>

    </div>
  )
}
