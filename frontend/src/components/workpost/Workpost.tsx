import React, {useEffect, useState} from 'react'
import { WithContext as ReactTags, Tag } from 'react-tag-input';


interface TagesInput {
  id:string,
  text:string
}
interface JobInput {
  title: string;
  description: string;
  tags:TagesInput[]
}

const Workpost = () => {

  const suggestions:TagesInput[] = [
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


  const [tags, setTags] = useState<TagesInput[]>([
    
  ]) 
  const [value, setValue] = useState<JobInput>({
    title:"",
    description:"",
    tags: [],
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

    const handleAddition = (tag: TagesInput) => {
      setTags([...tags, tag]);
      setValue((prevValue) => ({
        ...prevValue,
        tags: [...prevValue.tags, tag],
      }));
    };


    useEffect(() => {
      console.log(value);
      
    });


  return (
    <div className="flex">

    <div className="w-full p-8 flex-col mt-32">
      <h1 className='font-lora font-bold text-2xl'> Add Job </h1>
      <div className="informations">
        <ul className='w-1/3 mx-auto'>
          <li className='flex flex-col text-md font-roboto text-dark font-medium leading-8'>
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
          <li className='flex flex-col text-md font-roboto mt-8 text-dark font-medium leading-8'>
          <label htmlFor="description" className='font-bold'> Job Title</label>
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
          <li className="flex flex-col text-md font-roboto mt-4 text-dark font-medium leading-8">
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
        </ul>

      </div>
    </div>
  </div>

  )
}

export default Workpost