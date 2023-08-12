import React, {useEffect, useState} from 'react'
import { WithContext as ReactTags, Tag } from 'react-tag-input';


interface TagesInput {
  id:string,
  text:string
}
interface ListInput{
  text:string
}
interface JobInput {
  title: string;
  description: string;
  price:number;
  tags:TagesInput[]
  items:string[]
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
  const [inputText, setInputText] = useState('');

  const [items, setitems] = useState<string[]>([]) 
  const [value, setValue] = useState<JobInput>({
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

    const handleAddition = (tag: TagesInput) => {
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
      <h1 className='font-lora font-bold text-2xl pl-36 max-[600px]:pl-0 max-[600px]:text-center '> Add Job </h1>
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
          <label htmlFor="price" className='font-bold'> Price </label>
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
          <label htmlFor="list" className='font-bold'> List of services </label>
  
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
              Button
            </button>
          </div>
          
          <ul>
            {items? items.map((item, index)=>(
              <div className='flex'>
                <li> {item}  </li>
                <button className='text-red' 
                 onClick={() => {
                  const updatedList = items.filter((_, i) => i !== index);
                  setitems(updatedList);
                }}> X </button>
              </div>
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

          <li>
            <button type='submit' className='mt-4 px-4 py-2 border border-grey rounded-lg font-bold hover:text-grey bg-night text-white hover:bg-transparent text-md text-left'>Post Job</button>
          </li>
        </ul>


      </div>
    </div>
  </div>

  )
}

export default Workpost