import React from 'react';
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuTabs from './MenuTabs';
import Footer from './footer';

function App(){
  return( 
    <div className="container">
      <MenuTabs />
      <div className='text-center'><h4>เมนูอาหารยอดฮิตญี่ปุ่น</h4></div>
<div className="card-group" >
  <div className="card border-0">
    <div class="card-body ">
        <Avatar />
        <div className="card-text">
            <Intro />
        
       
    
        </div>
      </div>
    </div>
    <div className="card border-0">
      <div class="card-body ">
      <Avatar2 />
        <div className="card-text">
            <Intro2 />    
        </div>
      </div>
    </div>
    <div className="card border-0">
      <div class="card-body">
      <Avatar3 />
        <div className="card-text">
            <Intro3 />
        </div>
      </div>
    </div>
      </div>
      
      <Footer />
    
  </div>
  );
}

function Intro(){
  return(
    <div>
      <h1 >ข้าวหมูทอดทงคัตสึ</h1>
      <p>
      เริ่มกันที่ เมนูอาหารญี่ปุ่น ยอดฮิตอย่าง ข้าวหมูทอดทงคัตสึ 
      ข้าวหมูทอดสไตล์ญี่ปุ่น ที่จะทำให้คุณหลังรักการกินหมูทอด 
      ด้วยสัมผัสที่กรอบนอกนุ่มใน อร่อยได้ในคำเดียว ทำให้เป็นหนึ่งในเมนูยอดนิยมของคนไทยเลยก็ว่าได้ 
      ซึ่งสูตรนี้ได้มาจาก เชฟโฌ เชฟชาวญี่ปุ่นแท้ ๆ เลยทีเดียว รับรองว่า 
      ถ้าทำขาย รสชาติอร่อย ไม่แพ้ร้านอาหารญี่ปุ่นชื่อดังแน่นอน 
      </p>
     
    </div>
  );
}

function Intro2(){
  return(
    <div>
      <h1>ราเมนหมูชาชู</h1>
      <p>
      ราเมน เมนูอาหารญี่ปุ่น แบบเส้น ที่คนไทยหลายคนชื่นชอบ 
      ไม่แพ้การกินก๋วยเตี๋ยวแบบจีน เพราะให้รสชาติของน้ำซุปที่เข้มข้น 
      แถมเส้นยังหนานุ่ม ยิ่งกินกับหมูชาชู ยิ่งอร่อย ซึ่งถ้าหากใครอยากทำทานเองที่บ้าน 
      ไม่ต้องไปกินที่ร้าน ชามละ 200 - 300 บาท แล้วละก็ ทำตามสูตรนี้ได้เลย รับรองว่า 
      อร่อยไม่แพ้กัน
      </p>
 
    </div>
  );
}

function Intro3(){
  return(
    <div>
      <h1>ทาโกะยากิ</h1>
      <p>
      ทาโกะยากิ ไส้ปลาหมึก เป็น เมนูอาหารญี่ปุ่น 
      ที่นิยมมาก ๆ ในโอซาก้า ซึ่งสูตรดั้งเดิมนั้น ปลาหมึกที่ใช้ ต้องเป็นปลาหมึกทาโกะ หรือ 
      ปลาหมึกยักษ์ญี่ปุ่น  และ ใช้เฉพาะส่วนหนวด มาทำเป็นไส้ ซึ่งถ้าหากใครอยากทำตาม 
      ก็อาจต้องลงทุนกันสักหน่อย เพราะปลาหมึกชนิดนี้ ค่อนข้างมีราคาแพงไม่น้อยเลยทีเดียว
      </p>
  
    </div>
  );
}



function Avatar(){
  return <img className="rounded-circle" src="butod.png"  alt="" width="200" height="200  "></img>
}
function Avatar2(){
  return <img className="rounded-circle" src="oudong.png" alt=" "width="200" height="200"></img>
}function Avatar3(){
  return <img className="rounded-circle" src="tako.png" alt=""width="200" height="200"></img>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

