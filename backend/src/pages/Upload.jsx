import { React, useState, useEffect } from 'react'
import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from "@tremor/react";
import { FaCapsules, FaVirusCovid } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { IoMdSwap } from "react-icons/io";
import Swal from 'sweetalert2'
import DiseaseTable from '../components/table/DiseaseTable';
import AdminTable from '../components/table/AdminTable';
import MedicineTable from '../components/table/MedicineTable';


const DatabaseTabs = () => {
    const [medicineData, setMedicineData] = useState([])
    const [diseaseData, setDiseaseData] = useState([])
    const [isTabActive, setIsTabActive] = useState(0);

    const tabsActiveHandle = (index) => {
        setIsTabActive(index);
    }

    const tabsPattern = [
        {
            label: 'Disease',
            icon: FaVirusCovid,
            function: () => tabsActiveHandle(0)

        },
        {
            label: 'Medicine',
            icon: FaCapsules,
            function: () => tabsActiveHandle(1)

        },
        {
            label: 'Admin',
            icon: RiAdminFill,
            function: () => tabsActiveHandle(2)

        }
    ]

    useEffect(() => {
        fetch('http://localhost:3001/medicine/api')
            .then(response => response.json())
            .then(data => setMedicineData(data))
            .catch(error => console.error('Error fetching post data:', error));

            fetch('http://localhost:3001/disease/api')
            .then(response => response.json())
            .then(data => setDiseaseData(data))
            .catch(error => console.error('Error fetching post data:', error));
    }, [])

    return (
        <div className='col-span-2'>
            <TabGroup>
                <TabList className=" border-none text-xl text-textPrimary">
                    {
                        tabsPattern.map((item, index) => (
                            <Tab onClick={item.function} key={index} className={`flex items-center ${isTabActive === index ? 'border-primary border-b-2 ' : ''}`} icon={item.icon}>{item.label}</Tab>
                        ))
                    }
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <DiseaseTable data={diseaseData}/>
                    </TabPanel>
                    <TabPanel>
                        <MedicineTable data={medicineData} />
                    </TabPanel>
                    <TabPanel>
                        <AdminTable />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>

    )
}


const InputData = (props) => (
    <input onChange={(e) => props.function(e, props.name)} className='h-[2rem] rounded-md text-background bg-textPrimary' type={props.type} />
)

const DiseaseUploader = () => {
    const [diseaseForm, setDiseaseForm] = useState({
        disease_name_thai: '',
        disease_name_eng: '',
        description: '',
        symptom: '',
        medicine_id: '',
        medicine_usage: ''
    });

    const onDiseaseFormChange = (e, fieldName) => {
        setDiseaseForm((prevState) => ({
            ...prevState,
            [fieldName]: e.target.value
        }));
    };

    const onDiseaseFormSubmit = async (e) => {
        e.preventDefault();
        console.log(diseaseForm);
        try {
            const response = await fetch('http://localhost:3001/disease/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(diseaseForm)
            })
            if (response.ok) {
                console.log("the post has been uploaded");
                Swal.fire({
                    title: 'Upload Successfuly',
                    text: 'Your post will show up at the main page soon.',
                    icon: 'success',
                    //timer: 3000,
                    confirmButtonText: 'OK',
                })
            } else {
                console.log("fail to upload the post");
                Swal.fire({
                    title: 'Upload Failed',
                    text: 'Fail to upload the post try again.',
                    icon: 'error',
                    timer: 3000,
                    confirmButtonText: 'OK',
                })
            }
        } catch (error) {
            Swal.fire({
                title: 'Upload Failed',
                text: error.message,
                icon: 'error',
                timer: 3000,
                confirmButtonText: 'OK',
            })
        }
    };
    const inputPattern = [
        { label: 'Disease Name (Thai)', input: <InputData function={onDiseaseFormChange} name="disease_name_thai" type="text" /> },
        { label: 'Disease Name (Eng)', input: <InputData function={onDiseaseFormChange} name="disease_name_eng" type="text" /> },
        { label: 'Description', input: <textarea onChange={(e) => onDiseaseFormChange(e, "description")} className='text-background bg-textPrimary rounded-md p-2' placeholder='Description' /> },
        { label: 'Symptom', input: <textarea onChange={(e) => onDiseaseFormChange(e, "symptom")} className='text-background bg-textPrimary rounded-md p-2' placeholder='Symptom' /> },
        { label: 'Medicine', input: <textarea onChange={(e) => onDiseaseFormChange(e, "medicine_id")} className='text-background bg-textPrimary rounded-md p-2' placeholder='Medicine' /> },
        { label: 'Medicine Usage', input: <textarea onChange={(e) => onDiseaseFormChange(e, "medicine_usage")} className='text-background bg-textPrimary rounded-md p-2' placeholder='Medicine Usage' /> }
    ];

    return (
        <form className='flex flex-col space-y-3' action="">
            {inputPattern.map((item, index) => (
                <div key={index} className='flex flex-col space-y-1'>
                    <label className='font-bold text-textPrimary text-xl' htmlFor="">{item.label}</label>
                    {item.input}
                </div>
            ))}
            <div className='grid grid-cols-2 gap-3 pt-6'>
                <button onClick={(e) => onDiseaseFormSubmit(e)} className='p-3 font-bold bg-secondary rounded-md hover:bg-background'>Upload</button>
                <button className='p-3 font-bold bg-secondary rounded-md hover:bg-background'>Clear</button>
            </div>
        </form>
    );
};

const MedicineUploader = () => {
    const [medicineForm, setMedicineForm] = useState({
        medicine_name: '',
        type_id: ''
    });
    const onMedicineFormChange = (e, fieldName) => {
        setMedicineForm(prevState => ({
            ...prevState,
            [fieldName]: e.target.value
        }));
    }
    const onMedicineFormSubmit = async (e) => {
        e.preventDefault();
        console.log(medicineForm);
        try {
            const response = await fetch('http://localhost:3001/medicine/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(medicineForm)
            })
            if (response.ok) {
                console.log("the post has been uploaded");
                Swal.fire({
                    title: 'Upload Successfuly',
                    text: 'Your post will show up at the main page soon.',
                    icon: 'success',
                    //timer: 3000,
                    confirmButtonText: 'OK',
                })
            } else {
                console.log("fail to upload the post");
                Swal.fire({
                    title: 'Upload Failed',
                    text: 'Fail to upload the post try again.',
                    icon: 'error',
                    timer: 3000,
                    confirmButtonText: 'OK',
                })
            }
        } catch (error) {
            Swal.fire({
                title: 'Upload Failed',
                text: error.message,
                icon: 'error',
                timer: 3000,
                confirmButtonText: 'OK',
            })
        }
    }
    const inputPattern = [
        { label: 'Medicine Name', input: <InputData function={onMedicineFormChange} name="medicine_name" type="text" /> },
        { label: 'Medicine Type', input: <textarea onChange={(e) => onMedicineFormChange(e, "type_id")} className='text-background bg-textPrimary rounded-md p-2' placeholder='Medicine Type' /> },
    ]
    return (
        <form className='flex flex-col space-y-3' action="">
            {inputPattern.map((item, index) => (
                <div key={index} className='flex flex-col space-y-1'>
                    <label className='font-bold text-textPrimary text-xl' htmlFor="">{item.label}</label>
                    {item.input}
                </div>
            ))}
            <div className='grid grid-cols-2 gap-3 pt-6'>
                <button onClick={(e) => onMedicineFormSubmit(e)} className='p-3 font-bold bg-secondary rounded-md hover:bg-background'>Upload</button>
                <button className='p-3 font-bold bg-secondary rounded-md hover:bg-background'>Clear</button>
            </div>
        </form>
    )
}

const UploaderSection = () => {
    const [isSwapper, setIsSwapper] = useState(false);
    const uploadSwapperHandle = () => {
        setIsSwapper(!isSwapper);
    }

    return (
        <div className='w-full flex flex-col space-y-3'>
            <div className='flex items-center pt-1 justify-between'>
                <span className='text-2xl font-bold'>Uploader</span>
                <button onClick={uploadSwapperHandle} className='text-lg font-bold flex items-center space-x-2 hover:text-primary'><IoMdSwap /> <span>{!isSwapper ? 'Disease' : 'Medicine'}</span></button>
            </div>

            <div className='h-fit border-primary border p-10 rounded-md w-full shadow-md shadow-[#000000]'>
                {
                    isSwapper ? <DiseaseUploader /> : <MedicineUploader />
                }
            </div>
        </div>
    )
}


function Upload() {

    return (
        <div className='w-full grid grid-cols-3 gap-10 m-10 text-textPrimary'>
            <UploaderSection />
            <DatabaseTabs />
        </div>
    )
}

export default Upload