import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import sss from './Search.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SearchProps = DefaultInputPropsType & {
    setInputTxt: (value:string)=> void,
    submitSearch: ()=> void,
    searchTxt: string
}

function Search(props:SearchProps) {

    const setInputTxt=(e:ChangeEvent<HTMLInputElement>)=>{
        props.setInputTxt(e.currentTarget.value)
    }

    function clickHandler(e:KeyboardEvent<HTMLInputElement>){
        if (e.key === "Enter"){props.submitSearch()}

    }

  return (
    <div className={sss.search_box}>
      <input
          className={sss.inputArea}
          type={"text"}
          value={props.searchTxt}
          onChange={setInputTxt}
          onKeyPress={clickHandler}
            />

        <div className={sss.searchDiv}
             onClick={props.submitSearch}
        >
            Search
        </div>

    </div>
  );
}

export default Search;
