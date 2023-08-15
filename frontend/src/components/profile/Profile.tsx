import React, {useState} from 'react'
import { faClose, faLocationPin, faPen, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../home/Card'
import { Link } from 'react-router-dom'

const Profile = () => {
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed illum repudiandae commodi sapiente vero repellendus, ratione nam voluptates. Voluptatum consectetur quas ad aliquam obcaecati nesciunt praesentium suscipit quo ipsum."
    const [content, setContent] = useState(text);
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingskills, setIsEditingskills] = useState(false);
    const [inputText, setInputText] = useState('');

    const [skills, setskills] = useState<string[]>([]) 

    const handleSkillAdd = () => {

        if (inputText.trim() !== '') {
        setskills([...skills, inputText]);
          setInputText('');
          handleSkillsEditToggle();
        }
  
      
      };
      
  
      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          handleSkillAdd();
          handleSkillsEditToggle();
        }
      };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };
    const handleSkillsEditToggle = () => {
        setIsEditingskills(!isEditingskills);
    };
    const handleContentChange = ( event :React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };
      
  return (
    <div className='bg-grey-2 flex ' >
        <div className="flex flex-col w-full ">
            <div className="bg-white mt-28 w-2/3 mx-8 rounded-lg border border-opacity-90 p-4 text-center">
            <div className="rounded-full overflow-hidden  mx-auto mb-4">
                <img className="h-32 w-32 rounded-full mx-auto" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </div>
            <p className="text-lg font-semibold py-4 border-b border-grey-2 ">Freelancer someone</p>
            <div className="text-md flex px-8 font-semibold py-4 border-b border-grey-2 justify-between">
                <span className='text-grey'> <FontAwesomeIcon icon={faLocationPin} /> From </span>
                <span className='text-grey'>Algeria</span>
            </div>
            <div className="text-md flex px-8 font-semibold py-4 border-b border-grey-2 justify-between">
                <span className='text-grey'> <FontAwesomeIcon icon={faUser} /> Member </span>
                <span className='text-grey'>2017</span>
            </div>

            </div>
            <div className="bg-white mt-8 w-2/3 mx-8 rounded-lg border border-opacity-90 p-4 text-center">
                <button
                    onClick={handleEditToggle}
                    className="mt-2 bg-dark text-white p-2 float-right rounded"
                >
                    {isEditing ? 'Save' : <FontAwesomeIcon icon={faPen} />}
                </button>

                {isEditing ? (
                    <textarea 
                    rows={5}
                    className='block min-h-[auto] w-full rounded border border-grey-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:placeholder:opacity-100 peer-focus:text-primary focus:shadow-3xl ' 
                    placeholder='job description'
                    name='description'
                    id="description"
                    required
                    value={content}
                    onChange={handleContentChange}
                    />


                ) : (
                    <div className="rounded p-2">
                    <p>{content}</p>
                    </div>
                )}

                </div>
                <div className="bg-white mt-8 w-2/3 mx-8 rounded-lg border border-opacity-90 p-4 ">
                    <div className="flex justify-between">
                    <label htmlFor="list" className='font-bold'> Skills</label>
                    
                    {isEditingskills? (
                    <div className="flex">
                        <input type="text" 
                        id="list" 
                        name="list" 
                        className='block min-h-[auto] w-full rounded border border-grey-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:placeholder:opacity-100 peer-focus:text-primary focus:shadow-3xl ' 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        required
                        />
                        <button type="button" 
                        className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-night text-white hover:bg-blue focus:z-10 focus:outline-none  transition-all text-sm"
                        onClick={handleSkillAdd} 
                        >
                        add
                        </button>
                    </div>
                    ):(
                        <button onClick={handleSkillsEditToggle} className='underline font-roboto text-md font-semibold '>add skills</button>
                    )}
   
                    </div>
                
                <ul className='flex'>
                    {skills? skills.map((skill, index)=>(

                        <li  className="flex w-fit bg-grey-2 rounded-lg my-2 border-grey-2 border-opacity-100 py-1 ">
                        <h1 className='px-2 py-1'>{skill} </h1>   
                        <button className=' border-grey-2 px-2 py-1 rounded-full ' 
                        onClick={() => {
                        const updatedList = skills.filter((_, i) => i !== index);
                        setskills(updatedList);
                        }}> <FontAwesomeIcon icon={faClose} /> </button> </li>
                    
                    )) : "" }
                </ul>
        </div>
        </div>

        <div className=" mt-28 w-full flex-col rounded-lg shadow-md p-4 text-center">
            <div className="mb-8 bg-white rounded-lg border border-opacity-90 p-4 ">
                <h1 className='font-lora text-xl'> my services </h1>
            </div>
            <div className=" flex flex-wrap bg-white">
            <Link to={'/joboffer'}>
                <div className="card max-w-xs mt-8 w-80 h-80 flex flex-col bg-white  border border-grey-2 justify-center mx-auto overflow-hidden rounded-lg shadow relative">
                <div className="w-60 h-60 border border-grey-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
                    <button className='text-4xl '><FontAwesomeIcon icon={faPlusCircle}/></button>
                </div>
                </div>
            </Link>
   
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>

    </div>
  )
}

export default Profile