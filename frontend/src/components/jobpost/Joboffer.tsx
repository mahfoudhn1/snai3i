import { faCircle, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect, useState} from 'react'
import { WithContext as ReactTags, Tag } from 'react-tag-input';


interface requirements {
    id:string,
    text:string
  }

  interface Offer {
    title: string;
    description: string;
    price:number;
    tags:requirements[]
    items:string[]
  }

function Joboffer() {



  const suggestions:requirements[] = [
    { id: "1", text: "html" },
    { id: "2", text: "css"},
    { id: "3", text: "javascript" },
    { id: "4", text: "python" }
  ]
  const KeyCodes = {
    comma: 188,
    enter: 13
  };
  
  const delimiters = [KeyCodes.comma, KeyCodes.enter];


  const [tags, setTags] = useState<requirements[]>([
    
  ])
  const [inputText, setInputText] = useState('');

  const [items, setitems] = useState<string[]>([]) 
  const [value, setValue] = useState<Offer>({
    title:"",
    description:"",
    price:0,
    tags: [],
    items:[],
  })
  const handelChang = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
    const {name, value} = event.target
    setValue((prevValue)=>({
      ...prevValue,
      [name] : value,
    }))
  }
    const handleDelete = (i: number) => {
      setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag: requirements) => {
      setTags([...tags, tag]);
      setValue((prevValue) => ({
        ...prevValue,
        tags: [...prevValue.tags, tag],
      }));
    };

    const handleListAdd = () => {

      if (inputText.trim() !== '') {
        setitems([...items, inputText]);
        setValue((prevValue) => ({
          ...prevValue,
          items: [...prevValue.items, inputText],
        }));
        setInputText('');
      }

    
    };
    

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleListAdd();
      }
    };


  return (
    <div className="flex">

    <div className="w-full p-8 flex-col mt-28">
      <h1 className='font-lora font-bold text-2xl pl-36 max-[600px]:pl-0 max-[600px]:text-center '> Offer Job </h1>
      <div className="informations">
        <ul className='w-1/3 mx-auto max-[600px]:w-full max-[600px]:p-4'>
          <li className='flex flex-col text-md font-roboto text-dark font-medium leading-5'>
          <label htmlFor="title" className='font-bold'> Job Title</label>
          <input type="text" 
            className='block min-h-[auto] w-full rounded border border-grey-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:placeholder:opacity-100 peer-focus:text-primary focus:shadow-3xl ' 
            placeholder='job title'
            name='title'
            id="title"
            required
            value={value.title}
            onChange={handelChang}
          />
          </li>
          <li className='flex flex-col text-md font-roboto mt-8 text-dark font-medium leading-5'>
          <label htmlFor="description" className='font-bold'> Job description</label>
          <textarea 
            rows={5}
            className='block min-h-[auto] w-full rounded border border-grey-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:placeholder:opacity-100 peer-focus:text-primary focus:shadow-3xl ' 
            placeholder='job description'
            name='description'
            id="description"
            required
            value={value.description}
            onChange={handelChang}
            
          />
          </li>
          <li className='flex flex-col text-md font-roboto mt-8 text-dark font-medium leading-5'>
          <label htmlFor="price" className='font-bold'> sallery </label>
          <input type="number" 
            className='block min-h-[auto] w-full rounded border border-grey-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:placeholder:opacity-100 peer-focus:text-primary focus:shadow-3xl ' 
            name='price'
            id="price"
            required
            value={value.price}
            onChange={handelChang}
          />
          </li>
          <li className='flex flex-col text-md font-roboto mt-8 text-dark font-medium leading-5'>
          <label htmlFor="list" className='font-bold'> List of requirements </label>
  
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
            onClick={handleListAdd} 
            >
              add
            </button>
          </div>
          
          <ul>
            {items? items.map((item, index)=>(

                <li  className="flex justify-between sw-full border-b-2 border-grey-2 border-opacity-100 py-1 ">
                <h1 className='px-4 py-1'>{item} </h1>   
                <button className='border border-grey-2 px-2 py-1 rounded-full ' 
                 onClick={() => {
                  const updatedList = items.filter((_, i) => i !== index);
                  setitems(updatedList);
                }}> <FontAwesomeIcon icon={faClose} /> </button> </li>
               
            )) : "" }
          </ul>
          </li>
          <li className="flex flex-col text-md font-roboto mt-4 text-dark font-medium leading-5">
          <label htmlFor='tags' className='font-bold'> Tools Used </label>
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            inputFieldPosition="inline"
            placeholder='Using...'
            autocomplete
          />
          </li>
            <li className="flex flex-col text-md font-roboto mt-4 text-dark font-medium leading-5">
            <ul className="flex max-[600px]:flex-col w-full justify-start ">
                <li className='mx-8'>
                <input type="checkbox" id="remote-option" value="" className="hidden peer" required/>
                <label htmlFor="remote-option" 
                className="inline-flex items-center justify-between w-full p-3 text-grey bg-transparent border-2 border-grey rounded-lg cursor-pointer peer-checked:border-grey-2 hover:text-white peer-checked:text-white peer-checked:bg-grey hover:bg-grey">                           
                    <div className="block">
                    <div className="w-full text-sm font-semibold">
                        Remote
                        <FontAwesomeIcon className='mx-2' icon={faCircle} />
                    </div>
                    </div>
                </label>
                </li>
                <li className='mx-8'>
                <input type="checkbox" id="onsite-option" value="" className="hidden peer" required/>
                <label htmlFor="onsite-option" 
                className="inline-flex items-center justify-between w-full p-3 text-grey bg-transparent border-2 border-grey rounded-lg cursor-pointer peer-checked:border-grey-2 hover:text-white peer-checked:text-white peer-checked:bg-grey hover:bg-grey">                           
                <div className="block">
                    <div className="w-full text-sm font-semibold">Onsite
                    <FontAwesomeIcon className='mx-2' icon={faCircle} />

                    </div>
                    </div>
                </label>
                </li>
            </ul>

            </li>
            <li className="flex flex-col text-md font-roboto mt-4 text-dark font-medium leading-5">
            <ul className="flex max-[600px]:flex-col w-full justify-start ">
                <li className='mx-8'>
                <input type="checkbox" id="parttime-option" value="" className="hidden peer" required/>
                <label htmlFor="parttime-option" 
                className="inline-flex items-center justify-between w-full p-3 text-grey bg-transparent border-2 border-grey rounded-lg cursor-pointer peer-checked:border-grey-2 hover:text-white peer-checked:text-white peer-checked:bg-grey hover:bg-grey">                           
                    <div className="block">
                    <div className="w-full text-sm font-semibold">
                        Part time
                        <FontAwesomeIcon className='mx-2' icon={faCircle} />
                    </div>
                    </div>
                </label>
                </li>
                <li className='mx-8'>
                <input type="checkbox" id="fulltime-option" value="" className="hidden peer" required/>
                <label htmlFor="fulltime-option" 
                className="inline-flex items-center justify-between w-full p-3 text-grey bg-transparent border-2 border-grey rounded-lg cursor-pointer peer-checked:border-grey-2 hover:text-white peer-checked:text-white peer-checked:bg-grey hover:bg-grey">                           
                <div className="block">
                    <div className="w-full text-sm font-semibold">Full time
                    <FontAwesomeIcon className='mx-2' icon={faCircle} />

                    </div>
                    </div>
                </label>
                </li>
            </ul>

            </li>
          <li>
            <button type='submit' className='mt-4 px-4 py-2 border border-grey rounded-lg font-bold hover:text-grey bg-night text-white hover:bg-transparent text-md text-left'>Post Job</button>
          </li>
        </ul>


      </div>
    </div>
  </div>

  )
}




export default Joboffer