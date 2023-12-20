import React, { useState, useEffect, useRef } from 'react';
import mascot from '../assets/png/mascot.PNG';
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div></div>
    )
}

const DiseaseLoopContent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const diseaseData = [
        {
            head: "โรคมะเร็ง",
            info: "สถิติการเป็นมะเร็งของคนไทยนั้นเพิ่มสูงขึ้นถึง 70,000 คน มีผู้เสียชีวิตไปด้วยโรคนี้ถึงปีละ 50,000 คนและมีแนวโน้มจะสูงขึ้นเรื่อย ๆ โดยมะเร็งยอดฮิตที่พบมากที่สุด โดยอันดับ 1 ของมะเร็งคือ มะเร็งตับ รองลงมาคือมะเร็งลำไส้ใหญ่และมะเร็งปอด"
        },
        {
            head: "โรคหลอดเลือดหัวใจ",
            info: "สาเหตุของการเกิดโรคมาจากนิสัยการทานอาหารที่มีไขมันสูง ไม่ค่อยรับประทานผักผลไม้ ไม่ยอมออกกำลังกาย ส่งผลให้ร่างกายเกิดไขมันไปจับ หรือเกาะผนังของหลอดเลือดที่ไปเลี้ยงหัวใจ จนตีบและแคบลง ทำให้หลอดเลือดมีอาการอักเสบ ร่างกายจึงต้องส่งเม็ดเลือดขาวมาทำการซ่อมแซม ก็ยิ่งทำให้เม็ดเลือดเหล่านี้ เข้าไปอุดตันทางเดินเลือด จนเลือดไม่อาจถูกส่งไปเลี้ยงหัวใจได้ ทำให้กล้ามเนื้อหัวใจตายจากการขาดเลือด ส่งผลให้หัวใจยุดเต้นอย่างเฉียบพลัน และเสียชีวิตอย่างรวดเร็ว"
        },
        {
            head: "โรคเบาหวาน",
            info: " โรคเบาหวาน คือโรคที่ร่างกายสร้างฮอร์โมนอินซูลินมามาก จนทำให้ระดับน้ำตาลในเลือดสูงกว่าปกติร่างกายจึงไม่สามารถใช้น้ำตาลได้อย่างเหมาะสม และตับอ่อนทำงานได้อย่างไม่เต็มที่ การรักษามีทั้งการฉีดอินซูลีนเข้าไปเพื่อกระตุ้นตับอ่อนให้สร้างอินซูลีน ต้องควบคุมอาหาร ลดมัน ลดเค็ม รวมถึงควบคุมการใช้ชีวิต พยายามออกกำลังกาย และพบแพทย์ตามนัดเสมอ"
        },
        {
            head: "โรคความดันโลหิตสูง",
            info: "โรคความดันสูงแบ่งเป็น 2 ประเภท คือ ชนิดที่ยังไม่ทราบสาเหตุที่แน่ชัด (Primary Hypertension หรือ Essential Hypertension) ซึ่งไม่สามารถระบุถึงต้นเหตุการเกิดได้ และชนิดที่ทราบสาเหตุ (Secondary Hypertension) ซึ่งอาจเกิดได้จากหลายสภาวะ เช่น ภาวะหยุดหายใจขณะหลับ โรคไต ปัญหาต่อมไทรอยด์ เนื้องอกที่ต่อมหมวกไต หลอดเลือดผิดปกติแต่กำเนิด การใช้ยาบางชนิด การใช้สารเสพติด หรือแอลกอฮอล์"
        },
        {
            head: "โรคทางจิตเวช",
            info: "นับเป็นหนึ่งในโรคที่คนไทยป่วยกันเยอะ บางคนก็รู้ตัวและสามารถเข้ารับการรักษาได้ทัน แต่คนอีกจำนวนไม่น้อยเลยที่ไม่รู้และเข้าใจผิดคิดว่าตัวเองแค่อาการป่วยทางกาย ซึ่งแท้จริงแล้วโรคนี้เกี่ยวข้องกับการเปลี่ยนแปลงทางอารมณ์ ความคิด หรือพฤติกรรม (หรือหลายอย่างรวมกัน) ส่งผลให้มีพฤติกรรมผิดแปลกจากคนทั่วไป เกิดพฤติกรรมที่ไม่ปกติ เกิดความทุกข์ทรมาน ไม่สามารถใช้ชีวิตให้ปกติได้ จนส่งผลให้เกิดการฆ่าตัวตายในที่สุด"
        },

    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % diseaseData.length);
        }, 5000);


        return () => clearInterval(interval);
    }, [currentIndex, diseaseData.length]);

    return (
        <>
            {
                diseaseData.map((item, index) => (
                    <>
                        {
                            currentIndex === index && <div className={`flex flex-col h-[10rem] space-y-6 text-start fade-in-out ${currentIndex === index ? 'fade-in' : 'fade-out'}`}>
                                <span className='text-[3rem]'>อันดับที่ {index + 1} {item.head}</span>
                                <p className='text-xl indent-14 leading-8'>{item.info}</p>
                            </div>
                        }
                    </>
                ))
            }
        </>


    )
}

function Homepage() {
    return (
        <div className='mt-14 mx-36 flex w-full flex-col text-end space-y-10'>
            <div class="w-[40%] ml-auto mr-0">
                <div class="relative text-background">
                    <input type="text" class="bg-white h-11 w-full px-6 rounded-[25px] focus:outline-none" name="" />
                        <span class="absolute top-[31.81%] right-5 border-l border-background pl-4"><IoSearchSharp class="hover:text-green-500 hover:cursor-pointer" /></span>
                </div>
            </div>
            <div><span className=' border-primary border-b-2 text-[2rem] py-2'>5 อันดับโรคร้ายที่คนไทยเสี่ยงเป็นและเสียชีวิต</span></div>
            <DiseaseLoopContent />
            <div className='m-auto h-[45%] w-fit p-4 '>
                <img src={mascot} className='h-full w-full' alt="" />
            </div>

        </div>
    )
}

export default Homepage